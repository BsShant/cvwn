import React from "react";
import { Carousel } from "react-bootstrap";
import Hero4 from "../../assets/hero-1.jpg";
import Hero2 from "../../assets/hero-2.jpg";
import Hero3 from "../../assets/hero-3.jpg";
import Hero1 from "../../assets/hero-4.jpg";
import Hero5 from "../../assets/hero-5.jpg";
import Hero6 from "../../assets/hero-6.jpg";

import "./main-slider.styles.scss";

const MainSlider = () => {
  return (
    <div className="myCarousel">
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
          >
            <div class="content">
              <div class="container">
                <div class="content-box">
                  <h2 className="animate__animated animate__fadeInDown">
                    Storytelling is a medium
                    <br /> for social change
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
          <img
            className="d-block w-100 "
            src={Hero2}
            alt="Second slide"
            height="510"
          />
          <div class="content">
            <div class="container">
              <div class="content-box">
                <h2 className="animate__animated animate__fadeInUp">
                  Storytelling is a medium
                  <br /> for social change
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="sliderOverlay">
          <img
            className="d-block w-100"
            src={Hero3}
            alt="Third slide"
            height="510"
          />
          <div class="content">
            <div class="container">
              <div class="content-box">
                <h2 className="animate__animated animate__fadeInDown">
                  Who tells the story, <br />
                  matters
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
          {/* <img
          className="d-block w-100"
          src={Hero4}
          alt="Fourth slide"
          height="510"
        /> */}
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
          >
            <div class="content">
              <div class="container">
                <div class="content-box">
                  <h2 className="animate__animated animate__fadeInDown">
                    Storytelling is a medium
                    <br /> for social change
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
          <img
            className="d-block w-100"
            src={Hero5}
            alt="Fifth slide"
            height="510"
          />
          <div class="content">
            <div class="container">
              <div class="content-box">
                <h2 className="animate__animated animate__fadeInDown">
                  Storytelling is a medium
                  <br /> for social change
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderOverlay">
          <img
            className="d-block w-100"
            src={Hero6}
            alt="Fifth slide"
            height="510"
          />
          yyt666766667777
          <div class="content">
            <div class="container">
              <div class="content-box">
                <h2 className="animate__animated animate__fadeInDown">
                  Storytelling is a medium
                  <br /> for social change
                </h2>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainSlider;
