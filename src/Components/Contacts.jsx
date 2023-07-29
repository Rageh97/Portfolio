import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import "../App.css";
import Main from "./Main";
const Contacts = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("message", message.value);

    try {
      const response = await fetch("https://formspree.io/f/mrgwbpkv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Sending Successfuly !");
      } else {
        setFormStatus("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("Error submitting form");
    }
  };

  return (
    <>
    <Main/>
      <div className="w-100 mt-5">
        <form onSubmit={onSubmit}>
          <div className="mb-4 name">
            <input
              placeholder="Name"
              className="neumer-input"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-4 email">
            <input
              placeholder="Email"
              className="neumer-input"
              type="email"
              id="email"
              required
            />
          </div>

          <div className="mb-4 message">
            <textarea
              placeholder="Your Message"
              className="neumer-input"
              id="message"
              required
            />
          </div>
          <Button className="w-100 dark-button" type="submit">
            {formStatus}
          </Button>
        </form>
      </div>
      {/* .......................... */}
      <div className="social-icons mt-3">
        {" "}
        <a href="https://www.linkedin.com/in/mohamed-rageh-5b2144221/">
          <BsLinkedin className="bg-primary p-2 mx-1 rounded fs-2 shadow text-white" />
        </a>
        <a href="https://github.com/Rageh97">
          <BsGithub className="bg-dark p-2 fs-2 mx-1 rounded shadow text-white" />
        </a>
        <a href="mailto:abdelhady412rageh@gmail.com">
          <MdOutgoingMail className="bg-danger p-2 mx-1 rounded fs-2 shadow text-white" />
        </a>
        <IoLogoWhatsapp className="bg-success p-2 mx-1 rounded fs-2 shadow text-white" />
      </div>
    </>
  );
};

export default Contacts;
