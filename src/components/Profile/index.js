import React from 'react';


const Profile = props => {
  
  return (
    <div>
      <div className="profileImg"><img  src={props.profile.img}  alt="profile pic" /></div>
      <h1 >{props.profile.name}</h1>
      <h2 >{props.profile.carrer}</h2>
      <hr></hr>
      <ul >
        <li>{props.profile.cuntry}</li>
        <li><a href={`mailto:${props.profile.email}`}>{props.profile.email}</a></li>
      </ul>
      <hr></hr>
      <ul >
        <li><a  href={props.profile.github}><span >github</span></a></li>
      </ul>
      <hr></hr>
      
      <p >I built this site with <a href="https://facebook.github.io/react/">React</a>  The full source code can be found in <a href="https://github.com/Nouf112233/CV.git">my Github repo</a>.</p>
    </div>
  )
};


export default Profile;
