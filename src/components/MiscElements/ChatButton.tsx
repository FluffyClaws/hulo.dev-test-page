import React, { useState } from "react";
import "./ChatButton.scss";

interface ChatButtonProps {
  buttonText: string;
}

const ChatButton: React.FC<ChatButtonProps> = ({ buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="chat-button-wrapper">
        <button className="chat-button">
          <span className="button-content">{buttonText}</span>
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
  );
};

export default ChatButton;
