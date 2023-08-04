import React from "react";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="footer d-flex d-md-none align-items-center justify-content-center">
      <Link
        className={
          window.location.pathname === "/skills"
            ? "mx-4 fs-5 text-warning"
            : "mx-4 fs-6 text-white"
        }
        to={"/skills"}
      >
        Skills
      </Link>
      <Link
        className={
          window.location.pathname === "/contact"
            ? "mx-4 fs-5 text-warning"
            : "mx-4 fs-6 text-white"
        }
        to={"/contact"}
      >
        Contact
      </Link>
      <Link
        className={
          window.location.pathname === "/projects"
            ? "mx-4 fs-5 text-warning"
            : "mx-4 fs-6 text-white"
        }
        to={"/projects"}
      >
        Projects
      </Link>
      <Link
        className={
          window.location.pathname === "/"
            ? "mx-4 fs-5 text-warning"
            : "mx-4 fs-6 text-white"
        }
        to={"/"}
      >
        About
      </Link>
    </div>
  );
};

export default MobileFooter;
