import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import EventSection from './event.component'
import './eventpage.styles.scss'

// import { eventData } from '../../../assets/dummyData/eventsData'
import OwlCarousel from 'react-owl-carousel';
import image1 from '../../assets/events/event1.jpg';
import image2 from '../../assets/events/event2.jpg';
import image3 from '../../assets/events/event3.jpg'
import EventCard from '../../Components/eventcardComponent/eventCard';

import { eventData } from '../../assets/dummyData/eventsData';

export default function Eventpage() {
    const id = useParams().id
    const [myEvent, setMyEvent] = useState(eventData)
    return (
        <div className='eventCarousel container-fluid'>
            <h2>Upcoming Events</h2>
            <div className='container'>
                <OwlCarousel className='owl-theme' loop responsiveClass={true} nav={false}
                    responsive={{
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
            <h2 style={{ marginTop: "30px" }}>Previous Events</h2>
            <div className='container'>
                <OwlCarousel className='owl-theme' loop responsiveClass={true} nav={false}
                    responsive={{
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
                    {myEvent.length > 0 ? myEvent.filter(event => event.status === 'completed').map((event, index) => {
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
