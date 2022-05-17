import React from 'react'
import EventSection from './event.component'
import './article.style.scss'
import image from '../../../assets/event1.jpg'
import image2 from '../../../assets/event4.jpg'



export default function Articlepage() {
  return (
    <div className='eventPage '>
        
        <h2>Our Articles</h2>

        <div className='row' style={{width:"89%",margin:"auto"}}>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <EventSection eventimage={image}
               eventtitle={'Strengthening Access to Justice'}
               eventdetail={'This project seeks to address the injustice and grievances experienced by conflict-affected women due to the impact of conflict. These injustices and grievances...'}
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6'>
          <EventSection eventimage={image2}
               eventtitle={'Leadership & Skill Development ...'}
               eventdetail={'This project seeks to address the injustice and grievances experienced by conflict-affected women due to the impact of conflict. These injustices and grievances...'}
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6'>
          <EventSection eventimage={image}
               eventtitle={'Strengthening Access to Justice'}
               eventdetail={'This project seeks to address the injustice and grievances experienced by conflict-affected women due to the impact of conflict. These injustices and grievances...'}
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6'>
          <EventSection eventimage={image2}
               eventtitle={'Leadership & Skill Development ...'}
               eventdetail={'This project seeks to address the injustice and grievances experienced by conflict-affected women due to the impact of conflict. These injustices and grievances...'}
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <EventSection eventimage={image}
               eventtitle={'Strengthening Access to Justice'}
               eventdetail={'This project seeks to address the injustice and grievances experienced by conflict-affected women due to the impact of conflict. These injustices and grievances...'}
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6'>
          <EventSection eventimage={image2}
               eventtitle={'Leadership & Skill Development ...'}
               eventdetail={'This project seeks to address the injustice and grievances experienced by conflict-affected women due to the impact of conflict. These injustices and grievances...'}
               //path={'/events/event1'}
            />
          </div>
        </div>
    </div>
  )
}