import React from 'react';
import greece from '../assets/greece.jpg';
import stay from '../assets/stay.jpg';
import vacay from '../assets/vacay.jpg';

const Destinations = () => {
  return (
    <>
      <section className='destinations'>
        <h3>Catering to your desired locations</h3>
        <div className='grid-dest'>
          <div>
            <img src={greece} alt='greece' />
            <h4>Fly to Greece</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              quasi impedit laboriosam eaque ullam et.
            </p>
          </div>
          <div>
            <img src={stay} alt='greece' />
            <h4>Fly to Aruba</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              quasi impedit laboriosam eaque ullam et.
            </p>
          </div>
          <div>
            <img src={vacay} alt='greece' />
            <h4>Fly to Mombasa</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              quasi impedit laboriosam eaque ullam et.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
