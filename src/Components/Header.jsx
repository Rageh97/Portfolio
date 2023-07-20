import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDarkMode, MdOutgoingMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import Animation from "./Animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const cvURL = "/public/assets/Cv.png";
  const [showNumber, setShowNumber] = useState(false);
  const handleNumber = () => {
    setShowNumber(!showNumber);
  };

  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const handleDarkMode = () => {
    setDark(!dark);
  };
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Save the user's preferred theme to localStorage
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  const handleButtonClick = () => {
    window.open(cvURL, "_blank");
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="HEADER"
      className={` ${!dark ? "projects header" : "header"} `}
    >
      {dark && <Animation />}
      <Container>
        <Row className="py-4">
          <Col>
            <h3
              style={{ letterSpacing: "2px", cursor: "pointer" }}
              className="logo text"
            >
              Mohamed Rageh
            </h3>
          </Col>
          <Col>
            <div className="d-flex gap justify-content-center">
              <h6
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "#SKILLS")}
                className="text d-none d-md-flex"
              >
                Skills
              </h6>
              <h6
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "#PROJECTS")}
                className="text d-none d-md-flex"
              >
                Projects
              </h6>
              <h6
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "#CONTACT")}
                className="text d-none d-md-flex"
              >
                Contact
              </h6>
              <MdDarkMode
                style={{ cursor: "pointer" }}
                className="text fs-4"
                onClick={handleDarkMode}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            data-aos="fade-right"
            data-aos-duration="2500"
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
              {showNumber && (
                <p
                  style={{ letterSpacing: "2px", cursor: "pointer" }}
                  className="bg-success p-1 text-white text-center rounded shadow w-25"
                >
                  01065330985
                </p>
              )}
              <a href="https://www.linkedin.com/in/mohamed-rageh-5b2144221/">
                <BsLinkedin className="bg-primary p-2 mx-1 rounded fs-2 shadow text-white" />
              </a>

              <a href="https://github.com/Rageh97">
                <BsGithub className="bg-dark p-2 fs-2 mx-1 rounded shadow text-white" />
              </a>

              <a href="mailto:abdelhady412rageh@gmail.com">
                <MdOutgoingMail className="bg-danger p-2 mx-1 rounded fs-2 shadow text-white" />
              </a>
              <IoLogoWhatsapp
                onClick={handleNumber}
                className="bg-success p-2 mx-1 rounded fs-2 shadow text-white"
              />
            </div>
            <Button
              onClick={handleButtonClick}
              className="mt-5 dark-button mb-5 mb-md-0 shadow"
              style={{ width: "150px" }}
              
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
          <Col className="h-100 d-none d-md-flex" data-aos="fade-left" data-aos-duration="2500" xs={12} md={6}>
            <img className="w-100 h-100" src="/assets/banner2.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
