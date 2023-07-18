import React from "react";

import "./App.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import MobileFooter from "./Components/MobileFooter";


const App = () => {
  return (
    <>
    
      <Header />
      <Skills />
      <Projects />
      <Contacts/>
      <Footer/>
      <MobileFooter/>
    </>
  );
};

export default App;
