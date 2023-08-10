import ReactDOM from "react-dom/client";
import './App.css';
import image from './Portfolio/MacBook Pro 16_ - 1.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Portfolio/main.js';
import Resume from './Portfolio/resume.js';
import Project from './Portfolio/project.js';
import Contact from './Portfolio/contact.js';



function App() {
  return (
  <div>  
    <body>
        <img class="bg" src={image} alt="web"/>
        <div class="menu">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT</p>       
        </div>
        <p class="intro"> Hey there!! This Aswath Chakravarthi</p>
        <p class="intro2">As an ambitious college student with a fervent passion for AI & ML, data science, cloud technologies, and UX/UI design. My comprehensive understanding of various AI & ML algorithms and frameworks, coupled with my proficiency in cloud computing principles, I have experience in developing innovative solutions and contributing as a team player.</p>
       
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="Resume" element={<Resume />} />
        <Route path="Project" element={<Project />} />
        <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>

      
    </div>
    </body>
  </div>
  );
}

export default App;