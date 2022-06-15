import React from "react";
import "./styles.scss";
import { Carousel } from "react-bootstrap";
import { server } from "../../utils/fetch";
const ProjectSlider = (props) => {
  const { images } = props;
  return (
    <div className="project-slider">
      <Carousel interval={3000} loop={true} autoloop={true} fade>
        {images.map((img) => {
          return (
            <Carousel.Item className="sliderOverlay">
              <div
                className="slider"
                style={{
                  background: `url(${server}/${img})`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // backgroundPosition: "center 60%",
                }}
              ></div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectSlider;
