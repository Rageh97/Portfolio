import React from "react";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="footer d-flex d-md-none">
      <div className="w-100 d-flex gap-3 align-items-center justify-content-center">
        <Link
          className={
            window.location.pathname === "/"
              ? " fs-5 text-warning"
              : " fs-6 text-white"
          }
          to={"/"}
        >
          About
        </Link>
        <Link
          className={
            window.location.pathname === "/skills"
              ? " fs-5 text-warning"
              : " fs-6 text-white"
          }
          to={"/skills"}
        >
          Skills
        </Link>
        <Link
          className={
            window.location.pathname === "/projects"
              ? " fs-5 text-warning"
              : " fs-6 text-white"
          }
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          className={
            window.location.pathname === "/contact"
              ? " fs-5 text-warning"
              : " fs-6 text-white"
          }
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
