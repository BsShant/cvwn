import React from "react";
import "./case.study.report.styles.scss";
import { Link } from "react-router-dom";
import draftToHtml from "draftjs-to-html";
import { server } from "../../../utils/fetch";
export default function CaseStudyCard(props) {
  const { casedescription, caseimage, casetitle, id } = props;
  return (
    <div className="case-card ">
      <div className="case-image">
        <img src={`${server}/${caseimage}`} alt="case picture" />
      </div>
      <div className="case-texts">
        <h5 className="case-header">{casetitle}</h5>
        <p className="case-detail">
          {casedescription &&
            draftToHtml(JSON.parse(casedescription)).replace(
              /(<([^>]+)>)/gi,
              ""
            )}
        </p>
        <Link
          className="main-btnn"
          to={`/resources/case-story/case-story-description/${id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
