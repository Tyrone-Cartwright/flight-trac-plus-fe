// import { useState } from 'react';
import { Link } from 'react-router-dom';
import airports from '../data/airports';
// import flightClass from '../data/flightClass';
// import tripType from '../data/tripType';

const Index = (props) => {
  const loaded = () => {
    return (
      <table>
        <thead className='flight'>
          <tr>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Infants</th>
            <th>Trip Type</th>
            <th>Flight Class</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport, index) => {
            return (
              <>
                <tr key={index}>
                  <td>
                    <Link to={`/flight/${airport._id}`}>
                      {airport.departure}
                    </Link>
                  </td>
                  <td>{airport.arrival}</td>
                  <td>{airport.adults}</td>
                  <td>{airport.children}</td>
                  <td>{airport.infants}</td>
                  <td>{airport.tripType}</td>
                  <td>{airport.flightClass}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.flight ? loaded() : loading();
};

export default Index;
