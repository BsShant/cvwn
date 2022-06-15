import React, { useState } from "react";
import ArticleSection from "./article.component";
import "./article.style.scss";
import image1 from "../../../assets/event1.jpg";
import image2 from "../../../assets/event4.jpg";
import { useParams } from "react-router-dom";
import GoogleAuth from "../../../Components/GoogleAuth/GoogleAuth";
import { articleData } from "../../../assets/dummyData/articleData";
import { useSelector } from "react-redux";

export default function Articlepage() {
  const id = useParams().id;
  const [myArticle, setMyArticle] = useState(articleData);
  const article= useSelector(state=> state.resourceStore.article)   
  return (
    <div className="articlePage ">
      <div className="container">
        <h2 className="article-page-header">Our Articles</h2>
        <div className="row">
          {article.length > 0
            ? article.map((art, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <ArticleSection
                      key={index}
                      id={art.id}
                      articleimage={art.image}
                      articletitle={art.title}
                      articledescription={art.detail}
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
