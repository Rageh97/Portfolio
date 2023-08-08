import React from "react";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="footer d-flex d-md-none">
      <div className="w-100 d-flex gap-3 align-items-center justify-content-center">
        <Link
          className={
            window.location.pathname === "/"
              ? " fs-6 text_active"
              : " fs-6 text_inset"
          }
          to={"/"}
        >
          About
        </Link>
        <Link
          className={
            window.location.pathname === "/skills"
              ? " fs-6 text_active"
              : " fs-6 text_inset"
          }
          to={"/skills"}
        >
          Skills
        </Link>
        <Link
          className={
            window.location.pathname === "/projects"
              ? " fs-6 text_active"
              : " fs-6 text_inset"
          }
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          className={
            window.location.pathname === "/contact"
              ? " fs-6 text_active"
              : " fs-6 text_inset"
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
