import React, { useState } from "react";
import "./case.study.report.styles.scss";
import { useParams } from "react-router-dom";
import { articleData } from "../../../assets/dummyData/articleData";
import CaseStudyCard from "./CaseStudyCard";
import { useSelector } from "react-redux";

export default function Articlepage() {
  const id = useParams().id;
  const caseStudy= useSelector(state=> state.resourceStore.case)   

  return (
    <div className="caseStudyPage ">
      <div className="container">
        <h2 className="case-page-header">Case Studies</h2>

        <div className="row" style={{ width: "89%", margin: "auto" }}>
          {caseStudy.length > 0
            ? caseStudy.map((cas, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <CaseStudyCard
                      key={index}
                      id={cas.id}
                      caseimage={cas.image}
                      casetitle={cas.title}
                      casedescription={cas.detail}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
