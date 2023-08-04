import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import Main from "./Main";
import MobileFooter from "./MobileFooter";

const Projects = () => {
  return (
    <>
      <Main />
      <MobileFooter />
      {/* <section id="PROJECTS" className="p-2">
        <Container className="mt-5 mb-5">
          <h3 className="text-center mb-4 text">PROJECTS</h3> */}
      <div
        style={{ backgroundColor: "#170b39" }}
        className=" d-flex flex-wrap gap-3 align-items-center justify-content-center mt-5"
      >
        {/* <Col > */}
        <Card
          title={"Amazon Clone"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/Amazon.png"}
          demoLink={"https://amazon-clone-react-4yhrhhyf9-rageh97.vercel.app/"}
          githubLink={"https://github.com/Rageh97/Amazon_Clone-React-js"}
        />
        <Card
          title={"Youtube Clone"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/youtube.png"}
          demoLink={"https://youtube-clone-d9uo-8pklr74ur-rageh97.vercel.app/"}
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
          title={"Cars Shopping"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/facebook.png"}
          demoLink={"https://shopping-cars-next-nvmh673sg-rageh97.vercel.app/"}
          githubLink={
            "https://github.com/Rageh97/Shopping_Cars_NextJS"
          }
        />
        <Card
          title={"Crud operation"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/facebook.png"}
          demoLink={"https://crud-operation-react-js.vercel.app/"}
          githubLink={"https://github.com/Rageh97/Simple_Crud_App-React-js"}
        />
        <Card
          title={"T-shirt Store"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/facebook.png"}
          demoLink={"https://store-app-js.vercel.app/"}
          githubLink={"https://github.com/Rageh97/STORE_APP"}
        />

        {/* </Col> */}
      </div>
      {/* </Container>
      </section> */}
    </>
  );
};

export default Projects;
