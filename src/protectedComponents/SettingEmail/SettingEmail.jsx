import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
const SettingEmail = () => {
  let url = `${server}/auth/chgangeEmail`;
  const dispatch = useDispatch();
  const [settingEmailValues, setSettingEmailValues] = useState({
    email: "",
    newEmail: "",
  });
  const [settingEmailTextEdit, setSettingEmailTextEdit] = useState({
    settingEmailEdit: false,
    newEmailEdit: false,
  });
  // useEffect(() => {
  //   if (landingHero) {
  //     setLandingHeroValues({
  //       heading: landingHero.heading,
  //       subHeading: landingHero.subHeading,
  //     });
  //   }
  // }, [landingHero]);
  const settingEmailRef = useRef(null);
  const settingNewEmailRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settingEmailValues),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatch(fetchingLandingHeroStarts());
        console.log(`Email Updated!`);
        message.success(`Email Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Email Failed!! : `, error);
        message.error(`Updating Email Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Current Email</div>
          <div className="data-container">
            <AdminTextArea
              textAreaRef={settingEmailRef}
              setTextEdit={setSettingEmailTextEdit}
              textEdit={settingEmailTextEdit}
              textAreaValue={settingEmailValues}
              onTextAreaValueChange={setSettingEmailValues}
              textEditName="settingEmailEdit"
              textName="email"
              name="settingemail"
            />
          </div>
          <div className="admin-sub-heading">New Email</div>
          <div className="data-container">
            <AdminTextArea
              textAreaRef={settingNewEmailRef}
              setTextEdit={setSettingEmailTextEdit}
              textEdit={settingEmailTextEdit}
              textAreaValue={settingEmailValues}
              onTextAreaValueChange={setSettingEmailValues}
              textEditName="newEmailEdit"
              textName="newEmail"
              name="settingNewemail"
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

export default SettingEmail;
