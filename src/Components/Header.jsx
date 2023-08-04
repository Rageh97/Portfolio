// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { MdDarkMode, MdOutgoingMail } from "react-icons/md";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { AiFillEye } from "react-icons/ai";
// import { BiSolidDownload } from "react-icons/bi";
// import Animation from "./Animation";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Header = () => {
//   const cvURL = "/public/assets/Mohamed-Rageh-cv (2).pdf";
//   const [showNumber, setShowNumber] = useState(false);
//   const handleNumber = () => {
//     setShowNumber(!showNumber);
//   };

//   const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
//   const handleDarkMode = () => {
//     setDark(!dark);
//   };
//   useEffect(() => {
//     if (dark) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }

//     // Save the user's preferred theme to localStorage
//     localStorage.setItem("theme", dark ? "dark" : "light");
//   }, [dark]);
//   const handleButtonClick = () => {
//     window.open(cvURL, "_blank");
//   };
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);
//   return (
//     <section
//       id="HEADER"
//       className={` ${!dark ? "projects header" : "header"} `}
//     >
//       {dark && <Animation />}
//       <Container>
//         <Row className="py-4">
//           <Col xs={9} lg={6}>
//             <h3
//               style={{ letterSpacing: "2px", cursor: "pointer" }}
//               className="logo text"
//             >
//               Mohamed Rageh
//             </h3>
//           </Col>
//           <Col xs={2} lg={6}>
//             <div className="d-flex gap justify-content-center">
//               <h6
//                 style={{ cursor: "pointer" }}
//                 onClick={() => (window.location.href = "#SKILLS")}
//                 className="text d-none d-md-flex"
//               >
//                 Skills
//               </h6>
//               <h6
//                 style={{ cursor: "pointer" }}
//                 onClick={() => (window.location.href = "#PROJECTS")}
//                 className="text d-none d-md-flex"
//               >
//                 Projects
//               </h6>
//               <h6
//                 style={{ cursor: "pointer" }}
//                 onClick={() => (window.location.href = "#CONTACT")}
//                 className="text d-none d-md-flex"
//               >
//                 Contact
//               </h6>
//               <MdDarkMode
//                 style={{ cursor: "pointer" }}
//                 className="text fs-4"
//                 onClick={handleDarkMode}
//               />
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col
//             data-aos="fade-right"
//             data-aos-duration="2500"
//             xs={12}
//             sm={12}
//             md={6}
//             className="defineation mt-5 d-flex flex-column justify-content-center"
//           >
//             <h3 className="text">Frontend Developer</h3>
//             <p className="text-2">
//               I am a Front End Developer with experience in building web
//               applications using technologies like React, Redux, Next.js, and
//               more. I have worked on various projects and have a strong passion
//               for creating interactive and user-friendly interfaces.
//             </p>
//             <div className="social-icons mt-5">
//               {showNumber && (
//                 <p
//                   style={{ letterSpacing: "2px", cursor: "pointer" }}
//                   className="bg-success p-1 text-white text-center rounded shadow w-50"
//                 >
//                   01065330985
//                 </p>
//               )}
//               <a href="https://www.linkedin.com/in/mohamed-rageh-5b2144221/">
//                 <BsLinkedin className="bg-primary p-2 mx-1 rounded fs-2 shadow text-white" />
//               </a>

//               <a href="https://github.com/Rageh97">
//                 <BsGithub className="bg-dark p-2 fs-2 mx-1 rounded shadow text-white" />
//               </a>

//               <a href="mailto:abdelhady412rageh@gmail.com">
//                 <MdOutgoingMail className="bg-danger p-2 mx-1 rounded fs-2 shadow text-white" />
//               </a>
//               <IoLogoWhatsapp
//                 onClick={handleNumber}
//                 className="bg-success p-2 mx-1 rounded fs-2 shadow text-white"
//               />
//             </div>
//           <div className="d-flex align-items-center mt-5 ">
//           <Button
//               onClick={handleButtonClick}
//               className="dark-button mb-5 mb-md-0 shadow"
//               style={{ width: "150px" }}
//             >
//               <AiFillEye /> SEE MY CV
//             </Button>
//             <a className="text-dark text-decoration-none mb-5 mx-2 mb-md-0" download href={cvURL}>
//              <BiSolidDownload className="text-danger fs-3"/>
//             </a>
//           </div>
//           </Col>
//           <Col
//             className="h-100 d-none d-md-flex"
//             data-aos="fade-left"
//             data-aos-duration="2500"
//             xs={12}
//             md={6}
//           >
//             <img className="w-100 h-100" src="/assets/banner2.png" alt="" />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Header;
import React from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsFillPhoneFill, BsLinkedin } from "react-icons/bs";
const Header = () => {
  return (
    <div className="d-flex flex-column w-100  px-2 py-3">
      <div className="w-100  d-flex flex-column align-items-center justify-content-center">
        <img
          style={{ height: "170px", objectFit: "cover" }}
          className="w-100 rounded-4"
          src="/assets/Profile-pic.jpg"
          alt=""
        />
        <h6   style={{ fontSize:"18px" }} className="text-white  fw-bold mt-4 mb-3">Mohamed Rageh</h6>
        <p
          style={{ backgroundColor: "#6131df", fontSize:"15px" }}
          className=" w-100 text-white text-center px-1 py-2 rounded "
        >
          Frontend Developer
        </p>
      </div>
      <hr className=" text-white" />
      <div className="w-100 d-flex flex-column">
        <div className="d-flex w-100 align-items-center mb-4">
          <div className="px-2  py-1 rounded icon me-2">
            <MdEmail className="text-white fs-4 " />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <p style={{ fontSize: "14px" }} className="mb-0 text_orange">
              Email
            </p>
            <span style={{ fontSize: "9px" }} className="mb-0 text-white">
              abdelhady412rageh@gmail.com
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="px-2 py-1 rounded icon me-2">
            <BsFillPhoneFill className="text-white fs-4 " />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <p style={{ fontSize: "14px" }} className="mb-0 text_orange">
              Phone
            </p>
            <span style={{ fontSize: "14px" }} className="mb-0 text-white">
              +201065330985
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="px-2 py-1 rounded icon me-2">
            <BsLinkedin className="text-white fs-4 " />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <p style={{ fontSize: "14px" }} className="mb-0 text_orange">
              Linkedin
            </p>
            <span style={{ fontSize: "11px" }} className="mb-0 text-white">
              /in/mohamed-rageh-5b2144221/
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mb-4">
          <div className="px-2 py-1 rounded icon me-2">
            <MdLocationPin className="text-white fs-4 " />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <p style={{ fontSize: "14px" }} className="mb-0 text_orange">
              Location
            </p>
            <span style={{ fontSize: "14px" }} className="mb-0 text-white">
              Cairo, Egypt
            </span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
