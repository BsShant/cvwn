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
    phone1: "",
    phone2: "",
    address: "",
  });
  const [footerContactTextEdit, setFooterContactEdit] = useState({
    footerEmailEdit: false,
    footePhone1Edit: false,
    footePhone2Edit: false,
    footerAddressEdit: false,
    footerPoBoxEdit: false,
  });
  useEffect(() => {
    if (footerContact) {
      setFooterContactValues({
        email: footerContact.email,
        phone1: footerContact.phone1,
        phone2: footerContact.phone2,
        address: footerContact.address,
      });
    }
  }, [footerContact]);
  const footerEmailRef = useRef(null);
  const footerAddressRef = useRef(null);
  const footerPhone1Ref = useRef(null);
  const footerPhone2Ref = useRef(null);

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
        console.log(`Footer About Section Updated!`);
        message.success(`Footer About Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Footer About Section Failed!! : `, error);
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
            <div className="data-heading">Phone1</div>
            <AdminTextArea
              textAreaRef={footerPhone1Ref}
              setTextEdit={setFooterContactEdit}
              textEdit={footerContactTextEdit}
              textEditName="footerPhone1Edit"
              textAreaValue={footerContactValues}
              onTextAreaValueChange={setFooterContactValues}
              textName="phone1"
              name="footerPhone1"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Phone2</div>
            <AdminTextArea
              textAreaRef={footerPhone2Ref}
              setTextEdit={setFooterContactEdit}
              textEdit={footerContactTextEdit}
              textEditName="footerPhone2Edit"
              textAreaValue={footerContactValues}
              onTextAreaValueChange={setFooterContactValues}
              textName="phone2"
              name="footerPhone2"
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
