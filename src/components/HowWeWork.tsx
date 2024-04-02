import React from "react";
import "./HowWeWork.scss";

const HowWeWork: React.FC = () => {
  return (
    <section className="work-container">
      <div className="work-wrapper">
        <div className="top-block-wrapper">
          <div className="head">
            <img className="black-circle" src="/hulo.dev-test-page/black-circle.svg" alt="" />
            <p>HOW WE WORK</p>
          </div>
        </div>
        <div className="main-frame">
          <div className="main-frame-img ">
            <img className="img-icon1" alt="" src="/hulo.dev-test-page/img-1@2x.png" />
          </div>
          <div className="main-frame-desc-container ">
            <h1 className="main-frame-desc-wrapper">
              <p>YOUR BUSINESS NEEDS </p>
              <p>
                <i>a strategic</i>
                <span> PLAN, </span>
                <i>creative</i>
                <span>{` EXECUTION, & `}</span>
                <i>steady</i>
                <span> SUPPORT TO GROW.</span>
              </p>
            </h1>
            <img className="work-circle" alt="" src="/hulo.dev-test-page/vector-39-1.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
