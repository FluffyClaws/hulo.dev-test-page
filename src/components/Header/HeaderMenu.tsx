import React, { useState } from "react";
import "./Header.scss";
import ChatButton from "../MiscElements/ChatButton";

const HeaderMenu: React.FC = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <header className="header">
        <button
          className={`hamburger-button ${isMobileMenuVisible ? "rotated" : ""}`}
          onClick={toggleMenu}
        >
          <img src="/hulo.dev-test-page/header-ham-menu.svg" alt="" />
        </button>
        <div
          className={`header-group ${
            isMobileMenuVisible ? "mobile-menu-visible" : ""
          }`}
        >
          <div className="br-line"></div>
          <div className="logo-wrapper">
            <a className="logo">PIPI-POOPOO</a>
          </div>
          <nav className="nav-wrapper">
            <nav className="nav-parent">
              <a className="nav-link">About us</a>
              <a className="nav-link">Services</a>
              <a className="nav-link">Our work</a>
              <a className="nav-link">Blog</a>
            </nav>
          </nav>
          <div className="contact-container">
            <button className="instagram-wrapper">
              <a href="https://instagram.com/">
                <img
                  className="instagram-icon"
                  loading="lazy"
                  alt=""
                  src="/hulo.dev-test-page/antdesigninstagramoutlined.svg"
                />
              </a>
            </button>
            <ChatButton buttonText="LET'S CHAT" width="150px" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMenu;
