import React from "react";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import "./video.css";
import { server } from "../../utils/fetch";
const videomap = [1, 2, 3, 4, 5, 6, 7, 8];
const VideoTab = (props) => {
  const { myEvent } = props;
  console.log(myEvent.mediaVideo, "dfdff")
  return (
    <div className="video-tab-container">
      <div className="row video-gallery">
        {myEvent && myEvent.mediaVideo
          ? JSON.parse(myEvent.mediaVideo).map((video, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-6 col-12 gallery-video-container"
                >
                  <Player>
                    <source
                      style={{ objectFit: "cover" }}
                      src={`${server}/${video}`}
                    />
                  </Player>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default VideoTab;
