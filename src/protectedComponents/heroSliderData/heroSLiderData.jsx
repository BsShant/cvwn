import { message } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLandingSliderStarts } from "../../store/landingReducer/landingStore.actions.js";
import { server } from "../../utils/fetch";
import ImageSelectMultiple from "../imageSelect/ImageSelectMultiple";
import "./styles.css";
const HeroSliderData = (props) => {
  const dispatch = useDispatch();
  const [heroImagValue, setHeroImageValues] = useState({
    heroImages: [],
  });
  const landingSlider = useSelector(
    (state) => state.landingStore.landingSlider
  );
  useEffect(() => {
    setHeroImageValues({
      heroImages:
        landingSlider && landingSlider.heroImages
          ? JSON.parse(landingSlider.heroImages)
          : [],
    });
  }, [landingSlider]);
  const addData = () => {
    fetch(props.url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heroImages: JSON.stringify(heroImagValue.heroImages),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLandingSliderStarts());
        message.success(`Hero Slider Updated !`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(`Updating Hero Slider Failed`);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="image-select-heading">Slider Images</div>
        {heroImagValue.heroImages.length > 0
          ? heroImagValue.heroImages.map((hIM) => {
              return (
                <div
                  className="heroSliderContainer"
                  style={{ backgroundImage: `url(${server}/${hIM})` }}
                ></div>
              );
            })
          : null}
      </div>

      <div className="image-select-heading">Select Hero Images (Max 5)</div>
      <ImageSelectMultiple
        myImage={heroImagValue.heroImages}
        setMyImage={setHeroImageValues}
        name="heroImages"
        max={5}
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default HeroSliderData;
