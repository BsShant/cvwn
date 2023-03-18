import React, { useState } from "react";
import "./case.study.report.styles.scss";
import { useParams } from "react-router-dom";
import { articleData } from "../../../assets/dummyData/articleData";
import CaseStudyCard from "./CaseStudyCard";
import { useSelector } from "react-redux";

export default function CaseStoryPage() {
  const id = useParams().id;
  const caseStory= useSelector(state=> state.resourceStore.caseStory)   

  return (
    <div className="caseStudyPage ">
      <div className="container">
        <h2 className="case-page-header">Case Stories</h2>

        <div className="row" style={{ width: "89%", margin: "auto" }}>
          {caseStory.length > 0
            ? caseStory.map((cas, index) => {
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
