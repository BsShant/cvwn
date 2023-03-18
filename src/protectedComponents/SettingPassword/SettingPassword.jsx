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
    newPassword: "",
    myId: "1",
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

  const updateDatabase = async () => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settingPasswordValues),
      });
      if (res.status == 401) {
        return message.success(`password did not match. please try again!`);
      }
      const data = await res.json();
      message.success(`password Updated!`);
    } catch (error) {
      message.error(`Updating password Failed!!`);
    }
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
