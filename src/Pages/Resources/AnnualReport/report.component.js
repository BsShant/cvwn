import React from "react";
import "./annualreport.styles.scss";
import { Image } from "antd";
import "antd/dist/antd.css";

export default function ReportComponent({ title, image }) {
  return (
    <div className="reportSection">
      <div className="projectTitle">
        <h5>{title}</h5>
      </div>

      <div className="reportImage" style={{ height: "100%", width: "100%" }}>
        <Image
          src={image}
          alt="report image"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>
      <div className="report-txt">
        <a href="#">
          <h5 style={{ color: "white" }}>{title}</h5>
        </a>
      </div>
    </div>
  );
}
