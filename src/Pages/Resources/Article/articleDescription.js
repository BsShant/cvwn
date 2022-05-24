
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './articleDescription.css'
import { articleData } from '../../../assets/dummyData/articleData'
import LoginModal from '../../../Components/Login/LoginModal'

export default function ArticleDescription() {
  // const [showJoin, setShowJoin] = useState(false);
  const id = useParams().id
  const [myArticle, setMyArticle] = useState(articleData.filter(article => article.id == id)[0])
  return (
    <div className='article-description'>
      <LoginModal />
      <div className='article-image'>
        <img src={myArticle.articleimage} height="100%" width="100%" style={{objectFit:"cover"}} />
      </div>
      <h2 style={{ textAlign: "left" }}><div>{myArticle.articletitle}</div></h2>
      <div className='article-detail'>{myArticle.articledescription}</div>
    </div>


  )
}
