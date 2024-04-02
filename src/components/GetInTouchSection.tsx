import React from "react";
import "./GetInTouchSection.scss";
import ChatButton from "./MiscElements/ChatButton";

const GetInTouchSection: React.FC = () => {
  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-wrapper">
        <div className="left-col">
          <div className="left-col-wrapper">
            <div className="get-in-touch">
              <img className="star-icon" alt="" src="/star-3.svg" />
              <p>Get in Touch</p>
            </div>
            <div className="get-in-touch-head">
              <img className="touch-circle" alt="" src="/vector-39-2.svg" />
              <h1 className="audit-headline">
                <span>SCHEDULE </span>
                <i>a free</i>
                <span> BRAND AUDIT</span>
              </h1>
            </div>
          </div>
          <div className="get-in-touch-desc">
            <p>
              Get expert eyes on your brand + website. One of our creative
              strategies will take a look at your brand and give you your best
              next steps to improve your online presence to increase
              conversions. From there, we will offer you the next steps on how
              to engage our team, or you can take our free advice and grow your
              business yourself.{" "}
            </p>
            <div className="email-wrapper">
              <input type="email" className="email-input" placeholder="Email" />
              <ChatButton width="165px" buttonText={"SUBMIT"} />
            </div>
          </div>
        </div>
        <img className="get-in-touch-img" alt="" src="/img-10@2x.png" />
      </div>
    </div>
  );
};

export default GetInTouchSection;
