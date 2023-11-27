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

      <div
        className=" d-flex flex-wrap projects_section gap-3 align-items-center justify-content-center mt-5"
      >
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
          title={"E-Learning Moodle"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/LMS.png"}
          demoLink={"https://lms-flame-ten.vercel.app/"}
          githubLink={"https://github.com/Rageh97/lms"}
        />
        <Card
          title={"Facebook Clone"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/facebook.png"}
          demoLink={"https://facebook-clone-8y5lauh4q-rageh97.vercel.app/"}
          githubLink={"https://github.com/Rageh97/Facebook_clone"}
        />
        <Card
          title={"MasarTech Landing"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/Masar.png"}
          demoLink={"https://landing-academy-tau.vercel.app/"}
          githubLink={"https://github.com/Rageh97/Shopping_Cars_NextJS"}
        />
        <Card
          title={"Cars Shopping"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/cars.png"}
          demoLink={"https://shopping-cars-next-nvmh673sg-rageh97.vercel.app/"}
          githubLink={"https://github.com/Rageh97/Landing_Academy"}
        />
        <Card
          title={"Realstate App"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/realstate.png"}
          demoLink={"https://realstate-xi.vercel.app/"}
          githubLink={"https://github.com/Rageh97/Realstate_App"}
        />
        <Card
          title={"Crud operation"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/crud.png"}
          demoLink={"https://crud-operation-react-js.vercel.app/"}
          githubLink={"https://github.com/Rageh97/Simple_Crud_App-React-js"}
        />
        <Card
          title={"T-shirt Store"}
          description={"loremjdgsfdshjfbbncvposakdkdlgfjdsds;f"}
          imageSrc={"/assets/cup.png"}
          demoLink={"https://store-app-js.vercel.app/"}
          githubLink={"https://github.com/Rageh97/STORE_APP"}
        />
      </div>
    </>
  );
};

export default Projects;
