
import  React , {useState} from "react"
import Profile from "./components/Profile"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import "./App.css";

function App() {
  // eslint-disable-next-line
  const [cv, setCv] = useState({profile:{imge:`.../img/cv.jpg`,name:"Nouf Alateeq", carrer:" webSit Developer " ,cuntry:"Saudi Arabia",email:'nouf.ateeq@gmail.com',github:'https://github.com/Nouf112233'},
   about:"A trainee at Tuwaiq camp 1000 for programming in the javascript track I love programming and strive for self-development and I made this CV with react",
  skills:["Html","Css","Javascript","Bootstrap","JQuary","Dom","React"],
  education:["Bachelor of Information Technology","Business management diploma","General Education Diploma","Javascript Path Programming Camp"]
});

  return (
    <div className="container">
        <div className="lift">
            <Profile profile={cv.profile} />
        </div>
        <div className="right">
            <About about={cv.about} />
            <hr></hr>
            <Skills skills={cv.skills} />
            <hr></hr>
            <Education education={cv.education} />
        </div>
    </div>
      
    
  );
}

export default App;
