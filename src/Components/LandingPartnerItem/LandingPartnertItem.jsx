import React from "react";
import "./styles.scss";
const LandingPartnertItem = (props) => {
  const { image, link, name } = props;
  return (
    <div className="partner-item">
      <a href={`${link ? link : "#"}`} target="_blank">
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default LandingPartnertItem;
