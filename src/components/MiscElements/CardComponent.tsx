import React from "react";
import "./CardComponent.scss";
import ChatButton from "./ChatButton";

interface CardProps {
  title: string;
  content: string;
  imgSrc: string;
}

const CardComponent: React.FC<CardProps> = ({ title, content, imgSrc }) => {
  const contentLines = content
    .split("|")
    .map((line, index) => <p key={index}>{line}</p>);
  return (
    <div className="work-card">
      <div className="text">
        <div className="title">{title}</div>
        <h1 className="content">{contentLines}</h1>
      </div>
      <div className="imgs-wrapper">
        <div className="imgs">
          <img className="img" loading="lazy" alt={title} src={imgSrc} />
        </div>
      </div>
      <div className="button-wrapper">
        <ChatButton buttonText="tell me more" width="165px" />
      </div>
    </div>
  );
};

export default CardComponent;
