import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./caseDesc.css";
import { articleData } from "../../../assets/dummyData/articleData";
import LoginModal from "../../../Components/Login/LoginModal";
import draftToHtml from "draftjs-to-html";
import { server } from "../../../utils/fetch";
import { useSelector } from "react-redux";

export default function CaseStoryDescription() {
  const id = useParams().id;
  const myCaseStudy = useSelector(
    (state) => state.resourceStore.caseStory
  ).find((cse) => cse.id == id);
  return (
    <div className="case-container">
      {/* <LoginModal /> */}
      <div className="container">
        <div className="case-description-inner">
          <img
            src={myCaseStudy ? `${server}/${myCaseStudy.image}` : ""}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <div className="case-desc-heading">
            {myCaseStudy ? myCaseStudy.title : ""}
          </div>
          <div
            className="case-desc-detail"
            dangerouslySetInnerHTML={{
              __html: `${
                myCaseStudy && myCaseStudy.detail
                  ? draftToHtml(JSON.parse(myCaseStudy.detail))
                  : null
              }`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
