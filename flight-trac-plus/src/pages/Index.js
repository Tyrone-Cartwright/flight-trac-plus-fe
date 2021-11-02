import { useState } from 'react';
// import { Link } from 'react-router-dom';
import airports from '../data/airports';
import flightClass from '../data/flightClass';
import tripType from '../data/tripType';

const Index = (props) => {
  const [flightForm, setFlightForm] = useState(getNewFlight());
  console.log(flightForm);

  const loaded = () => {
    return (
      <div className='flight'>
        {/* <Link to={`/flight/${flight._id}`}>
          <h1>{flight.name}</h1>
        </Link> */}
        <h3>{flightForm.departure}</h3>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // handleChange for new flight form
  const handleChange = (evt) => {
    console.log(evt.target.name, evt.target.value);
    setFlightForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  // handleSubmit for new flight form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(flightForm);
    props.createFlight(flightForm);
    setFlightForm(getNewFlight());
  };

  function getNewFlight() {
    return {
      departure: '',
      arrival: '',
      adults: '',
      children: '',
      infants: '',
      tripType: '',
      class: '',
      time: '',
    };
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='departure'>Departing From:</label>
        <select onChange={handleChange} name='departure' id='departure'>
          <option>Departing Airport</option>
          {airports.map((airport, index) => (
            <option key={index} name='departure' value={airport.name}>
              {airport.name}
            </option>
          ))}
        </select>
        <label htmlFor='arrival'>Arriving At:</label>
        <select onChange={handleChange} name='arrival' id='arrival'>
          <option value=''>Arriving at Airport</option>
          {airports.map((airport, index) => (
            <option key={index} value={airport.name}>
              {airport.name}
            </option>
          ))}
        </select>
        <label htmlFor='adults'>Adults:</label>
        <select onChange={handleChange} name='adults' id='adults'>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <label htmlFor='children'>Children:</label>
        <select onChange={handleChange} name='children' id='children'>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <label htmlFor='infants'>Infants:</label>
        <select onChange={handleChange} name='infants' id='infants'>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <select onChange={handleChange} name='flight-class' id='flight-class'>
          <option value=''>Class:</option>
          {flightClass.map((classTrip, index) => (
            <option key={index} value={classTrip.name}>
              {classTrip.name}
            </option>
          ))}
        </select>
        <select onChange={handleChange} name='traveling' id='traveling'>
          <option value=''>Traveling</option>
          {tripType.map((trip, index) => (
            <option key={index} value={trip.name}>
              {trip.name}
            </option>
          ))}
        </select>
        <input type='submit' value='Book Flight' />
      </form>
      {props.flight ? loaded() : loading()}
    </section>
  );
};

export default Index;
