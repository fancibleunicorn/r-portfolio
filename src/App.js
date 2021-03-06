import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';



function App() {

const [contactSelected, setContactSelected] = useState(false);
const [aboutSelected, setAboutSelected] = useState(false);
const [projectSelected,setProjectSelected] = useState(false);
const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <body className="bg-light">
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      projectSelected={projectSelected}
      setProjectSelected={setProjectSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}

      ></Nav> 

      {!contactSelected && !aboutSelected && !projectSelected &&!resumeSelected ? (
        <Main></Main>
      ) : (
        <div></div>
      )}

      {contactSelected ? (
        <Contact></Contact>
      ) : (
      <div></div>
      )}

      {aboutSelected ? (
        <About></About>
      ) :
      <div></div>
      }

      {projectSelected ? (
        <Projects></Projects>
      ) :
      <div></div>
      }

      {resumeSelected ? (
        <Resume></Resume>
      ) :
      <div></div>
      }

      <Footer></Footer>
    </body>
  );
}

export default App;
