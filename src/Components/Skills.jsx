import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./Main";
import { skills } from "../../utils/Constants";
const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Main />
      {/* <Container style={{ marginBottom: "200px" }} className="mt-5">
        <Row>
          <Col className="d-flex flex-wrap align-items-center justify-content-center gap"> */}
      <div className="d-flex gap-5 align-items-center flex-wrap mt-5">
        {skills.map((item, idx) => (
          <>
            <div
              key={idx}
              className="d-flex flex-column gap-3 align-items-center"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="2500"
                className="p-3 bg_orange d-flex  align-items-center"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              >
                <img
                  className="w-100 h-100 object-fit-contain"
                  src={item.image}
                  alt=""
                />
              </div>
              <p className="text-white">{item.title}</p>
            </div>
          </>
        ))}
        {/* <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/html.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/css.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-cover"
            src="/assets/JavaScript.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/React.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/next-js.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/bootstrap.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/Tailwind.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/material.png"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2500"
          className="p-3 bg-body shadow"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        >
          <img
            className="w-100 h-100 object-fit-contain"
            src="/assets/redux.png"
            alt=""
          />
        </div> */}
      </div>
      {/* </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Skills;
