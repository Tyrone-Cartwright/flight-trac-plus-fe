import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from '../../pages/Index';
import Show from '../../pages/Show';
import CreateForm from '../../pages/CreateForm';

const Main = (props) => {
  const [flight, setFlight] = useState('');

  const URL = 'https://flight-trac-plus.herokuapp.com/flight/';

  const getFlight = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setFlight(data);
  };

  const createFlight = async (flights) => {
    await fetch(URL + 'dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flights),
    });

    getFlight();
  };

  const updateFlight = async (flights, id) => {
    await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flights),
    });
    getFlight();
  };

  const deleteFlight = async (id) => {
    await fetch(`${URL}${id}`, { method: 'DELETE' });
    getFlight();
  };

  useEffect(() => getFlight(), []);

  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Index flight={flight} createFlight={createFlight} />
        </Route>
        <Route path='/dashboard'>
          <CreateForm createFlight={createFlight} />
        </Route>
        <Route
          path='/flight/:id'
          render={(rp) =>
            flight.length ? (
              <Show
                {...rp}
                flight={flight}
                updateFlight={updateFlight}
                deleteFlight={deleteFlight}
              />
            ) : (
              <Redirect to='/' />
            )
          }
        />
      </Switch>
    </main>
  );
};

export default Main;
