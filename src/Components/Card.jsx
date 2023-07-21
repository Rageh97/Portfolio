import React, { useState, useRef, useEffect } from "react";
import "../App.css";

import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from "react-bootstrap";
export default function Card({
  imageSrc,
  title,
  description,
  githubLink,
  demoLink,
}) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
     
      {/* <section data-aos="zoom-in-down" data-aos-duration = "2500" className="wrapper shadow"> */}
        {/* <div className="container"> */}
       
          {/* <div className="row card-dark"> */}
            {/* Card 1 */}
            {/* <Col data-aos="zoom-in-down" data-aos-duration = "2500" className="mx-3 mb-5 card-dark shadow "> */}
              <Col
              xs={11}
              sm={11}
              md={5}
              lg={5}
              xl={3}
              xxl={3}
              
              data-aos="zoom-in-down" data-aos-duration = "2500"
                className="card text-dark card-has-bg click-col  card-dark shadow mx-3 mb-5 offset-1"
                style={{ backgroundImage: `url(${imageSrc})` }}
              >
                <img
                  className="card-img d-none"
                  src={imageSrc}
                  alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0  text-white">{title}</h4>
                    <small className="card-meta mb-2 text-white">{description}</small>
                  </div>

                  <div style={{height:"40px"}} className="button-box d-flex align-items-center justify-content-center gap ">
                    <a  className="mb-2 h-100 text-decoration-none" href={githubLink}>
                      <button className="purchase mb-0 h-100 d-flex">
                        <BsGithub className=" fs-5 me-2" /> CODE
                      </button>
                    </a>
                    <a  className="mb-2 h-100 text-decoration-none" href={demoLink}>
                      <button className="purchase mb-0 h-100 d-flex">
                        <AiFillEye className="fs-5 me-2" />DEMO
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            {/* </Col> */}
            {/* Add more cards here */}
          {/* </div> */}
        {/* </div> */}
      {/* </section> */}
    </>
  );
}
