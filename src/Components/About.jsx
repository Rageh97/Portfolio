// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { MdOutgoingMail } from "react-icons/md";

// const Footer = () => {
//   return (
//     <section className="footer d-flex align-items-center justify-content-center">
//       <Row>
//         <Col className="d-flex flex-column align-items-center justify-content-center">
//           <h3 className="text-white mt-5">Reach Out to me!</h3>

//           <div className="social-icons mt-3">
//             <a href="https://www.linkedin.com/in/mohamed-rageh-5b2144221/">
//               <BsLinkedin className="bg-primary p-2 mx-1 rounded fs-2 shadow text-white" />
//             </a>
//             <a href="https://github.com/Rageh97">
//               <BsGithub className="bg-dark p-2 fs-2 mx-1 rounded shadow text-white" />
//             </a>
//             <a href="mailto:abdelhady412rageh@gmail.com">
//               <MdOutgoingMail className="bg-danger p-2 mx-1 rounded fs-2 shadow text-white" />
//             </a>

//             <IoLogoWhatsapp className="bg-success p-2 mx-1 rounded fs-2 shadow text-white" />
//           </div>
//         </Col>
//       </Row>
//     </section>
//   );
// };

// export default Footer;
import React from "react";
import Main from "./Main";

import { IoBookSharp } from "react-icons/io5";

import { CgEditBlackPoint } from "react-icons/cg";
import MobileFooter from "./MobileFooter";
const About = () => {
  return (
    <>
      <Main />
      <MobileFooter/>
      <div className="mt-5 mb-5 d-flex flex-column">
        <p className="text-white">
          As a Frontend Developer, I specialize in crafting modern, clean, and
          responsive websites that offer the best user experience. Feel free to
          explore my portfolio to discover my latest projects and learn more
          about my skills and experience in the field. <br /><br /> My job is to build your
          website to be functional, user-friendly, and attractive. Moreover, I
          add a personal touch to your product and make sure that it is
          eye-catching and easy to use. My aim is to bring across your message
          and identity in the most creative way. I created web design for many
          companies. <br /><br /> Experienced working with teams to produce impactful,
          leading-edge websites that engage customers and deliver business
          results. Well-versed in design standards and user preferences.
          Empowering your web identity, We develop websites that ignite your
          business.
        </p>
        <div className="d-flex gap-4 mt-5 mb-4">
          <div className="px-2 py-1 rounded icon d-flex align-items-center">
            <IoBookSharp className="text-white fs-4" />
          </div>
          <h2 className="text_orange">Education</h2>
        </div>
        <div className="d-flex gap-4 mx-2">
          <CgEditBlackPoint className="text_orange fs-4" />

          <h5 className="text-white">Faculty of Engineering Al-Azhar University</h5>
        </div>
        <p className="text_orange mx-5">2018-2023</p>
        <p className="text-white mx-5">
          Student at Systems and Computers Engineering Department, Faculty of
          Engineering.
        </p>
      </div>
    </>
  );
};

export default About;
