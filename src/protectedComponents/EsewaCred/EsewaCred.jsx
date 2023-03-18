import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingDonateStarts, fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
import "./styles.css";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
import { fetchingDonationHeroStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import { fetchingFooterLinksStarts } from "../../store/footerReducer/footerStore.actions";
const EsewaCred = () => {
  let url = `${server}/esewa`;
  const dispatch = useDispatch();
  const footerLinks = useSelector((state) => state.footerStore.footerLinks);
  const [easeaCredValues, setEsewaCredValues] = useState({
    id: "",
    name: "",
  });
  const [esewaCredTextEdit, setEsewaCredTextEdit] = useState({
    idEdit: false,
    nameEdit: false,
  });
  useEffect(() => {
    if (footerLinks && footerLinks.esewa) {
      setEsewaCredValues({
        id: footerLinks.esewa.id,
        name: footerLinks.esewa.name,
      });
    }
  }, [footerLinks]);
  const esewaCredIdRef = useRef(null);
  const esewaCredNameRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(easeaCredValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFooterLinksStarts());
        message.success(`Esewa Cred Updated!`);
      })
      .catch((error) => {
        message.success(`Updating Esewa Cred Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Esewa Cred Section</div>
          <div className="data-container">
            <div className="data-heading">Id</div>
            <AdminTextArea
              textAreaRef={esewaCredIdRef}
              setTextEdit={setEsewaCredTextEdit}
              textEdit={esewaCredTextEdit}
              textAreaValue={easeaCredValues}
              onTextAreaValueChange={setEsewaCredValues}
              textEditName="idEdit"
              textName="id"
              name="esewaCredId"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Merchant Name</div>
            <AdminTextArea
              textAreaRef={esewaCredNameRef}
              setTextEdit={setEsewaCredTextEdit}
              textEdit={esewaCredTextEdit}
              textAreaValue={easeaCredValues}
              onTextAreaValueChange={setEsewaCredValues}
              textEditName="nameEdit"
              textName="name"
              name="esewaCredName"
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

export default EsewaCred;
