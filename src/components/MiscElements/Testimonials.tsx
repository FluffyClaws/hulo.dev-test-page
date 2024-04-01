import React from "react";
import "./Testimonials.scss";
import TestemonialCard from "./TestemonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-head-wrapper">
        <div className="testimonials-head">
          <img
            className="table-of-contents"
            alt=""
            src="/oidoublequotesansleft.svg"
          />
          <p>Testimonials</p>
        </div>
        <div className="slider-wrapper">
          <TestemonialCard
            authorPicSrc="/frame-86@2x.png"
            authorName="– Luna, Luna’s Asethetics"
            testimonialText="Porttitor mattis congue gravida consectetur duis euismod imperdiet. Nunc eu amet, adipiscing amet tincidunt mi lectus ut. Habitant nullam ut auctor."
          />
          <TestemonialCard
            authorPicSrc="/frame-86-1@2x.png"
            authorName="– Pan Roman, Chloé Asethetics"
            testimonialText="At semper elementum sapien amet. Orci imperdiet habitant purus sit aliquet in. Tortor mauris morbi eget lobortis cras malesuada. Non fringilla vulputate sed"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
