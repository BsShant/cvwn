import React from "react";
import "./styles.scss";
import { Carousel } from "react-bootstrap";
import Hero4 from "../../assets/hero-1.jpg";
import Hero2 from "../../assets/roundImage.JPG";
// import Hero3 from "../../assets/hero-3.jpg";
import Hero1 from "../../assets/hero-4.jpg";
import Hero5 from "../../assets/hero-5.jpg";
import Hero6 from "../../assets/handHolding.JPG";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import { useLayoutEffect } from "react";
import { useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
const HeroSlider = () => {
  const heroSLider = useSelector((state) => state.landingStore.landingSlider);
  const [myImages, setMyImages] = useState([]);
  useLayoutEffect(() => {
    if (heroSLider) {
      setMyImages(JSON.parse(heroSLider.heroImages));
    }
  }, [heroSLider]);
  return (
    <div className="hero-slider">
      {heroSLider && myImages.length > 0 ? (
        <ReactOwlCarousel
          loop={true}
          nav={true}
          margin={0}
          dots={false}
          slideTransition="linear"
          animateIn="fadeIn"
          animateOut="fadeOut"
          autoplaySpeed={4000}
          autoPlay={true}
          items={1}
          responsiveClass={true}
          className="hero-carousel"
          responsive={{
            0: {
              items: 1,
              autoplay: true,
              nav: false,
            },
            768: {
              items: 1,
              autoplay: true,
              nav: true,
            },
            992: {
              items: 1,
              autoplay: true,
              nav: true,

            },
          }}
        >
          {myImages.map((heroImg) => {
            return (
              <div
                className="sliderOverlay"
                style={{
                  backgroundImage: `url(${server}/${heroImg})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center 60%",
                }}
              ></div>
            );
          })}
        </ReactOwlCarousel>
      ) : null}
      {/* {heroSLider && myImages.length > 0 ? (
        <Carousel interval={3000} loop={true} autoloop={true} fade>
          {myImages.map((heroImg) => {
            return (
              <Carousel.Item className="sliderOverlay">
                {/* <div className="slider"></div> */}
      {/* </Carousel.Item> */}
      {/* ); */}
      {/* })} */}
      {/* <Carousel.Item className="sliderOverlay">
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
                background: `url(${Hero6})`,
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
                background: `url(${Hero1})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 60%",
              }}
            ></div>
          </Carousel.Item> */}
      {/* </Carousel>
      ) : null} */}
    </div>
  );
};

export default HeroSlider;
