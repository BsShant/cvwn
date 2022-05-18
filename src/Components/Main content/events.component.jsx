import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './main-content.styles.scss';
import image1 from '../../assets/events/event1.jpg';
import image2 from '../../assets/events/event2.jpg';
import image3 from '../../assets/events/event3.jpg'
import EventCard from '../eventcardComponent/eventCard';
import { eventData } from '../../assets/dummyData/eventsData';



export default function EventSectionFront() {
  return (
      <div className='container'>
    <div className=" Event-section ">
       
            <h2>EVENTS</h2>
            
            <OwlCarousel className='owl-theme' loop   responsiveClass={true} nav={false}
         responsive= {{
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        }}
        >
   <EventCard id={eventData[0].id} image={image1} title="Strengthening Women Voice" date="1 May 2022" sponsor="Login"/>
  <EventCard id={eventData[1].id} image={image2} title="Women in Leadership" date="1 April 2022" sponsor="Tata" />
  <EventCard id={eventData[2].id} image={image3} title="Shared Journeys Virtual Exhibition -2021" date="1 April 2022" sponsor="Tata" />
 
   
</OwlCarousel>
        
            </div>
        </div> 
        
  )
}
