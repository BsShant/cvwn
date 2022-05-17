import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './main-content.styles.scss';
import image1 from '../../assets/events/event1.jpg';
import image2 from '../../assets/events/event2.jpg';
import image3 from '../../assets/events/event3.jpg'
import EventCard from '../eventcardComponent/eventCard';


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
  <EventCard image={image2} title="Women in Leadership" date="1 April 2022" sponser="Tata"/>
  <EventCard image={image3} title="१० वर्षपछि लाश मिल्यो तर अझै न्याय मिलेन सार्वजनिकीकरण" date="1 April 2022" sponser="Tata"/>
  <EventCard image={image1} title="Strengthening Women Voice" date="1 May 2022" sponser="Login"/>
 
   
</OwlCarousel>
        
            </div>
        </div> 
        
  )
}
