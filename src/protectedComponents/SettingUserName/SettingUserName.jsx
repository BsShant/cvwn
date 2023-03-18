import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
const SettingUserName = () => {
  let url = `${server}/auth/changeUsername`;
  const dispatch = useDispatch();
  const [settingUsernameValues, setSettingUsernameValues] = useState({
    username: "",
    newUsername: "",
  });
  const [settingUsernameTextEdit, setSettingUsernameTextEdit] = useState({
    usernameEdit: false,
    newUsernameEdit: false,
  });
  // useEffect(() => {
  //   if (landingHero) {
  //     setLandingHeroValues({
  //       heading: landingHero.heading,
  //       subHeading: landingHero.subHeading,
  //     });
  //   }
  // }, [landingHero]);
  const settingUsernameRef = useRef(null);
  const settingNewUsernameRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settingUsernameValues),
    })
      .then((res) => res.json())
      .then((data) => {
        // dispatch(fetchingLandingHeroStarts());
        ""
        message.success(`Username Updated!`);
      })
      .catch((error) => {
        ""
        message.error(`Updating Username Failed!!`);
      });
  };
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Current Username</div>
          <div className="data-container">
            <AdminTextArea
              textAreaRef={settingUsernameRef}
              setTextEdit={setSettingUsernameTextEdit}
              textEdit={settingUsernameTextEdit}
              textAreaValue={settingUsernameValues}
              onTextAreaValueChange={setSettingUsernameValues}
              textEditName="usernameEdit"
              textName="username"
              name="settingUsername"
            />
          </div>
          <div className="admin-sub-heading">New Username</div>
          <div className="data-container">
            <AdminTextArea
              textAreaRef={settingNewUsernameRef}
              setTextEdit={setSettingUsernameTextEdit}
              textEdit={settingUsernameTextEdit}
              textAreaValue={settingUsernameValues}
              onTextAreaValueChange={setSettingUsernameValues}
              textEditName="newUsernameEdit"
              textName="newUsername"
              name="settingNewUsername"
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

export default SettingUserName;
