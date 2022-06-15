import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingDonateStarts, fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
import "./styles.css";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
const LandingDonate = () => {
  let url = `${server}/landingDonate`;
  const dispatch = useDispatch();
  const landingDonate = useSelector((state) => state.landingStore.landingDonate);
  const [landingDonateValues, setLandingDonateValues] = useState({
    title: "",
    detail: "",
  });
  const [landingDonateTextEdit, setLandingDonateTextEdit] = useState({
    titleEdit: false,
    detailEdit: false,
  });
  useEffect(() => {
    if (landingDonate) {
      setLandingDonateValues({
        title: landingDonate.title,
        detail: landingDonate.detail,
      });
    }
  }, [landingDonate]);
  const landingDonateTitleRef = useRef(null);
  const landingDonateDetailRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(landingDonateValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLandingDonateStarts());
        console.log(`Landing Donate Section Updated!`);
        message.success(`Landing Donate Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Landing Donate Section Failed!! : `, error);
        message.success(`Updating Landing Donate Section Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Donate Section</div>
          <div className="data-container">
            <div className="data-heading">Title</div>
            <AdminTextArea
              textAreaRef={landingDonateTitleRef}
              setTextEdit={setLandingDonateTextEdit}
              textEdit={landingDonateTextEdit}
              textAreaValue={landingDonateValues}
              onTextAreaValueChange={setLandingDonateValues}
              textEditName="titleEdit"
              textName="title"
              name="landingDOnateTitle"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Detail</div>
            <AdminTextArea
              textAreaRef={landingDonateDetailRef}
              setTextEdit={setLandingDonateTextEdit}
              textEdit={landingDonateTextEdit}
              textAreaValue={landingDonateValues}
              onTextAreaValueChange={setLandingDonateValues}
              textEditName="detailEdit"
              textName="detail"
              name="landingDonateDetail"
            />
          </div>
          <button className="update-button" onClick={() => updateDatabase()}>
            Update
          </button>
          <div className="data-container">
            <div className="data-heading">About Image</div>
            <ImageUploadModal
              name="image"
              imageSection="Landing Donate Image"
              url={`${server}/landingDonate/image`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDonate;
