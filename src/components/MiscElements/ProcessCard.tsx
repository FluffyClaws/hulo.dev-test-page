import React, { useState } from "react";
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsRotated(!isRotated);
  };
  return (
    <div className="process-card">
      <div className="process-card-wrapper">
        <div className="card-num">{cardNumber}</div>
        <div className="content-wrapper">
          <div className="content-headline">
            <p>{headline}</p>
            <p>{subHeadline}</p>
          </div>
          <div className={`process-desc ${isCollapsed ? "collapsed" : ""}`}>
            <p>{description}</p>
            <ChatButton buttonText="TRY OUT OUR TEAM" width="165px" />
          </div>
        </div>
        <button
          className={`ham-menu ${isRotated ? "rotated" : ""}`}
          onClick={toggleCollapse}
        >
          <img src="/hulo.dev-test-page/ham-menu-dots.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProcessCard;
