import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
const SettingPassword = () => {
  let url = `${server}/auth/changePassword`;
  const dispatch = useDispatch();
  const [settingPasswordValues, setSettingPasswordValues] = useState({
    oldPassword: "",
    newPassword:""
  });
  const [settingPasswordTextEdit, setSettingPasswordTextEdit] = useState({
    newPasswordEdit: false,
    oldPasswordEdit: false,

  });
  // useEffect(() => {
  //   if (landingHero) {
  //     setLandingHeroValues({
  //       heading: landingHero.heading,
  //       subHeading: landingHero.subHeading,
  //     });
  //   }
  // }, [landingHero]);
  const settingNewPasswordRef = useRef(null);
  const settingOldPasswordRef = useRef(null);

  const updateDatabase = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settingPasswordValues),
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
          <div className="admin-sub-heading">Current Password</div>
          <div className="data-container">
            <AdminTextArea
              textAreaRef={settingOldPasswordRef}
              setTextEdit={setSettingPasswordTextEdit}
              textEdit={settingPasswordTextEdit}
              textAreaValue={settingPasswordValues}
              onTextAreaValueChange={setSettingPasswordValues}
              textEditName="oldPasswordEdit"
              textName="oldPassword"
              name="settingOldpassword"
            />
          </div>
          <div className="admin-sub-heading">New Password</div>
          <div className="data-container">
            <AdminTextArea
              textAreaRef={settingNewPasswordRef}
              setTextEdit={setSettingPasswordTextEdit}
              textEdit={settingPasswordTextEdit}
              textAreaValue={settingPasswordValues}
              onTextAreaValueChange={setSettingPasswordValues}
              textEditName="newPasswordEdit"
              textName="newPassword"
              name="settingpassword"
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

export default SettingPassword;
