import React from 'react';

const Skills = (props) => {
  
    const getSkills = props.skills.map((item, index) =>{
      return (<li key={index}>{item}</li>)
    });

  	return (
  	  <div className="skills">
        <h2> Skills</h2>
        <ul>{getSkills}</ul>
      </div>
  	)
};


export default Skills;
