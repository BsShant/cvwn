import { Image } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";

const ImageGallery = () => {
  const galleryImage = useSelector((state) => state.aboutStore.galleryImage);

  return (
    <div className="image-gallery-container">
      <div className="row mt-4">
        {galleryImage.length > 0
          ? galleryImage.map((image) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 image-container">
                <Image
                  src={`${server}/${image.image}`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "200px",
                  }}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ImageGallery;
