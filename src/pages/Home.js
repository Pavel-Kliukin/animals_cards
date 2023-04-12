import React from 'react';
import './Home.css';


const Home = (props) => {
  return (
    <div className="mainBox">
      <div className="animalsLink">
        <div className='aLinkHeader'>
          {props.animalslink}
        </div>
      </div>
      <div className="birdsLink">
        <div className='bLinkHeader'>
          {props.birdslink}
        </div>
      </div>
    </div>
  );
};

export default Home;