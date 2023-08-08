import React, { useState } from "react";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className=" d-flex justify-content-between">
        <div>
          {window.location.pathname === "/skills" && (
            <h2 className=" text_orange mt-3 main_title">Skills</h2>
          )}
          {window.location.pathname === "/" && (
            <h2 className=" text_orange mt-3 main_title">About Me</h2>
          )}
          {window.location.pathname === "/contact" && (
            <h2 className=" text_orange mt-3 main_title">Contact Me</h2>
          )}
          {window.location.pathname === "/projects" && (
            <h2 className=" text_orange mt-3 main_title">Projects</h2>
          )}
        </div>
        <div className="main_header d-none d-md-flex align-items-center">
          <Link
            className={
              window.location.pathname === "/"
                ? "mx-4 fs-5 text_active"
                : "mx-4 fs-5 text-white"
            }
            to={"/"}
          >
            About me
          </Link>
          <Link
            className={
              window.location.pathname === "/skills"
                ? "mx-4 fs-5 text_active"
                : "mx-4 fs-5 text-white"
            }
            to={"/skills"}
          >
            Skills
          </Link>
          <Link
            className={
              window.location.pathname === "/projects"
                ? "mx-4 fs-5 text_active"
                : "mx-4 fs-5 text-white"
            }
            to={"/projects"}
          >
            Projects
          </Link>
          <Link
            className={
              window.location.pathname === "/contact"
                ? "mx-4 fs-5 text_active"
                : "mx-4 fs-5 text-white"
            }
            to={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
