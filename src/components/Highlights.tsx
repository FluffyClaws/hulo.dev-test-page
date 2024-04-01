import React from "react";
import "./Highlights.scss";
import HighlightsCard from "./MiscElements/HighlightsCard";
import ChatButton from "./MiscElements/ChatButton";

const Highlights = () => {
  return (
    <section className="highlights-container">
      <div className="highlights-wrapper">
        <HighlightsCard
          imgSrc="img-3@2x.png"
          title="Strategy"
          subtitle="AER Media"
        />
        <div className="highlight-head-wrapper">
          <div className="headline-wrapper">
            <div className="category-wrapper">
              <img className="star-icon" alt="" src="/star-1.svg" />
              <p>SELECTED WORK</p>
            </div>
            <h1>Sit nam egestas nullam nulla. Sed nisi arcu et blandit.</h1>
          </div>
          <HighlightsCard
            imgSrc="img-4@2x.png"
            title="DESIGN"
            subtitle="Valerie Wheeler"
            imgWidth="538px"
            imgHeight="561px"
          />
        </div>
        <div className="highlights-row2">
          <HighlightsCard
            imgSrc="img-5@2x.png"
            title="Strategy"
            subtitle="Luneer MGMT"
            imgHeight="569px"
            imgWidth="967px"
          />
          <HighlightsCard
            imgSrc="img-6@2x.png"
            title="CONTENT"
            subtitle="Social Blue Print"
            imgHeight="425px"
            imgWidth=" 396px"
          />
        </div>
        <div className="highlights-row3">
          <div className="left-wrapper">
            <HighlightsCard
              imgSrc="img-7@2x.png"
              title="Strategy"
              subtitle="Luneer MGMT"
              imgHeight="425px"
              imgWidth=" 396px"
            />
            <div className="left-wrapper-button">
              <p>
                Facilisis gravida pharetra, risus vel in. Mauris in lacus
                condimentum feugiat.
              </p>
              <ChatButton width="165px" buttonText={"VIEW MORE WORK"} />
            </div>
          </div>
          <HighlightsCard
            imgSrc="img-8@2x.png"
            title="Strategy"
            subtitle="Luneer MGMT"
            imgHeight="425px"
            imgWidth=" 396px"
          />{" "}
          <HighlightsCard
            imgSrc="img-9@2x.png"
            title="Strategy"
            subtitle="Luneer MGMT"
            imgHeight=" 853px"
            imgWidth=" 824px"
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
