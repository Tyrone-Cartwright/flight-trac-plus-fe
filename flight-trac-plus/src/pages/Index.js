import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  const [flightForm, setFlightForm] = useState(getNewFlight());

  // handleChange for new flight form
  const handleChange = (evt) => {
    setFlightForm((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  // handleSubmit for new flight form
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <h1>Index</h1>
    </section>
  );
};

export default Index;
