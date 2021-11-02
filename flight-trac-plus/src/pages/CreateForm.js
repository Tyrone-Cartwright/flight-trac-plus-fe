import { useState } from 'react';
import airports from '../data/airports';
import flightClass from '../data/flightClass';
import tripType from '../data/tripType';

const CreateForm = ({ createFlight }) => {
  const [flightForm, setFlightForm] = useState(getNewFlight());

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
    createFlight(flightForm);
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
      flightClass: '',
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
        <select onChange={handleChange} name='flightClass' id='flight-class'>
          <option value={flightClass}>Class:</option>
          {flightClass.map((classTrip, index) => (
            <option key={index} value={classTrip.name}>
              {classTrip.name}
            </option>
          ))}
        </select>
        <select onChange={handleChange} name='tripType' id='traveling'>
          <option value={tripType}>Traveling</option>
          {tripType.map((trip, index) => (
            <option key={index} value={trip.name}>
              {trip.name}
            </option>
          ))}
        </select>
        <input type='submit' value='Book Flight' />
      </form>
    </section>
  );
};

export default CreateForm;
