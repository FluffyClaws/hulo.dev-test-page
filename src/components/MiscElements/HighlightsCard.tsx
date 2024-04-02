import React from "react";
import "./HighlightsCard.scss";

interface HighlightsCardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  imgWidth?: string;
  imgHeight?: string;
}

const HighlightsCard: React.FC<HighlightsCardProps> = ({
  imgSrc,
  title,
  subtitle,
  imgWidth,
  imgHeight,
}) => {
  const style = {
    "--img-width": imgWidth,
    "--img-height": imgHeight,
  } as React.CSSProperties;

  return (
    <div className="highlight-card">
      <div className="img-wrapper">
        <img
          className="highlight-img"
          alt={title}
          src={imgSrc}
          style={{ width: imgWidth, height: imgHeight }}
        />
      </div>
      <div className="text-wrapper">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HighlightsCard;
