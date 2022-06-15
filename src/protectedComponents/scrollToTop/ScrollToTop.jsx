import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import PreLoader from "../preLoader/PreLoader";
// import Typing from 'react-typing-animation';
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="main-child-container">{props.children}</div>

      <PreLoader />
    </>
  );
};

export default ScrollToTop;
