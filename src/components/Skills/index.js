import React from 'react';

const Skills = props => {
  
    const getSkills = props.map(function(item, index) {
      return (<li key={index}><span>{item}</span></li>)
    });

  	return (
  	  <section className="skills">
        <h2> Skills</h2>
        <ul>{getSkills}</ul>
      </section>
  	)
};


export default Skills;
