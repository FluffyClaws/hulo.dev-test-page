import React from "react";
import "./HeaderBanner.scss";
import ChatButton from "../MiscElements/ChatButton";

const HeaderBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-frame">
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="banner-description">
              <div className="banner-description-parent">
                <div className="description">
                  a full-service design & marketing agency.
                </div>
                <ChatButton buttonText="talk to an expert" width="150px" />
              </div>
            </div>
            <div className="main-banner">
              <div className="banner-col">
                <div className="banner-row1">Check</div>
                <div className="right-desc-wrapper">
                  <div className="right-desc-container">
                    <p>Grow your business without adding more to your plate.</p>
                    <i>You deserve support.</i>
                  </div>
                </div>
              </div>
              <div className="banner-row2">marketing</div>
              <div className="banner-row3">off your list.</div>
            </div>
          </div>
          <div className="br-line"></div>
        </div>
      </div>
      <div className="background-paper-wraper">
        <img
          className="background-paper"
          alt=""
          src="/hulo.dev-test-page/texturelabs-paper-220m-1-traced.svg"
        />
      </div>
    </div>
  );
};

export default HeaderBanner;
