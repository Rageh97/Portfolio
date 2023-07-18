import React, { useState, useRef } from "react";
import "../App.css";

import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Card({
  imageSrc,
  title,
  description,
  githubLink,
  demoLink,
}) {
  // const cardRef = useRef(null);
  // const imgRef = useRef(null);
  // const titleRef = useRef(null);
  // const descRef = useRef(null);
  // const sizesboxRef = useRef(null);
  // const purchaseRef = useRef(null);

  // function handleMouseEnter() {
  //   const img = imgRef.current;
  //   const title = titleRef.current;
  //   const sizesBox = sizesboxRef.current;
  //   const purchase = purchaseRef.current;
  //   const desc = descRef.current;
  //   title.style.transform = "translateZ(150px)";
  //   img.style.transform = "translateZ(100px) rotateZ(-45deg)";
  //   // sizesBox.style.transform = "translateZ(100px)";
  //   purchase.style.transform = "translateZ(75px)";
  //   desc.style.transform = "translateZ(75px)";
  // }
  // function handleMouseLeave() {

  //   const img = imgRef.current;
  //   const title = titleRef.current;
  //   // const sizesBox = sizesboxRef.current;
  //   const purchase = purchaseRef.current;
  //   title.style.transform = "translateZ(0px)";
  //   img.style.transform = "translateZ(0px) rotateZ(0deg)";
  //   // sizesBox.style.transform = "translateZ(0px)";
  //   purchase.style.transform = "translateZ(0px)";
  // }

  return (
    <>
      {/* <div
      className="card"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={imageSrc}
        alt="Nike-Shoe"
        className="sneaaker-img"
      />
      <h1 className="title" ref={titleRef}>
        {title}
      </h1>
      <p ref={descRef}>{description}</p>

      <div className="button-box d-flex gap" ref={purchaseRef}>
        <a href={githubLink}>
          <button className="purchase mb-0">
            <BsGithub className=" " /> CODE
          </button>
        </a>
        <a href={demoLink}>
          <button className="purchase mb-0">
            <AiFillEye className="fs-5 " /> LIVE DEMO
          </button>
        </a>
      </div>
    </div> */}
      <section className="wrapper shadow">
        <div className="container">
       
          <div className="row card-dark">
            {/* Card 1 */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card text-dark card-has-bg click-col"
                style={{ backgroundImage: `url(${imageSrc})` }}
              >
                <img
                  className="card-img d-none"
                  src={imageSrc}
                  alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0  text-white">{title}</h4>
                    <small className="card-meta mb-2 text-white">{description}</small>
                  </div>

                  <div className="button-box d-flex gap">
                    <a href={githubLink}>
                      <button className="purchase mb-0">
                        <BsGithub className=" " /> CODE
                      </button>
                    </a>
                    <a href={demoLink}>
                      <button className="purchase mb-0">
                        <AiFillEye className="fs-5 " /> LIVE DEMO
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more cards here */}
          </div>
        </div>
      </section>
    </>
  );
}
