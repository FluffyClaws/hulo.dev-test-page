import React, { useState } from "react";
import "./ChatButton.scss";

interface ChatButtonProps {
  buttonText: string;
  width?: string;
}

const ChatButton: React.FC<ChatButtonProps> = ({ buttonText, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="chat-button-wrapper" style={{ width }}>
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
