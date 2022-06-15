import { Image } from "antd";
import React from "react";
import MediaTab from "../../mediaTabs/MediaTab";

const EventCompleted = (props) => {
  const { myEvent } = props;
  return (
    <div className="gallery">
      <div className="gallery-heading">
        <h3>Our Gallery </h3>
      </div>
      <div className="gallery-tab">
        <MediaTab myEvent={myEvent} />
      </div>
     
    </div>
  );
};

export default EventCompleted;
