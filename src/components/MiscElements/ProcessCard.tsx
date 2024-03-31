import React from "react";
import "./ProcessCard.scss";
import ChatButton from "./ChatButton";

interface ProcessProps {
  cardNumber: string;
  headline: string;
  subHeadline: string;
  description: string;
}

const ProcessCard: React.FC<ProcessProps> = ({
  cardNumber,
  headline,
  subHeadline,
  description,
}) => {
  return (
    <div className="process-card">
      <div className="process-card-wrapper">
        <div className="card-num">{cardNumber}</div>
        <div className="content-wrapper">
          <div className="content-headline">
            <p>{headline}</p>
            <p>{subHeadline}</p>
          </div>
          <div className="process-desc">
            <p>{description}</p>
            <ChatButton buttonText="TRY OUT OUR TEAM" width="165px" />
          </div>
        </div>
        <button className="ham-menu">
          <img src="/ham-menu.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProcessCard;
