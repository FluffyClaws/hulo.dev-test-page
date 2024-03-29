import React, { useState } from "react";
import "./Header.scss";

const HeaderMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="header">
      <div className="header-group">
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
            <img
              className="instagram-icon"
              loading="lazy"
              alt=""
              src="/antdesigninstagramoutlined.svg"
            />
          </button>
          <div
            className="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="chat-button-wrapper">
              <button className="chat-button">
                <span className="button-content">LET'S CHAT</span>
              </button>
            </div>
            <div className="icon-parent">
              <div className="button-frame-wrapper">
                <img
                  className={`icon ${isHovered ? "icon-hovered" : ""}`}
                  loading="lazy"
                  alt=""
                  src={isHovered ? "/arrow-icon.png" : "/circle.svg"}
                />
              </div>
              <div className={`icon1 ${isHovered ? "hovered" : ""}`} />
            </div>
          </div>
        </div>
      </div>
      <img
        className="header-child"
        loading="lazy"
        alt=""
        src="/vector-34.svg"
      />
    </header>
  );
};

export default HeaderMenu;
