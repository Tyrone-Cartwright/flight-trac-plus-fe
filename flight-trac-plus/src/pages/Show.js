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
  const removeFlight = (evt) => {
    props.deleteFlight(flights._id);
    props.history.push('/');
  };
  return <div></div>;
};

export default Show;
