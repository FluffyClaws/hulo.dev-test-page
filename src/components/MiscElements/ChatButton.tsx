import React, { useState } from "react";
import "./ChatButton.scss";

interface ChatButtonProps {
  buttonText: string;
  width?: string;
  parentHover?: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({
  buttonText,
  width,
  parentHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const effectiveHover = parentHover !== undefined ? parentHover : isHovered;
  return (
    <div
      className="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="chat-button-wrapper" style={{ width }}>
        <button className="chat-button">
          <span className="button-content">{buttonText}</span>
        </button>
      </div>
      <div className="icon-parent">
        <div className="button-frame-wrapper">
          <img
            className={`icon ${effectiveHover ? "icon-hovered" : ""}`}
            loading="lazy"
            alt=""
            src={effectiveHover ? '/hulo.dev-test-page/arrow-icon.png' : '/hulo.dev-test-page/circle.svg'}
          />
        </div>
        <div className={`icon1 ${effectiveHover ? "hovered" : ""}`} />
      </div>
    </div>
  );
};

export default ChatButton;
