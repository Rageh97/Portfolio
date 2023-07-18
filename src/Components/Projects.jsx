import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";

const Projects = () => {
  return (
    <section id="PROJECTS" className="projects p-2">
      <Container className="mt-5 mb-5">
        <Row>
          <h3 className="text-center mb-2 text">PROJECTS</h3>
          <Col className="d-flex flex-wrap align-items-center justify-content-center ">
            <Card
              title={"Amazon Clone"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/Amazon.png"}
              demoLink={
                "https://amazon-clone-react-4yhrhhyf9-rageh97.vercel.app/"
              }
            />
            <Card
              title={"Youtube Clone"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/youtube.png"}
              demoLink={
                "https://youtube-clone-d9uo-8pklr74ur-rageh97.vercel.app/"
              }
            />
            <Card
              title={"Facebook Clone"}
              description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
              imageSrc={"/assets/facebook.png"}
              demoLink={"https://facebook-clone-8y5lauh4q-rageh97.vercel.app/"}
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
