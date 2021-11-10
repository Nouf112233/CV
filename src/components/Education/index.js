import React from 'react';
import "./style.css"


const Education = props => {
	
	const getEducation = props.education.map((item, index) => {
		return (
				<p key={index}>{item}</p>
			)
	});

	return (
		<div className="container">
		<div className="education">
		  <h2>EDUCATION</h2>
		</div>
		<div className="flex">
		  <hr className="line" />
		</div>
		<div className="element">
		{getEducation}
		</div>
	  </div>

	)
};


export default Education;