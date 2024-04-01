import React from "react";
import "./CardsSection.scss";
import CardComponent from "./MiscElements/CardComponent";

const CardsSection = () => {
  return (
    <section className="cards-wrapper">
      <div className="cards">
        <CardComponent
          title="Our 1-day design services"
          content="I NEED A VISUAL REVAMP|ASAP"
          imgSrc="/img-11@2x.png"
          bgImgSrc="/card-bg-img.png"
        />
        <CardComponent
          title="Our retainer services"
          content="I NEED AN|EXTERNAL
          MARKETING TEAM"
          imgSrc="/img-1-1@2x.png"
          bgImgSrc="/img-11@2x.png"
        />
        <CardComponent
          title="Let’s work together"
          content="I NEED TO|INCREASE ONLINE PRESENCE"
          imgSrc="/img-2@2x.png"
          bgImgSrc="img-1-1@2x.png"
        />
      </div>
    </section>
  );
};

export default CardsSection;
