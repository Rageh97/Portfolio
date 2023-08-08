import React from "react";

import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import Animation from "./Components/Animation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import MobileHeader from "./Components/MobileHeader";
import Particle from "./Components/Particle";

const App = () => {
  return (
    <>
      <Particle />

      <div className="container   mt-2 mt-lg-5 p-4">
        <div className="row d-block d-sm-flex">
          <div className=" col-2 mx-0 mx-xl-4  d-none d-xl-flex container-content-side">
            <Header />
          </div>
          <div className=" col-12  d-flex d-xl-none mb-3 container-content-side">
            <MobileHeader />
          </div>
          <div className=" col-12  mx-0 mx-xl-4 col-xl-9 container-content">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
