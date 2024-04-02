import React from "react";
import "./FeaturedProject.scss";

const FeaturedProject: React.FC = (props) => {
  return (
    <div className="featured-container">
      <div className="card-wrapper">
        <div className="card">
          <img className="featured-banner" alt="" src="/featured-banner.png" />
          <img
            className="feature-banner-pop"
            alt=""
            src="/feature-banner-pop.png"
          />
          <div className="website">Website</div>
          <div className="view-wrapper">
            <h1> View </h1>
            <h1>Case</h1>
          </div>
        </div>
      </div>
      <div className="featured-footer">
        <div className="featured-footer-wrapper">
          <div className="branch-filter">
            <div className="value-splitter">
              <img
                className="star-icon"
                loading="lazy"
                alt=""
                src="/star-1.svg"
              />
            </div>
            <div className="featured-project">Featured Project</div>
          </div>
          <div className="author">
            <p>Kate Eckstein Design</p>
          </div>
          <div className="categories">
            Strategy, content, Design, development
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
