import React from 'react';


const Education = props => {
	
	const getEducation = props.education.map((item, index) => {
		return (
				<h6 key={index}>{item}</h6>
			)
	});

	return (
		<div className="education">
			<h2> Education</h2>
			{getEducation}
		</div>
	)
};


export default Education;