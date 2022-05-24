import React from 'react'
import './article.style.scss'
// import CustomButton from '../../Components/Custom button/custom-button.component'
import { Link } from 'react-router-dom'

export default function ArticleSection(props) {
  const { articledescription,articleimage,articletitle,id } = props
  return (
      <div className='eventSection '>
        <div className="imgSection">
            <img src={articleimage} alt='article picture'/>
        </div>
        <div className='detail'>
            <h5>{articletitle}</h5>
            <p className='article-descript'>{articledescription}</p>
            <div className='eventBtn'>
                <Link className='myButton' to={`/resources/article/article-description/${id}`}>Read More</Link>
            </div>
            
        </div>
    </div>
  )
}
