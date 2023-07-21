import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";

const Projects = () => {

  return (
    <section id="PROJECTS" className="p-2">
      <Container className="mt-5 mb-5">
          <h3 className="text-center mb-4 text">PROJECTS</h3>
        <Row className="d-flex align-items-center justify-content-center">
          {/* <Col > */}
            <Card
              title={"Amazon Clone"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/Amazon.png"}
              demoLink={
                "https://amazon-clone-react-4yhrhhyf9-rageh97.vercel.app/"
              }
              githubLink={"https://github.com/Rageh97/Amazon_Clone-React-js"}
            />
            <Card
              title={"Youtube Clone"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/youtube.png"}
              demoLink={
                "https://youtube-clone-d9uo-8pklr74ur-rageh97.vercel.app/"
              }
              githubLink={"https://github.com/Rageh97/Youtube_clone"}
            />
            <Card
              title={"Facebook Clone"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/facebook.png"}
              demoLink={"https://facebook-clone-8y5lauh4q-rageh97.vercel.app/"}
              githubLink={"https://github.com/Rageh97/Facebook_clone"}
            />
            <Card
              title={"Ecommerce App"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/React.png"}
            />
            <Card
              title={"Products Crud"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/React.png"}
            />
            <Card
              title={"Cart app"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/React.png"}
            />
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
