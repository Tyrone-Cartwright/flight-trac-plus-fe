import { useState } from 'react';
import airports from '../data/airports';
import flightClass from '../data/flightClass';
import tripType from '../data/tripType';

const Show = (props) => {
  const id = props.match.params.id;
  const flight = props.flight;
  const flights = flight.find((f) => f._id === id);

  // state for form
  const [editFlightForm, setEditFlightForm] = useState();
  console.log(editFlightForm);

  // handleChange function for flight form
  const handleChange = (evt) => {
    setEditFlightForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  // handleSubmit for flight form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.updateFlight(editFlightForm, flights._id);
    props.history.push('/');
  };

  // delete function to remove flight
  const removeFlight = (evt) => {
    props.deleteFlight(flights._id);
    props.history.push('/');
  };
  return (
    <div id='overlay'>
      <form id='form-control' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='departure'>Departing From:</label>
          <select onChange={handleChange} name='departure' id='departure'>
            <option>Departing Airport</option>
            {airports.map((departure, index) => (
              <option key={index} name='departure' value={departure.name}>
                {departure.name}
              </option>
            ))}
          </select>
        </div>
        <div className='input-field'>
          <label htmlFor='arrival'>Arriving At:</label>
          <select onChange={handleChange} name='arrival' id='arrival'>
            <option>Arriving at Airport</option>
            {airports.map((arrival, index) => (
              <option key={index} value={arrival.name}>
                {arrival.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='adults'>Adults:</label>
          <select onChange={handleChange} name='adults' id='adults'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div>
          <label htmlFor='children'>Children:</label>
          <select onChange={handleChange} name='children' id='children'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div>
          <label htmlFor='infants'>Infants:</label>
          <select onChange={handleChange} name='infants' id='infants'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div>
          <label htmlFor='flightClass'>Flight Class:</label>
          <select onChange={handleChange} name='flightClass' id='flight-class'>
            <option value={flightClass.name}>Class:</option>
            {flightClass.map((classTrip, index) => (
              <option key={index} value={classTrip}>
                {classTrip.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='tripType'>Traveleing:</label>
          <select onChange={handleChange} name='tripType' id='traveling'>
            <option value={tripType.name}>Traveling</option>
            {tripType.map((trip, index) => (
              <option key={index} value={trip}>
                {trip.name}
              </option>
            ))}
          </select>
        </div>

        <input type='submit' value='Update Flight' />
        <button id='delete' onClick={removeFlight}>
          DELETE
        </button>
      </form>
    </div>
  );
};

export default Show;
