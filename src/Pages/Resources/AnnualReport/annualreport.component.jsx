import React from "react";
import "./annualreport.styles.scss";

import image1 from "../../../assets/case-1.png";
import image2 from "../../../assets/case-2.png";
import { Image } from "antd";
import "antd/dist/antd.css";
import image3 from "../../../assets/case-3.png";
import image4 from "../../../assets/case-4.png";
import image5 from "../../../assets/case-5.jpg";
import image6 from "../../../assets/case-6.png";

import ReportComponent from "./report.component";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";

export default function AnnualReportPage() {
  const report = useSelector((state) => state.resourceStore.report);
  return (
    <div className="annualReport">
      <h2>Annual Reports</h2>
      <div className="container">
        <div className="row">
          {report.map((rep) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="report-container" data-aos="fade-right">
                  <ReportComponent
                    title={rep.title}
                    image={`${server}/${rep.image}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
