import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./articleDescription.css";
import LoginModal from "../../../Components/Login/LoginModal";
import { server } from "../../../utils/fetch";
import draftToHtml from "draftjs-to-html";
import { useSelector } from "react-redux";
export default function ArticleDescription() {
  // const [showJoin, setShowJoin] = useState(false);
  const id = useParams().id;
  const myArticle = useSelector((state) => state.resourceStore.article).find(
    (art) => art.id == id
  );
  return (
    <div className="article-container">
      {/* <LoginModal /> */}
      <div className="container">
        <div className="article-description-inner">
          <img
            src={myArticle ? `${server}/${myArticle.image}` : ""}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <div className="article-desc-heading">
            {myArticle ? myArticle.title : ""}
          </div>
          <div
            className="article-desc-detail"
            dangerouslySetInnerHTML={{
              __html: `${
                myArticle && myArticle.detail
                  ? draftToHtml(JSON.parse(myArticle.detail))
                  : null
              }`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
