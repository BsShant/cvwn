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
const Khalti = () => {
  let url = `${server}/khalti`;
  const dispatch = useDispatch();
  const footerLinks = useSelector((state) => state.footerStore.footerLinks);
  const [khaltiCredValues, setKhaltiCredValues] = useState({
    id: "",
    name: "",
  });
  const [KhaltiCredTextEdit, setKhaltiCredTextEdit] = useState({
    idEdit: false,
    nameEdit: false,
  });
  useEffect(() => {
    if (footerLinks && footerLinks.khalti) {
      setKhaltiCredValues({
        id: footerLinks.khalti.id,
        name: footerLinks.khalti.name,
      });
    }
  }, [footerLinks]);
  const KhaltiCredIdRef = useRef(null);
  const KhaltiCredNameRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(khaltiCredValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFooterLinksStarts());
        message.success(`Khalti Cred Updated!`);
      })
      .catch((error) => {
        message.success(`Updating Khalti Cred Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Khalti Cred Section</div>
          <div className="data-container">
            <div className="data-heading">Id</div>
            <AdminTextArea
              textAreaRef={KhaltiCredIdRef}
              setTextEdit={setKhaltiCredTextEdit}
              textEdit={KhaltiCredTextEdit}
              textAreaValue={khaltiCredValues}
              onTextAreaValueChange={setKhaltiCredValues}
              textEditName="idEdit"
              textName="id"
              name="KhaltiCredId"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Merchant Name</div>
            <AdminTextArea
              textAreaRef={KhaltiCredNameRef}
              setTextEdit={setKhaltiCredTextEdit}
              textEdit={KhaltiCredTextEdit}
              textAreaValue={khaltiCredValues}
              onTextAreaValueChange={setKhaltiCredValues}
              textEditName="nameEdit"
              textName="name"
              name="KhaltiCredName"
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

export default Khalti;
