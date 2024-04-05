import React from "react";
import "./Footer.scss";
import ChatButton from "./MiscElements/ChatButton";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="footer-container">
      <div className="footer-wrapper">
        <div className="br-line"></div>
        <div className="footer-content-wrapper">
          <div className="footer-left-col">
            <div className="icon-wrapper">
              <img
                className="contact-icon"
                alt=""
                src="/hulo.dev-test-page/vector.svg"
              />
              <p>Contact Us</p>
            </div>
            <div className="left-col-text">
              <img
                src="/hulo.dev-test-page/vector-37.svg"
                alt=""
                className="contact-circle"
              />
              <span>LET’S WORK </span>
              <i>together</i>
            </div>
            <ChatButton width="165px" buttonText="contat us" />
          </div>
          <div className="footer-right-col">
            <span>
              <h1>Phone</h1>
              <h3>123 456 7890</h3>
            </span>
            <span>
              <h1>Email</h1>
              <h3>HELLO@PIPI-POOPOO.COM</h3>
            </span>
            <span>
              <h1>OFFICE HOURS:</h1>
              <h3>MONDAY - FRIDAY: 9AM - 5PM EST</h3>
            </span>
          </div>
        </div>
        <div className="br-line"></div>
        <div className="footer-bottom">
          <p>PIPI-POOPOO® ©2022</p>
          <div className="links-container">
            <div className="links-wrapper">
              <a href="https://linkedin.com/">LinkedIn</a>
              <a href="https://instagram.com//">Instagram</a>
            </div>
            <button onClick={scrollToTop} className="to-top">
              <p>Back to top</p>
              <div className="arrow-icon">
                <img src="/hulo.dev-test-page/arrow-up.svg" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
