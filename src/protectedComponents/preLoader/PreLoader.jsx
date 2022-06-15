import React, { useEffect, useState } from "react";
import "./styles.css";
import HandLoader from "./HandLoader";
const PreLoader = () => {
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
        setPreLoader(false)
    },[5000])
  }, []);
  return (
    <div className={`preloader ${!preLoader ? "nullState" : ""}`}>
      {/* <div className="loader"></div> */}
      <HandLoader />
    </div>
  );
};

export default PreLoader;
