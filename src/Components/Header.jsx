import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDarkMode, MdOutgoingMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import Animation from "./Animation";
const Header = () => {
  const cvURL = "/public/assets/Cv.png";
  const [dark, setDark] = useState(false);
  const handleDarkMode = () => {
    setDark(!dark);
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  const handleButtonClick = () => {
    window.open(cvURL, "_blank");
  };

  return (
    <section id="HEADER" className="header">
        {!dark && <Animation/> }
      <Container>
        <Row className="py-4">
          <Col>
            <h3 className="logo text">Mohamed Rageh</h3>
          </Col>
          <Col>
            <div className="d-flex gap justify-content-center">
              <h6
                onClick={() => (window.location.href = "#SKILLS")}
                className="text d-none d-md-flex"
              >
                Skills
              </h6>
              <h6
                onClick={() => (window.location.href = "#PROJECTS")}
                className="text d-none d-md-flex"
              >
                Projects
              </h6>
              <h6
                onClick={() => (window.location.href = "#CONTACT")}
                className="text d-none d-md-flex"
              >
                Contact
              </h6>
              <MdDarkMode className="text fs-4" onClick={handleDarkMode} />
            </div>
          </Col>
        
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="defineation mt-5 d-flex flex-column justify-content-center"
          >
            <h3 className="text">Front End Developer</h3>
            <p className="text-2">
              I am a Front End Developer with experience in building web
              applications using technologies like React, Redux, Next.js, and
              more. I have worked on various projects and have a strong passion
              for creating interactive and user-friendly interfaces.
            </p>
            <div className="social-icons mt-5">
              <BsLinkedin className="bg-primary p-2 mx-1 rounded fs-2 shadow text-white" />
              <BsGithub className="bg-dark p-2 fs-2 mx-1 rounded shadow text-white" />
              <MdOutgoingMail className="bg-danger p-2 mx-1 rounded fs-2 shadow text-white" />
              <IoLogoWhatsapp className="bg-success p-2 mx-1 rounded fs-2 shadow text-white" />
            </div>
            <Button
              onClick={handleButtonClick}
              className="mt-5 dark-button mb-5 mb-md-0 shadow "
              style={{ width: "150px" }}
              variant="danger"
            >
              <a
                className="text-white text-decoration-none"
                download
                href="/public/assets/Cv.png"
              >
                {" "}
                <AiFillEye /> SEE MY CV
              </a>
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <img className="w-100 h-100" src="/assets/programmer.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
