import React, { useState } from 'react'
import ArticleSection from './article.component'
import './article.style.scss'
import image1 from '../../../assets/event1.jpg'
import image2 from '../../../assets/event4.jpg'
import { useParams } from 'react-router-dom'
import GoogleAuth from '../../../Components/GoogleAuth/GoogleAuth'
import { articleData } from '../../../assets/dummyData/articleData'



export default function Articlepage() {
  const id = useParams().id
  const [myArticle, setMyArticle] = useState(articleData)
  return (
    <div className='eventPage '>

      <h2>Our Articles</h2>

      <div className='row' style={{ width: "89%", margin: "auto" }}>
        {
          myArticle.length > 0 ? myArticle.map((article, index) => {
            return <div className='col-lg-4 col-md-6 col-sm-6'>
              <ArticleSection key={index} id={article.id} articleimage={article.articleimage} articletitle={article.articletitle} articledescription={article.articledescription}
              />
            </div>

          }) : null
        }
      </div>


    </div>
  )
}