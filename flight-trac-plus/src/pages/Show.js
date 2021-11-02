import { useState } from 'react';

const Show = (props) => {
  const id = props.match.params.id;
  const flight = props.flight;
  const flights = flight.find((f) => f._id === id);

  // state for form
  const [editFlightForm, setEditFlightForm] = useState(flights);

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
  // const removeFlight = (evt) => {
  //   props.deleteFlight(flights._id);
  //   props.history.push('/');
  // };
  return (
    <div>      
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={editFlightForm.name}
          name='departure'
          placeholder='Departure'
          onChange={handleChange}
        />
        <input
          type='text'
          value={editFlightForm.arrival}
          name='arrival'
          placeholder='Arrival'
          onChange={handleChange}
        />
        <input
          type='text'
          value={editFlightForm.adults}
          name='adults'
          placeholder='Adults'
          onChange={handleChange}
        />
        <input
          type='text'
          value={editFlightForm.children}
          name='children'
          placeholder='Children'
          onChange={handleChange}
        />
        <input
          type='text'
          value={editFlightForm.infants}
          name='infants'
          placeholder='Infants'
          onChange={handleChange}
        />
        <input
          type='text'
          value={editFlightForm.tripType}
          name='tripType'
          placeholder='Trip Type'
          onChange={handleChange}
        />
        <input
          type='text'
          value={editFlightForm.class}
          name='class'
          placeholder='Class'
          onChange={handleChange}
        />
        <input
          type='text'
          value={editFlightForm.time}
          name='time'
          placeholder='Time'
          onChange={handleChange}
        />
        <input type='submit' value='Update Flight' />
      </form>
    </div>
  );
};

export default Show;
