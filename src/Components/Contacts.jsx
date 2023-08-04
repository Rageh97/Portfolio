import React, { useEffect } from "react";
import { BsFillSendFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import "../App.css";
import Main from "./Main";
import MobileFooter from "./MobileFooter";
import AOS from "aos";
import "aos/dist/aos.css";
const Contacts = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("message", message.value);

    try {
      const response = await fetch("https://formspree.io/f/mrgwbpkv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Sending Successfuly !");
      } else {
        setFormStatus("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("Error submitting form");
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Main />
      <MobileFooter />
      <div data-aos="fade-down"
       data-aos-duration="2500" className="d-flex flex-column align-items-center justify-content-center mt-5">
        <div   className="w-100 w-lg-75">
          <form onSubmit={onSubmit}>
            <div className="d-block d-lg-flex justify-content-between gap-3">
              <div className="  name w-100">
                <input
                  placeholder="Name"
                  className="neumer-input"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="  email w-100">
                <input
                  placeholder="Email"
                  className="neumer-input"
                  type="email"
                  id="email"
                  required
                />
              </div>
            </div>

            <div className="  message">
              <textarea
                placeholder="Your Message"
                className="neumer-input"
                id="message"
                required
              />
            </div>
            <button
              className="w-100 w-lg-25 bg_orange text-white d-flex align-items-center justify-content-center gap-3"
              type="submit"
            >
              {formStatus} <BsFillSendFill />
            </button>
          </form>
        </div>
        {/* .......................... */}
        <div
        
          className="w-100 gap-2 mt-5 mb-5  d-flex justify-content-center"
        >
          {" "}
          <a href="https://www.linkedin.com/in/mohamed-rageh-5b2144221/">
            {/* <BsLinkedin className="bg_orange p-2  rounded fs-2 shadow text-dark" /> */}
            <div className="px-2 py-1 rounded icon me-2">
              <BsLinkedin className="text_orange fs-3 p-1  " />
            </div>
          </a>
          <a href="https://github.com/Rageh97">
            {/* <BsGithub className="bg_orange p-2 fs-2  rounded shadow text-dark" /> */}
            <div className="px-2 py-1 rounded icon me-2">
              <BsGithub className="text_orange fs-3 p-1  " />
            </div>
          </a>
          <a href="mailto:abdelhady412rageh@gmail.com">
            {/* <MdOutgoingMail className="bg_orange p-2  rounded fs-2 shadow text-dark" /> */}
            <div className="px-2 py-1 rounded icon me-2">
              <MdOutgoingMail className="text_orange fs-3 p-1  " />
            </div>
          </a>
          {/* <IoLogoWhatsapp className="bg_orange p-2  rounded fs-2 shadow text-dark" /> */}
          <div className="px-2 py-1 rounded icon me-2">
            <IoLogoWhatsapp className="text_orange fs-3 p-1  " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
