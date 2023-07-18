import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contacts = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <Container id="CONTACT" className="mt-5 mb-5">
      <Row className="d-flex justify-content-center">
      <h3 className="text-center text mb-5">CONTACT</h3>
        {/* <Col xs={12} sm={12} md={6} className="d-flex align-items-center justify-content-center">
        <img className="w-100" src="/public/assets/giphy (1).gif" alt="" />
        </Col> */}
        
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
              <Button className="w-100 dark-button" variant="danger" type="submit">
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
