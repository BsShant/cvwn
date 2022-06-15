import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import ImageUploading, { ImageListType } from "react-images-uploading";
import ImageUpload from "../imageUpload/ImageUplpoad";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLandingAboutStarts } from "../../store/landingReducer/landingStore.actions";

const AboutSection = () => {
  let url = `${server}/landingAbout/text`;
  const dispatch = useDispatch();
  const landingAbout = useSelector((state) => state.landingStore.landingAbout);
  const [landingAboutValues, setLandingAboutValues] = useState({
    heading: "",
    blueSpan: "",
    detail: "",
  });
  const [landingAboutTextEdit, setLandingAboutTextEdit] = useState({
    headingEdit: false,
    detailEdit: false,
    blueSpanEdit: false,
  });
  useEffect(() => {
    if (landingAbout) {
      setLandingAboutValues({
        heading: landingAbout.heading,
        detail: landingAbout.detail,
        blueSpan: landingAbout.blueSpan,
      });
    }
  }, [landingAbout]);
  const landingAboutHeadingRef = useRef(null);
  const landingAboutDetailRef = useRef(null);
  const landingAboutBlueSpanRef = useRef(null);

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
                textAreaRef={landingAboutHeadingRef}
                setTextEdit={setLandingAboutTextEdit}
                textEdit={landingAboutTextEdit}
                textEditName="headingEdit"
                textAreaValue={landingAboutValues}
                onTextAreaValueChange={setLandingAboutValues}
                textName="heading"
                name="landingAboutHeading"
              />
            </div>
            <div className="data-container">
              <div className="data-heading">Blue Touch</div>
              <AdminTextArea
                textAreaRef={landingAboutBlueSpanRef}
                setTextEdit={setLandingAboutTextEdit}
                textEdit={landingAboutTextEdit}
                textEditName="blueSpanEdit"
                textAreaValue={landingAboutValues}
                onTextAreaValueChange={setLandingAboutValues}
                textName="blueSpan"
                name="landingAboutBlueSpan"
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

export default AboutSection;
