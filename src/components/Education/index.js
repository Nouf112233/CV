import React from 'react';


const Education = props => {
	
	const getEducation = props.map((item, index) => {
		return (
				<h3 key={index}>{item}</h3>
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