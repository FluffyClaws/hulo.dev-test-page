import React from "react";
import "./AboutSection.scss";
import ChatButton from "./MiscElements/ChatButton";

const AboutSection: React.FC = () => {
  return (
    <section className="about-block">
      <section className="about-headline-container">
        <div className="about-wrapper">
          <div className="br-line"></div>
          <div className="about-headline">
            <img
              className="about-circle"
              loading="lazy"
              alt=""
              src="/vector-39.svg"
            />
            <h1 className="about-head">
              <span>YOU HAVE </span>
              <i>a lot</i>
              <span> GOING ON.</span>
            </h1>
          </div>
          <div className="br-line"></div>
        </div>
      </section>
      <section className="about-details-block">
        <div className="details-container">
          <div className="row1-wrapper">
            <div className="about">
              <img src="/square.svg" alt="" />
              <p>About us</p>
            </div>
            <div className="subhead">
              <h1>Running a business means </h1>
              <h1>wearing a lot of hats.</h1>
            </div>
          </div>
          <div className="row2-wrapper">
            <div className="col1-wrapper">
              <p>
                Do you have a million ideas for growth, but don’t have the
                bandwidth to turn them into a reality?
              </p>
              <ChatButton buttonText="Contact US" width="165px" />
            </div>
            <p>
              That’s where we come in. We want to create a strategic
              communication plan and save you time by executing it for you. You
              need to do what you do best: focus on the parts of your
              entrepreneurial journey that inspire you. Leave the rest to us.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
