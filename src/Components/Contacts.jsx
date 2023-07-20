import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css"
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
    <Container id="CONTACT" className="mt-5 mb-5">
      <Row className="d-flex justify-content-center">
        <h3  className="text-center  text mb-5">CONTACT</h3>
        <Col xs={12} sm={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className="w-100  p-4 shadow-dark shadoww py-5 rounded">
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
              <Button className="w-100 dark-button"  type="submit">
                {formStatus}
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
