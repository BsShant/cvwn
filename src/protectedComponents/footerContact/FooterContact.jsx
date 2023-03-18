import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchingLandingHeroStarts } from "../../store/landingReducer/landingStore.actions";
import { fetchingFooterContactStarts } from "../../store/footerReducer/footerStore.actions";
const FooterContact = () => {
  let url = `${server}/footerContact`;
  const dispatch = useDispatch();
  const footerContact = useSelector((state) => state.footerStore.footerContact);
  const [footerContactValues, setFooterContactValues] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const [footerContactTextEdit, setFooterContactEdit] = useState({
    footerEmailEdit: false,
    footePhoneEdit: false,
    footerAddressEdit: false,
  });
  useEffect(() => {
    if (footerContact) {
      setFooterContactValues({
        email: footerContact.email,
        phone: footerContact.phone,
        address: footerContact.address,
      });
    }
  }, [footerContact]);
  const footerEmailRef = useRef(null);
  const footerAddressRef = useRef(null);
  const footerPhoneRef = useRef(null);

  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(footerContactValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFooterContactStarts());
        message.success(`Footer About Section Updated!`);
      })
      .catch((error) => {
        message.success(`Updating Footer About Section Failed!!`);
      });
  };
  return (
    <div className="admin-landing-section-hero-container admin-box-container ">
      <div className="row">
        <div className="col-md-12">
          <div className="data-container">
            <div className="admin-sub-heading">Footer Contacts</div>
            <div className="data-heading">Email</div>
            <AdminTextArea
              textAreaRef={footerEmailRef}
              setTextEdit={setFooterContactEdit}
              textEdit={footerContactTextEdit}
              textEditName="footerEmailEdit"
              textAreaValue={footerContactValues}
              onTextAreaValueChange={setFooterContactValues}
              textName="email"
              name="footerEmail"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Address</div>
            <AdminTextArea
              textAreaRef={footerAddressRef}
              setTextEdit={setFooterContactEdit}
              textEdit={footerContactTextEdit}
              textEditName="footerAddressEdit"
              textAreaValue={footerContactValues}
              onTextAreaValueChange={setFooterContactValues}
              textName="address"
              name="footerAddress"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Phone</div>
            <AdminTextArea
              textAreaRef={footerPhoneRef}
              setTextEdit={setFooterContactEdit}
              textEdit={footerContactTextEdit}
              textEditName="footerPhoneEdit"
              textAreaValue={footerContactValues}
              onTextAreaValueChange={setFooterContactValues}
              textName="phone"
              name="footerPhone"
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

export default FooterContact;
