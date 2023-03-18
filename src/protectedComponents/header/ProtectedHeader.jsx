import React, { useContext, useEffect, useState } from "react";
import {
  faSearch,
  faBars,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavContext } from "../NavProvider/NavProvider";
import "./styles.css";
import { Dropdown, Menu, Space } from "antd";
import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProtectedHeader = () => {
  const [selectedKey, setSelectedKey] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = (
    <Menu
      className="headerDropdown"
      // selectedKeys={[selectedKey]}
      onClick={(e) => setSelectedKey(e.key)}
    >
      <Menu.Item key="setting" onClick={() => navigate("/admin/setting")}>
        Setting
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => dispatch(logoutProcessStarts())}>
        Logout
      </Menu.Item>
    </Menu>
  );
  const { adminSlider, setAdminSlider } = useContext(NavContext);
  const [showInput, setShowInput] = useState(false);
  const listenToClick = (e) => {
    if (
      e.target !== "input.hideInput.showInput" ||
      e.target !== "svg.svg-inline--fa.fa-magnifying-glass"
    ) {
      setShowInput(false);
      window.removeEventListener("click", listenToClick);
    }
  };
  useEffect(() => {
    if (showInput) {
      window.addEventListener("click", listenToClick);
    }
  }, [showInput]);
  return (
    <div className="protected-header">
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div className="admin-header-left">
          <div className="admin-header-text">Dashboard</div>
          <div className="admin-toggle">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setAdminSlider((prev) => !prev)}
            />
          </div>
        </div>
        <div className="admin-header-right">
          {/* <div className="header-search">
          <FontAwesomeIcon
            icon={faSearch}
            onClick={() => {
              if (!showInput) {
                setShowInput(true);
              }
            }}
          />
          <input
            type="search"
            autoFocus
            className={`hideInput ${showInput ? "showInput" : ""}`}
          />
        </div> */}
          <div className="admin-user-icon">
            <Dropdown
              style={{ width: "50px" }}
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <FontAwesomeIcon icon={faUserCircle} />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedHeader;
