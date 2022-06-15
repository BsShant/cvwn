import React from "react";
import "./article.style.scss";
// import CustomButton from '../../Components/Custom button/custom-button.component'
import { Link } from "react-router-dom";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { server } from "../../../utils/fetch";
export default function ArticleSection(props) {
  const { articledescription, articleimage, articletitle, id } = props;
  return (
    <div className="article-card ">
      <div className="article-image">
        <img src={`${server}/${articleimage}`} alt="article picture" />
      </div>
      <div className="article-texts">
        <h5 className="article-header">{articletitle}</h5>
        <p className="article-detail">
          {articledescription &&
            draftToHtml(JSON.parse(articledescription)).replace(
              /(<([^>]+)>)/gi,
              ""
            )}
        </p>
        <Link
          className="main-btnn"
          to={`/resources/article/article-description/${id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
