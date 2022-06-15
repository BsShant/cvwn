import React from "react";
import "./styles.scss";
import { Carousel } from "react-bootstrap";
import Hero4 from "../../assets/hero-1.jpg";
import Hero2 from "../../assets/hero-2.jpg";
import Hero3 from "../../assets/hero-3.jpg";
import Hero1 from "../../assets/hero-4.jpg";
import Hero5 from "../../assets/hero-5.jpg";
import Hero6 from "../../assets/hero-6.jpg";
const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <Carousel interval={3000} loop={true} autoloop={true} fade>
        <Carousel.Item className="sliderOverlay">
          <div
            className="slider"
            style={{
              background: `url(${Hero1})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 60%",
            }}
          ></div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
        <div
            className="slider"
            style={{
              background: `url(${Hero2})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 60%",
            }}
          ></div>
        </Carousel.Item>

        <Carousel.Item className="sliderOverlay">
        <div
            className="slider"
            style={{
              background: `url(${Hero3})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 60%",
            }}
          ></div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
          <div
            className="slider"
            style={{
              background: `url(${Hero4})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 15%",
            }}
          ></div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
        <div
            className="slider"
            style={{
              background: `url(${Hero5})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 60%",
            }}
          ></div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
        <div
            className="slider"
            style={{
              background: `url(${Hero6})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 60%",
            }}
          ></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
