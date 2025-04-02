import React from "react";
import { Accordion, Card } from "react-bootstrap";
import {
  BsFillArrowDownCircleFill,
  BsFillPhoneFill,
  BsLinkedin,
} from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      className="custom_toggle"
      
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
const MobileHeader = () => {
  return (
    <div className="mobile_header position-relative d-flex d-xl-none w-100">
      <Accordion className="w-100" defaultActiveKey="1">
        <Card className="w-100">
          <Card.Header className="w-100">
            <div className="d-flex align-items-center gap-3 w-100">
              <div className="profile_img">
                <img
                  className="w-100 rounded-4"
                  src="/assets/Profile-pic.jpg"
                  alt=""
                />
              </div>
              <div className="d-flex flex-column who_iam">
                <h6 className="text-white header_name fw-bold mt-4 mb-3 w-100">
                  Mohamed Rageh
                </h6>
                <p className=" w-100 header_position text-white text-center px-1 py-1 rounded ">
                  Frontend Developer
                </p>
              </div>
              <CustomToggle eventKey="0">
                <BsFillArrowDownCircleFill className="fs-5" />
              </CustomToggle>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <hr className="text-white" />
              <div className="d-flex flex-column">
                <div className="d-flex w-100 align-items-center mb-4">
                  <div className="px-2  py-1 rounded icon me-2">
                    <MdEmail className="text-white fs-4 " />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p
                      style={{ fontSize: "14px" }}
                      className="mb-0 text_orange"
                    >
                      Email
                    </p>
                    <span
                      style={{ fontSize: "9px" }}
                      className="mb-0 text-white"
                    >
                      abdelhady412rageh@gmail.com
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="px-2 py-1 rounded icon me-2">
                    <BsFillPhoneFill className="text-white fs-4 " />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p
                      style={{ fontSize: "14px" }}
                      className="mb-0 text_orange"
                    >
                      Phone
                    </p>
                    <span
                      style={{ fontSize: "14px" }}
                      className="mb-0 text-white"
                    >
                      +201030771963
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="px-2 py-1 rounded icon me-2">
                    <BsLinkedin className="text-white fs-4 " />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p
                      style={{ fontSize: "14px" }}
                      className="mb-0 text_orange"
                    >
                      Linkedin
                    </p>
                    <span
                      style={{ fontSize: "11px" }}
                      className="mb-0 text-white"
                    >
                      /in/mohamed-rageh-5b2144221/
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="px-2 py-1 rounded icon me-2">
                    <MdLocationPin className="text-white fs-4 " />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <p
                      style={{ fontSize: "14px" }}
                      className="mb-0 text_orange"
                    >
                      Location
                    </p>
                    <span
                      style={{ fontSize: "14px" }}
                      className="mb-0 text-white"
                    >
                      Cairo, Egypt
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default MobileHeader;
