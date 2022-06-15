import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
const LandingHero = () => {
  let url = `${server}/landingHero`;
  const dispatch = useDispatch();
  const landingHero = useSelector((state) => state.landingStore.landingHero);
  const [landingHeroValues, setLandingHeroValues] = useState({
    heading: "",
    subHeading:"",
  });
  const [landingHeroTextEdit, setLandingHeroTextEdit] = useState({
    headingEdit: false,
    subHeadingEdit: false,
  });
  useEffect(() => {
    if (landingHero) {
      setLandingHeroValues({
        heading: landingHero.heading,
        subHeading: landingHero.subHeading,
      });
    }
  }, [landingHero]);
  const landingHeroHeadingRef = useRef(null);
  const landingHeroSubHeadingRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(landingHeroValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLandingHeroStarts());
        console.log(`Landing Hero Section Updated!`);
        message.success(`Landing Hero Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Landing Hero Section Failed!! : `, error);
        message.success(`Updating Landing Hero Section Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Hero Section</div>
          <div className="data-container">
            <div className="data-heading">Heading</div>
            <AdminTextArea
              textAreaRef={landingHeroHeadingRef}
              setTextEdit={setLandingHeroTextEdit}
              textEdit={landingHeroTextEdit}
              textAreaValue={landingHeroValues}
              onTextAreaValueChange={setLandingHeroValues}
              textEditName="headingEdit"
              textName="heading"
              name="landingHeroHeading"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Sub Heading</div>
            <AdminTextArea
              textAreaRef={landingHeroSubHeadingRef}
              setTextEdit={setLandingHeroTextEdit}
              textEdit={landingHeroTextEdit}
              textAreaValue={landingHeroValues}
              onTextAreaValueChange={setLandingHeroValues}
              textEditName="subHeadingEdit"
              textName="subHeading"
              name="landingHeroSubHeading"
            />
          </div>
          <button className="update-button" onClick={() => updateDatabase()}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
