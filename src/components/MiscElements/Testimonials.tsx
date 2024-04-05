import React, { useRef, useState } from "react";
import "./Testimonials.scss";
import TestemonialCard from "./TestemonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const slider = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    draggable: false,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    afterChange: (index: number) => {
      console.log("Slider Changed to: ", index);
    },
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3500,
          pauseOnFocus: true,
          cssEase: "linear",
        },
      },
    ],
  };

  const isOffFrameSlide = (index: number) => index === (currentSlide + 1) % 2;

  return (
    <div className="testimonials-container">
      <div className="testimonials-head-wrapper">
        <div className="testimonials-head">
          <img
            className="table-of-contents"
            alt=""
            src="/hulo.dev-test-page/oidoublequotesansleft.svg"
          />
          <p>Testimonials</p>
        </div>
        <Slider ref={slider} {...settings} className="slider-wrapper">
          {[0, 1].map((_, index: number) => (
            <div
              key={index}
              onClick={() => {
                if (isOffFrameSlide(index)) {
                  slider.current?.slickNext();
                }
              }}
            >
              <TestemonialCard
                authorPicSrc={`/hulo.dev-test-page/frame-86${
                  index % 2 === 0 ? "" : "-1"
                }@2x.png`}
                authorName={`– ${
                  index % 2 === 0
                    ? "Luna, Luna’s Asethetics"
                    : "Pan Roman, Chloé Asethetics"
                }`}
                testimonialText={`${
                  index % 2 === 0
                    ? "Porttitor mattis congue gravida consectetur duis euismod imperdiet. Nunc eu amet, adipiscing amet tincidunt mi lectus ut. Habitant nullam ut auctor."
                    : "At semper elementum sapien amet. Orci imperdiet habitant purus sit aliquet in. Tortor mauris morbi eget lobortis cras malesuada. Non fringilla vulputate sed"
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
