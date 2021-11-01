import React, { Component } from 'react'
import "./style.css"

export default class Main extends Component {
    render() {
        return (
            const App = props => {
  const { jsonObj: { basics, work, skills, education } } = props
  const profileData = basics;
  const aboutData = profileData.summary;
  const workData = work;
  const skillsData = skills;
  const educationData = education;
  // console.log(profileData)
  return (
    <div className="container">
      <aside>
        <div className="inner">
          <Profile profileData={profileData} />
        </div>
      </aside>
      <main>
        <div className="inner">
          <About aboutData={aboutData} />
          <Work workData={workData} />
          <Skills skillsData={skillsData} />
          <Education educationData={educationData} />
        </div>
      </main>
    </div>
    )
};

App.propTypes = {
    jsonObj: object.isRequired
}

export default App;
        )
    }
}
