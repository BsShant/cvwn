import { Image } from "antd";
import React from "react";
import { server } from "../../utils/fetch";
const imagemap = [1, 2, 3, 4, 5, 6, 7, 8];

const PhotoTab = (props) => {
  const { myEvent } = props;
  return (
    <div className="photo-tab-container">
      <div className="row photo-gallery">
        {myEvent && myEvent.mediaImage
          ? JSON.parse(myEvent.mediaImage).map((image, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 gallery-image-container">
                  <Image
                    src={`${server}/${image}`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                      
                    }}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default PhotoTab;
