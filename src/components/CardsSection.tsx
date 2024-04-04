import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./CardsSection.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "./MiscElements/CardComponent";

const CardsSection = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 450);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    cssEase: "linear",
  };

  const cards = [
    {
      title: "Our 1-day design services",
      content: "I NEED A VISUAL REVAMP|ASAP",
      imgSrc: "/hulo.dev-test-page/img-11@2x.png",
      bgImgSrc: "/hulo.dev-test-page/card-bg-img.png",
    },
    {
      title: "Our retainer services",
      content: "I NEED AN|EXTERNAL MARKETING TEAM",
      imgSrc: "/hulo.dev-test-page/img-1-1@2x.png",
      bgImgSrc: "/hulo.dev-test-page/img-11@2x.png",
    },
    {
      title: "Let’s work together",
      content: "I NEED TO|INCREASE ONLINE PRESENCE",
      imgSrc: "/hulo.dev-test-page/img-2@2x.png",
      bgImgSrc: "/hulo.dev-test-page/img-1-1@2x.png",
    },
  ];

  return (
    <section className="cards-wrapper">
      {isMobileView ? (
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <CardComponent {...card} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="cards">
          {cards.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CardsSection;
