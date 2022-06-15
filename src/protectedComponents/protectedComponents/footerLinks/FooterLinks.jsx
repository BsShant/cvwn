import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
import { fetchingFooterLinksStarts } from "../../store/footerReducer/footerStore.actions";
const FooterLinks = () => {
  let url = `${server}/footerLinks`;
  const dispatch = useDispatch();
  const footerLinks = useSelector((state) => state.footerStore.footerLinks);
  const [footerLinkValues, setFooterLinkValues] = useState({
    facebook: "",
    insta: "",
    twitter: "",
    youtube: "",
    linkedIn: "",
  });
  const [footerLinksTextEdit, setFooterLinksEdit] = useState({
    footerFacebookEdit: false,
    footerInstaEdit: false,
    footerTwitterEdit: false,
    footerYoutubeEdit: false,
    footerLinkedInEdit: false,
  });
  useEffect(() => {
    if (footerLinks) {
      setFooterLinkValues({
        facebook: footerLinks.facebook,
        twitter: footerLinks.twitter,
        linkedIn: footerLinks.linkedIn,
        youtube: footerLinks.youtube,
        insta: footerLinks.insta,
      });
    }
  }, [footerLinks]);
  const footerFacebookRef = useRef(null);
  const footerYoutubeRef = useRef(null);
  const footerTwitterRef = useRef(null);
  const footerLinkedInRef = useRef(null);
  const footerInstaRef = useRef(null);

  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(footerLinkValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFooterLinksStarts());
        console.log(`Footer Links Section Updated!`);
        message.success(`Footer Links Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Footer Links Section Failed!! : `, error);
        message.success(`Updating Footer Links Section Failed!!`);
      });
  };
  return (
    <div className="admin-landing-section-hero-container admin-box-container" style={{marginBottom:"10px"}}>
      <div className="row">
        <div className="col-md-12">
          <div className="data-container">
            <div className="data-heading">Facebook</div>
            <AdminTextArea
              textAreaRef={footerFacebookRef}
              setTextEdit={setFooterLinksEdit}
              textEdit={footerLinksTextEdit}
              textEditName="footerFacebookEdit"
              textAreaValue={footerLinkValues}
              onTextAreaValueChange={setFooterLinkValues}
              textName="facebook"
              name="footerFacebook"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Twitter</div>
            <AdminTextArea
              textAreaRef={footerTwitterRef}
              setTextEdit={setFooterLinksEdit}
              textEdit={footerLinksTextEdit}
              textEditName="footerTwitterEdit"
              textAreaValue={footerLinkValues}
              onTextAreaValueChange={setFooterLinkValues}
              textName="twitter"
              name="footerTwitter"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Insta</div>
            <AdminTextArea
              textAreaRef={footerInstaRef}
              setTextEdit={setFooterLinksEdit}
              textEdit={footerLinksTextEdit}
              textEditName="footerInstaEdit"
              textAreaValue={footerLinkValues}
              onTextAreaValueChange={setFooterLinkValues}
              textName="insta"
              name="footerInsta"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Youtube</div>
            <AdminTextArea
              textAreaRef={footerYoutubeRef}
              setTextEdit={setFooterLinksEdit}
              textEdit={footerLinksTextEdit}
              textEditName="footerYoutubeEdit"
              textAreaValue={footerLinkValues}
              onTextAreaValueChange={setFooterLinkValues}
              textName="youtube"
              name="footerYoutube"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">LinkedIn</div>
            <AdminTextArea
              textAreaRef={footerLinkedInRef}
              setTextEdit={setFooterLinksEdit}
              textEdit={footerLinksTextEdit}
              textEditName="footerLinkedInEdit"
              textAreaValue={footerLinkValues}
              onTextAreaValueChange={setFooterLinkValues}
              textName="linkedIn"
              name="footerLinkedIn"
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

export default FooterLinks;
