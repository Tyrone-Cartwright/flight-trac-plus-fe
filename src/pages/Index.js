// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  const loaded = () => {
    return (
      <section className='flight-index'>
        <div className='overlay'>
          <table>
            {/* <thead className='flight'>
              <tr>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Infants</th>
                <th>Trip Type</th>
                <th>Flight Class</th>
              </tr>
            </thead> */}
            <tbody className='flight-show'>
              {props.flight.map((airport, index) => {
                return (
                  <div key={index} className='flight-container'>
                    <tr>
                      <th>Departure</th>
                      <td>
                        <Link to={`/flight/${airport._id}`}>
                          {airport.departure}
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <th>Arrival</th>
                      <td>{airport.arrival}</td>
                    </tr>

                    <tr>
                      <th>Adults</th>
                      <td>{airport.adults}</td>
                    </tr>

                    <tr>
                      <th>Children</th>
                      <td>{airport.children}</td>
                    </tr>

                    <tr>
                      <th>Infants</th>
                      <td>{airport.infants}</td>
                    </tr>

                    <tr>
                      <th>Trip Type</th>
                      <td>{airport.tripType}</td>
                    </tr>

                    <tr>
                      <th>Flight Class</th>
                      <td>{airport.flightClass}</td>
                    </tr>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return props.flight ? loaded() : loading();
};

export default Index;
