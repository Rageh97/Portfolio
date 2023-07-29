import React from "react";

import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Animation from "./Components/Animation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Projects from './Components/Projects';
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
    {/* <Animation/> */}
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-12 col-sm-2 mx-5  container-content">
            <Header />
          </div>
          <div className="col-9  container-content">
           
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<About />}/>
              <Route path="/contact" element={<Contacts />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/skills" element={<Skills />}/>
            </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      {/* <Header />
      <Skills />
      <Projects />
      <Contacts/>
      <Footer/>
      <MobileFooter/> */}
    </>
  );
};

export default App;
