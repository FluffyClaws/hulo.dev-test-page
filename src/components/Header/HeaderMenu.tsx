import React, { useState } from "react";
import "./Header.scss";
import ChatButton from "../MiscElements/ChatButton";

const HeaderMenu: React.FC = () => {
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
          <ChatButton buttonText="LET'S CHAT" />{" "}
        </div>
      </div>
      <div className="br-line"></div>
    </header>
  );
};

export default HeaderMenu;
