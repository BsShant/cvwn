import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
import { fetchingFooterAboutStarts } from "../../store/footerReducer/footerStore.actions";
const FooterAbout = () => {
  let url = `${server}/footerAbout`;
  const dispatch = useDispatch();
  const footerAbout = useSelector((state) => state.footerStore.footerAbout);
  const [footerAboutValues, setFooterAboutValues] = useState({
    about: "",
    blueSpan:""
  });
  const [footerAboutTextEdit, setFooterAboutEdit] = useState({
    footerAboutEdit: false,
    footerBlueSpanEdit: false,
  });
  useEffect(() => {
    if (footerAbout) {
      setFooterAboutValues({
        about: footerAbout.about,
        blueSpan: footerAbout.blueSpan,
      });
    }
  }, [footerAbout]);
  const footerAboutRef = useRef(null);
  const footerBlueSpanRef = useRef(null);

  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(footerAboutValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFooterAboutStarts());
        console.log(`Footer About Section Updated!`);
        message.success(`Footer About Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Footer About Section Failed!! : `, error);
        message.success(`Updating Footer About Section Failed!!`);
      });
  };
  return (
    <div className="admin-landing-section-hero-container admin-box-container">
      <div className="row">
        <div className="col-md-12">
          {/* <div className="admin-sub-heading">About</div> */}
          <div className="data-container">
          <div className="admin-sub-heading">Footer About</div>
            <div className="data-heading">About</div>
            <AdminTextArea
              textAreaRef={footerAboutRef}
              setTextEdit={setFooterAboutEdit}
              textEdit={footerAboutTextEdit}
              textEditName="footerAboutEdit"
              textAreaValue={footerAboutValues}
              onTextAreaValueChange={setFooterAboutValues}
              textName="about"
              name="footerAbout"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Blue Touch</div>
            <AdminTextArea
              textAreaRef={footerBlueSpanRef}
              setTextEdit={setFooterAboutEdit}
              textEdit={footerAboutTextEdit}
              textEditName="footerBlueSpanEdit"
              textAreaValue={footerAboutValues}
              onTextAreaValueChange={setFooterAboutValues}
              textName="blueSpan"
              name="footerBlueSpan"
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

export default FooterAbout;
