import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLandingAboutStarts } from "../../store/landingReducer/landingStore.actions";

const LandingAbout = () => {
  let url = `${server}/landingAbout`;
  const dispatch = useDispatch();
  const landingAbout = useSelector((state) => state.landingStore.landingAbout);
  const [landingAboutValues, setLandingAboutValues] = useState({
    title: "",
    detail: "",
  });
  const [landingAboutTextEdit, setLandingAboutTextEdit] = useState({
    titleEdit: false,
    detailEdit: false,
  });
  useEffect(() => {
    if (landingAbout) {
      setLandingAboutValues({
        title: landingAbout.title,
        detail: landingAbout.detail,
      });
    }
  }, [landingAbout]);
  const landingAboutTitleRef = useRef(null);
  const landingAboutDetailRef = useRef(null);
  console.log("landign about", landingAbout);

  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(landingAboutValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLandingAboutStarts());
        console.log(`Landing About Section Updated!`);
        message.success(`Landing About Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Landing About Section Failed!! : `, error);
        message.success(`Updating Landing About Section Failed!!`);
      });
  };
  return (
    <div className="admin-landing-about-section">
      <div className="admin-landing-about-inner admin-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="admin-sub-heading">About Section</div>
            <div className="data-container">
              <div className="data-heading">Heading</div>
              <AdminTextArea
                textAreaRef={landingAboutTitleRef}
                setTextEdit={setLandingAboutTextEdit}
                textEdit={landingAboutTextEdit}
                textEditName="titleEdit"
                textAreaValue={landingAboutValues}
                onTextAreaValueChange={setLandingAboutValues}
                textName="title"
                name="landingAboutHeading"
              />
            </div>

            <div className="data-container">
              <div className="data-heading">Detail</div>
              <AdminTextArea
                textAreaRef={landingAboutDetailRef}
                setTextEdit={setLandingAboutTextEdit}
                textEdit={landingAboutTextEdit}
                textAreaValue={landingAboutValues}
                onTextAreaValueChange={setLandingAboutValues}
                textEditName="detailEdit"
                textName="detail"
                name="landingAboutDetail"
              />
            </div>
            <button className="update-button" onClick={() => updateDatabase()}>
              Update
            </button>
            <div className="data-container">
              <div className="data-heading">About Image</div>
              <ImageUploadModal
                name="image"
                imageSection="Landing About Image"
                url={`${server}/landingAbout/image`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
