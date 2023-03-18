import React from "react";
import { server } from "../../utils/fetch";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import { useSelector } from "react-redux";
const VideoGallery = () => {
  const galleryVideo = useSelector((state) => state.aboutStore.galleryVideo);

  return (
    <div className="video-gallery-container">
      <div className="row mt-4">
        {galleryVideo.length > 0
          ? galleryVideo.map((video) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 gallery-video-container"
              >
                <Player>
                  <source
                    style={{ objectFit: "cover" }}
                    src={`${server}/${video.video}`}
                  />
                </Player>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default VideoGallery;
