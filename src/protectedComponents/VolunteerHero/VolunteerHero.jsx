import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingDonateStarts, fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
import "./styles.css";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
import { fetchingVolunteerHeroStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
const VolunteerHero = () => {
  let url = `${server}/volunteerHero`;
  const dispatch = useDispatch();
  const volunteerHero = useSelector((state) => state.getInvolvedStore.volunteerHero);
  const [volunteerHeroValues, setVolunteerHeroValues] = useState({
    title: "",
    detail: "",
  });
  const [volunteerHeroTextEdit, setVolunteerHeroTextEdit] = useState({
    titleEdit: false,
    detailEdit: false,
  });
  useEffect(() => {
    if (volunteerHero) {
      setVolunteerHeroValues({
        title: volunteerHero.title,
        detail: volunteerHero.detail,
      });
    }
  }, [volunteerHero]);
  const volunteerHeroTitleRef = useRef(null);
  const volunteerHeroDetailRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(volunteerHeroValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingVolunteerHeroStarts());
        message.success(`Team Section Updated!`);
      })
      .catch((error) => {
        message.success(`Updating Team Section Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Team Hero Section</div>
          <div className="data-container">
            <div className="data-heading">Title</div>
            <AdminTextArea
              textAreaRef={volunteerHeroTitleRef}
              setTextEdit={setVolunteerHeroTextEdit}
              textEdit={volunteerHeroTextEdit}
              textAreaValue={volunteerHeroValues}
              onTextAreaValueChange={setVolunteerHeroValues}
              textEditName="titleEdit"
              textName="title"
              name="volunteerHeroTitle"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Detail</div>
            <AdminTextArea
              textAreaRef={volunteerHeroDetailRef}
              setTextEdit={setVolunteerHeroTextEdit}
              textEdit={volunteerHeroTextEdit}
              textAreaValue={volunteerHeroValues}
              onTextAreaValueChange={setVolunteerHeroValues}
              textEditName="detailEdit"
              textName="detail"
              name="volunteerherpDetail"
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

export default VolunteerHero;
