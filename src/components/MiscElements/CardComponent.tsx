import React, { useState } from "react";
import "./CardComponent.scss";
import ChatButton from "./ChatButton";

interface CardProps {
  title: string;
  content: string;
  imgSrc: string;
  bgImgSrc: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  content,
  imgSrc,
  bgImgSrc,
}) => {
  const contentLines = content
    .split("|")
    .map((line, index) => <p key={index}>{line}</p>);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="work-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text">
        <div className="title">{title}</div>
        <h1 className="content">{contentLines}</h1>
      </div>
      <div className="imgs-wrapper">
        <div className="imgs">
          <img className="img" loading="lazy" alt={title} src={imgSrc} />
          <img className="bg-img" src={bgImgSrc} loading="lazy" alt={title} />
        </div>
      </div>
      <ChatButton
        buttonText="tell me more"
        width="165px"
        parentHover={isHovered}
      />
    </div>
  );
};

export default CardComponent;
