import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './owlcarousel.styles.scss';
import image1 from '../../assets/event4.jpg'
import image2 from '../../assets/event1.jpg'
import image3 from '../../assets/events/event1.jpg'
import EventCard from '../eventcardComponent/eventCard';


export default function EventCarousel() {
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
   <EventCard image={image1} title="Strengthening Women Voice" date="1 May 2022" sponser="Login"/>
  <EventCard image={image2} title="Women in Leadership" date="1 April 2022" sponser="Tata"/>
  <EventCard image={image3} title="Shared Journeys Virtual Exhibition -2021" date="1 April 2022" sponser="Tata"/>
   
</OwlCarousel>
</div>
    </div>
  )
}
