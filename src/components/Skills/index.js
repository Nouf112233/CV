import React from 'react';
import "./style.css"

const Skills = (props) => {
  
    const getSkills = props.skills.map((item, index) =>{
      return (<li key={index}>{item}</li>)
    });

  	return (
      <div className="container">
      <div className="title">
        
        <h2>SKILLS</h2>
      </div>
      <div className="flex">
        <hr className="line" />
      </div>
      <div className="containerLi">
        <ul className="list">
        {getSkills}
        </ul>
      </div>
    </div>

  	)
};


export default Skills;
