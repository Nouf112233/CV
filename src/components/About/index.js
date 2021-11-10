import React from 'react';
import "./style.css"


const About = props => {
  
  return (
    <div className="about">
      <div className="main">
        
        <h2>ABOUT</h2>
      </div>
      <div className="container">
        <hr className="line" />
      </div>
      <div className="text">
        <p>{props.about}</p>
      </div>
    </div>
    
  );
};

export default About;