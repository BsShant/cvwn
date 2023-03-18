import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import Logo from "../../assets/Logo.png";

const ScrollToTop = (props) => {
  const loginModal = useSelector((state) => state.layoutStore.loginModal);
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const [preloaderOff, setPreloaderOff] = useState(false);
  const [preloaderNone, setPreloaderNone] = useState(false);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    setTimeout(() => {
      setPreloaderOff(true);
    }, 7300);
  }, []);
  return (
    <>
      <div className="main-child-container">{props.children}</div>
      <div
        className={`preloader-container ${
          preloaderOff ? "preloader-remover" : ""
        }`}
      >
        <div className="image-loader">
          <img src={Logo} alt="" />
        </div>
        {/* <Preloader /> */}
      </div>
    </>
  );
};

export default ScrollToTop;
