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
const BankCred = () => {
  let url = `${server}/bank`;
  const dispatch = useDispatch();
  const footerLinks = useSelector((state) => state.footerStore.footerLinks);
  const [BankCredValues, setBankCredValues] = useState({
    id: "",
    name: "",
  });
  const [BankCredTextEdit, setBankCredTextEdit] = useState({
    idEdit: false,
    nameEdit: false,
  });
  useEffect(() => {
    if (footerLinks && footerLinks.bank) {
      setBankCredValues({
        id: footerLinks.bank.id,
        name: footerLinks.bank.name,
      });
    }
  }, [footerLinks]);
  const BankCredIdRef = useRef(null);
  const BankCredNameRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(BankCredValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFooterLinksStarts());
        message.success(`Bank Cred Updated!`);
      })
      .catch((error) => {
        message.success(`Updating Bank Cred Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Bank Cred Section</div>
          <div className="data-container">
            <div className="data-heading">Account Number</div>
            <AdminTextArea
              textAreaRef={BankCredIdRef}
              setTextEdit={setBankCredTextEdit}
              textEdit={BankCredTextEdit}
              textAreaValue={BankCredValues}
              onTextAreaValueChange={setBankCredValues}
              textEditName="idEdit"
              textName="id"
              name="BankCredId"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Account Name</div>
            <AdminTextArea
              textAreaRef={BankCredNameRef}
              setTextEdit={setBankCredTextEdit}
              textEdit={BankCredTextEdit}
              textAreaValue={BankCredValues}
              onTextAreaValueChange={setBankCredValues}
              textEditName="nameEdit"
              textName="name"
              name="BankCredName"
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

export default BankCred;
