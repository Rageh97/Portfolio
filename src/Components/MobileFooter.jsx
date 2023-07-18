import React, { useState } from "react";
import { AiFillContacts, AiFillHome, AiFillProject } from "react-icons/ai";

import { GiSkills } from "react-icons/gi";


const MobileFooter = () => {
  const [activeButton, setActiveButton] = useState(null);
  const sections = ["#HEADER", "#SKILLS", "#PROJECTS", "#CONTACT"];

  const handleButtonClick = (buttonIndex) => {
    setActiveButton((prevActiveButton) =>
      prevActiveButton === buttonIndex ? null : buttonIndex
    );
    window.location.href = `${sections[buttonIndex]}`
  };
  return (
 

    <section className="mobile-footer  d-block d-md-none">
      <div className="button-group">
       
          <div
            className={`button ${activeButton === 0 ? "active" : ""}`}
            onClick={() => handleButtonClick(0)}
          >
            <AiFillHome className="icon" />
          </div>
        
        
          <div
            className={`button ${activeButton === 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            <GiSkills className="icon" />
          </div>
        
       
          <div
            className={`button ${activeButton === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            <AiFillProject className="icon" />
          </div>
       
      
          <div
            className={`button ${activeButton === 3 ? "active" : ""}`}
            onClick={() => handleButtonClick(3)}
          >
            <AiFillContacts className="icon" />
          </div>
       
      </div>
    </section>
  );
};

export default MobileFooter;
