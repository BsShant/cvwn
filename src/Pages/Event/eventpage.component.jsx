import React from 'react'
import EventSection from './event.component'
import './eventpage.styles.scss'
import image from '../../assets/events/event1.jpg'
import image2 from '../../assets/events/event2.jpg'
import image3 from '../../assets/events/event3.jpg'


export default function Eventpage() {
  return (
    <div className='eventPage '>
        
        <h2>Our Events</h2>

        <div className='row'>
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
          <EventSection eventimage={image3}
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