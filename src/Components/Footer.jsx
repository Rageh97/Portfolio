import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="footer d-flex align-items-center justify-content-center">
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-white mt-5">Reach Out to me!</h3>

          <div className="social-icons mt-3">
            <BsLinkedin className="bg-primary p-2 mx-1 rounded fs-2 shadow text-white" />
            <BsGithub className="bg-dark p-2 fs-2 mx-1 rounded shadow text-white" />
            <MdOutgoingMail className="bg-danger p-2 mx-1 rounded fs-2 shadow text-white" />
            <IoLogoWhatsapp className="bg-success p-2 mx-1 rounded fs-2 shadow text-white" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
