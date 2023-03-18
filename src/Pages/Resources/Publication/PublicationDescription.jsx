import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { articleData } from "../../../assets/dummyData/articleData";
import LoginModal from "../../../Components/Login/LoginModal";
import draftToHtml from "draftjs-to-html";
import { server } from "../../../utils/fetch";
import { useSelector } from "react-redux";
import "./announcement.styles.scss";
export default function PublicationDescription() {
  const id = useParams().id;
  const publication = useSelector(
    (state) => state.landingStore.publication
  ).find((cse) => cse.id == id);
  return (
    <div className="case-container">
      {/* <LoginModal /> */}
      <div className="container">
        <div className="case-description-inner">
          <img
            src={publication ? `${server}/${publication.image}` : ""}
            height="100%"
            width="100%"
            style={{ objectFit: "contain" }}
          />
          <div className="case-desc-heading">
            {publication ? publication.title : ""}
          </div>
          <div
            className="case-desc-detail"
            dangerouslySetInnerHTML={{
              __html: `${
                publication && publication.detail
                  ? draftToHtml(JSON.parse(publication.detail))
                  : null
              }`,
            }}
          ></div>
          {/* <div className="case-desc-heading">
           Download File
          </div> */}
          {publication && publication.file ? (
            <a
              href={publication ? `${server}/${publication.file}` : ""}
              target="_blank"
              download
              className="publication-btnn"
            >
              Download File
            </a>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
}
