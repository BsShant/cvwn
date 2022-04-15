import React from 'react'
import './eventpage.styles.scss'

import CustomButton from '../../Components/Custom button/custom-button.component'
import { Link } from 'react-router-dom'

export default function EventSection({eventimage, eventtitle, eventdetail}) {
  return (
    <div className='eventSection '>
        <div className="imgSection">
            <img src={eventimage} alt='event picture'/>
        </div>
        <div className='detail'>
            <h5>{eventtitle}</h5>
            <p>{eventdetail}</p>
            <div className='eventBtn'>
                <Link className='myButton' to="/events/event-page">Read More</Link>
            </div>
            
        </div>
    </div>
  )
}
