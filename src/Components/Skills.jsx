import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./Main";
import { skills } from "../../utils/Constants";
import MobileFooter from "./MobileFooter";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Main />
      <MobileFooter/>
     
      <div
       data-aos="fade-up"
       data-aos-duration="2500"
        // style={{ marginTop: "120px", marginLeft: "120px", marginBottom:"50px" }}
        className="d-flex w-100 gap-5 mt-5 mb-5 align-items-center justify-content-center flex-wrap"
      >
        {skills.map((item, idx) => (
          <>
            <div
              key={idx}
              className="d-flex flex-column gap-3 align-items-center"
            >
              <div
               
                className="p-3  text_dark d-flex  align-items-center justify-content-center"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              >
                {item.icon}
              </div>
              <p className="text-white">{item.title}</p>
            </div>
          </>
        ))}
     
      </div>
  
    </>
  );
};

export default Skills;
