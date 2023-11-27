import React, { useEffect } from "react";
import "../App.css";

import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card({
  imageSrc,
  title,
  description,
  githubLink,
  demoLink,
}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500" className="card mb-3">
        <img
          className="w-100 card-img mb-1"
          src={imageSrc}
          alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
        />

        <h5 className="card-title mt-1 mx-2 text-white">{title}</h5>
        {/* <small className="card-meta  text-white">{description}</small> */}

        <div className="card-footer w-100 d-flex border-0 gap-3">
          <a className=" text-decoration-none text_orange" href={githubLink}>
            <div className="d-flex gap-2">
              <BsGithub className=" fs-5 " /> CODE
            </div>
          </a>
          <a className="  text-decoration-none text_orange" href={demoLink}>
            <div className="d-flex gap-2">
              <AiFillEye className="fs-4 " />
              DEMO
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
