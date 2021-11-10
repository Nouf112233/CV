import React from 'react';
import "./style.css"


const Profile = props => {
  
  return (
    <div className="infoWrapper">
      <div className="felx-container"><img  src="./img/cv.jpg"  alt="profile pic" className="profileImage" /></div>
      <div className="felx-container"><h1 className="name">{props.profile.name}</h1></div>
      <div className="felx-container"><h2 className="jobTitle">{props.profile.carrer}</h2></div>
      <hr className="line" />
      <div className="felx-container"><ul >
        <li className="info-parag">{props.profile.cuntry}</li>
        <li className="info-parag"><a href={`mailto:${props.profile.email}`}>{props.profile.email}</a></li>
      </ul></div>
      <hr className="line" />
      <div className="felx-container"><ul >
        <li className="github"><a  href={props.profile.github}><span >github</span></a></li>
      </ul></div>
      
      <hr className="line" />
      <div className="felx-container"><p className="info-parag">I built this site with <a href="https://facebook.github.io/react/">React</a>  The full source code can be found in <a href="https://github.com/Nouf112233/CV.git">my Github repo</a>.</p></div>
      
    </div>
  )
};


export default Profile;
