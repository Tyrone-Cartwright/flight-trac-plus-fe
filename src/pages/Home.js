import React from 'react';
import travel from '../components/Video/travel.mp4';

const Home = () => {
  return (
    <>
      <section className='home'>
        <video
          className='video'
          autoPlay={true}
          muted={false}
          loop={true}
          zIndex='-1'
        >
          <source src={travel} />
        </video>
        <div className='overlay'>
          <h1>Flight Trac Plus Agency</h1>
          <p>Travel the world with US!</p>
        </div>
      </section>
    </>
  );
};

export default Home;
