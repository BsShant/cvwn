import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingDonateStarts, fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
import "./styles.css";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
import { fetchingDonationHeroStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
const DonateHero = () => {
  let url = `${server}/donationHero`;
  const dispatch = useDispatch();
  const donationHero = useSelector((state) => state.getInvolvedStore.donationHero);
  const [donateHeroValues, setDonateHeroValues] = useState({
    title: "",
    detail: "",
  });
  const [donateHeroTextEdit, setDonateHeroTextEdit] = useState({
    titleEdit: false,
    detailEdit: false,
  });
  useEffect(() => {
    if (donationHero) {
      setDonateHeroValues({
        title: donationHero.title,
        detail: donationHero.detail,
      });
    }
  }, [donationHero]);
  const donateHeroTitleRef = useRef(null);
  const donateHeroDetailRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donateHeroValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingDonationHeroStarts());
        console.log(`Donate Hero Section Updated!`);
        message.success(`Donate Hero Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Donate Hero Section Failed!! : `, error);
        message.success(`Updating Donate Hero Section Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Donate Hero Section</div>
          <div className="data-container">
            <div className="data-heading">Title</div>
            <AdminTextArea
              textAreaRef={donateHeroTitleRef}
              setTextEdit={setDonateHeroTextEdit}
              textEdit={donateHeroTextEdit}
              textAreaValue={donateHeroValues}
              onTextAreaValueChange={setDonateHeroValues}
              textEditName="titleEdit"
              textName="title"
              name="donateHeroTitle"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Detail</div>
            <AdminTextArea
              textAreaRef={donateHeroDetailRef}
              setTextEdit={setDonateHeroTextEdit}
              textEdit={donateHeroTextEdit}
              textAreaValue={donateHeroValues}
              onTextAreaValueChange={setDonateHeroValues}
              textEditName="detailEdit"
              textName="detail"
              name="donmaheherpDetail"
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

export default DonateHero;
