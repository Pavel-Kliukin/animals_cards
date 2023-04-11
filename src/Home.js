import React from 'react';
import './Home.css';


const Home = (props) => {
  return (
    <div className="mainBox">
      <div className="animalsLink">
        {props.animalslink}
      </div>
      <div className="birdsLink">
        {props.birdslink}
      </div>
    </div>
  );
};

export default Home;