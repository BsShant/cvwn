import React, { useContext, useEffect, useState } from "react";
import {
  faSearch,
  faBars,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavContext } from "../NavProvider/NavProvider";
import "./styles.css";
const ProtectedHeader = () => {
  const { adminSlider, setAdminSlider } = useContext(NavContext);
  const [showInput, setShowInput] = useState(false);
  const listenToClick = (e) => {
    if (
      ( e.target !== "input.hideInput.showInput") ||
      (e.target !== "svg.svg-inline--fa.fa-magnifying-glass")
    ) {
      console.log("heror", e.target)

      setShowInput(false);
      window.removeEventListener("click", listenToClick);

    }
  };
  useEffect(() => {
    if (showInput) {
      window.addEventListener("click", listenToClick);
    }
  }, [showInput]);
console.log(showInput)
  return (
    <div className="protected-header">
      <div className="admin-header-left">
        <div className="admin-header-text">Dashboard</div>
        {/* <FontAwesomeIcon icon={faBars} onClick={() => setAdminSlider(prev=> !prev)} /> */}
      </div>
      <div className="admin-header-right">
        <div className="header-search">
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
        </div>
        <div className="admin-user-icon">
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </div>
    </div>
  );
};

export default ProtectedHeader;
