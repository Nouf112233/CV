import React from "react";
import { Link } from 'react-router-dom'

const Projects = (props) => {
  // const getEducation = props.education.map((item, index) => {
  // 	return (
  // 			<p key={index}>{item}</p>
  // 		)
  // });

  return (
    <div className="container">
      <div className="education">
        <h2>some of my projects</h2>
      </div>
      <div className="flex">
        <hr className="line" />
      </div>
      <div className="element">
        {props.education.map((item, index) => {
          return (
            <div key={index}>
              <p>**{item.name}</p>
              {item.info&&<p>{item.info}</p>}
              {item.link&&<p><a href={item.link}>heroku link</a></p>}
              {item.github&&<p><a href={item.github}>github link</a></p>}
              {item.disc&& <p>{item.disc}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
