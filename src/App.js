
import  React , {useState} from "react"
import Profile from "./components/Profile"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"

import "./App.css";

function App() {

 
  // eslint-disable-next-line
  const [cv, setCv] = useState({profile:{name:"Nouf Alateeq", carrer:" web Developer " ,cuntry:"Saudi Arabia",email:'nouf.ateeq@gmail.com',github:'https://github.com/Nouf112233'},
   about:" web developer I seek to develop my programming skills and learn constantly. I have made many front-end and back-end websites on my own and within a team and ready to learn any other programming language and move between languages. I’m looking to work in a professional environment to learn ",
  skills:["Html , Css , Javascript , Dom , JQuary ","Bootstrap , React , Redux , Next","Nodejs , express , Python , FastAPI , API","Authentication , authorization "," MongoDB , PostgreSQL , SQL","git , github , heroku , deta"],
  education:["Bachelor of Information Technology","Business management diploma","General Education Diploma"," full stack Javascript Camp","backend Python  Camp"],
  projects:[{name:"fullStack E-Commerce",link:"https://project-3brood.herokuapp.com/",disc:"react,nodejs,mongodb,SeasionStorage,file system,authentication",github:"https://github.com/Nouf112233/project2backend"},{name:" E-Commerce frontend",github:"https://github.com/Nouf112233/project2frontend",},{name:"fullStack websit for coding challenges",link:"https://codingchallenge-frontend.herokuapp.com/",disc:"react,redux,nodejs,mongodb,authentication,authorization,LocalStorage,fairbase, redux" ,github:"https://github.com/MP-Project-Nouf",info:"admin account : username:ahmed , password:Aa12&12"},{name:"react flip card game",link:"http://flipcardgame.herokuapp.com/" , github:"https://github.com/Nouf112233/cap",disc:"with teem use react"}]
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
            <hr></hr>
            <Projects education={cv.projects} />
        </div>
    </div>
      
    
  );
}

export default App;
