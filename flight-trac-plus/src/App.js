import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Show from './pages/Show';
import { auth } from './services/firebase';

function App() {
  const [user, setUser] = useState(null);

  const [flights, setFlights] = useState([]);

  const fetchData = useRef(null);

  const URL = 'http://localhost:3000/api/flight'; // Dev URL

  //const URL = 'https://flight-trac-plus.herokuapp.com/flight'; // Production URL

  // flights helper functions
  const getFlights = async () => {
    if (!user) return;

    // get a secure id token from our firebase user
    const token = await user.getIdToken();
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const flights = await response.json();
    setFlights(flights);
  };

  const createFlights = async (flight) => {
    if (!user) return;
    const token = await user.getIdToken();
    const data = { ...flight, managedBy: user.uid }; // attach logged in user's uid to the data we send to the server
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });
    getFlights(); // we can now refresh our list of flights
  };

  const createFlightNote = async (flightNote, id) => {
    if (!user) return;
    const token = await user.getIdToken();
    const data = { ...flightNote, createdBy: user.uid };
    await fetch(`${URL}/${id}/notes`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });
    getFlights();
  };

  // create a reference to our createContact function that persists between renders
  // this will help mitigate memory leaks
  useEffect(() => {
    fetchData.current = getFlights;
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        fetchData.current();
      } else {
        setFlights([]);
      }
    });

    // TODO: only get flights after a user has signed in
    return () => unsubscribe(); // clean up action - remove observer from memory when not needed
  }, [user]);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route
          path='/login'
          render={() => (user ? <Redirect to='/dashboard' /> : <Login />)}
        />
        <Route
          path='/dashboard'
          render={() =>
            user ? (
              <Dashboard flights={flights} createFlights={createFlights} />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
        <Route
          path='/flights/:id'
          render={(props) =>
            user ? (
              <Show
                flight={flights.find((f) => f._id === props.match.params.id)}
                createFlightNote={createFlightNote}
              />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
