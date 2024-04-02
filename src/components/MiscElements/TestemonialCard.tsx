import React from "react";
import "./TestemonialCard.scss";
interface TestiomonialCardProps {
  testimonialText: string;
  authorPicSrc: string;
  authorName: string;
}

const TestemonialCard: React.FC<TestiomonialCardProps> = ({
  testimonialText,
  authorPicSrc,
  authorName,
}) => {
  return (
    <div className="testimonial-card-wrapper">
      <img
        className="testimonial-card-bg"
        loading="lazy"
        alt=""
        src="/hulo.dev-test-page/group-3.svg"
      />
      <h1 className="testimonial-text">{testimonialText}</h1>
      <div className="testimonial-author">
        <img
          className="testimonial-author-pic"
          loading="lazy"
          alt=""
          src={authorPicSrc}
        />
        <h3 className="testimonial-author-name">{authorName}</h3>
      </div>
    </div>
  );
};

export default TestemonialCard;
