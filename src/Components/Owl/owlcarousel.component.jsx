import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import './owlcarousel.styles.scss';
import image1 from '../../assets/events/event1.jpg';
import image2 from '../../assets/events/event2.jpg';
import image3 from '../../assets/events/event3.jpg'
import { useParams } from 'react-router-dom'
import EventCard from '../eventcardComponent/eventCard';
import { eventData } from '../../assets/dummyData/eventsData';
// import { eventData } from '../../assets/dummyData/eventsData';


export default function EventCarousel() {
    const id = useParams().id
    const [myEvent, setMyEvent] = useState(eventData)
  return (
    <div className='eventCarousel container-fluid'>
        <h2>Events</h2>
        <div className='container'>
        <OwlCarousel className='owl-theme' loop   responsiveClass={true} nav={false}
         responsive= {{
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        }}
        >
   {myEvent.length > 0 ? myEvent.filter(event => event.status === 'upcoming').map((event, index) => {
                        return (
                            <EventCard key={index} id={event.id} image={event.image} title={event.title} date={event.date} sponsor={event.sponsor} />
                        )
                    }) : null
                    }
   
</OwlCarousel>
</div>
    </div>
  )
}
