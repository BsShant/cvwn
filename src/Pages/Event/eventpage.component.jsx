import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
import EventSection from './event.component'
import './eventpage.styles.scss'

// import { eventData } from '../../../assets/dummyData/eventsData'
import OwlCarousel from 'react-owl-carousel';
import image1 from '../../assets/events/event1.jpg';
import image2 from '../../assets/events/event2.jpg';
import image3 from '../../assets/events/event3.jpg'
import EventCard from '../../Components/eventcardComponent/eventCard';

import { eventData } from '../../assets/dummyData/eventsData';
import { Modal } from 'react-bootstrap';


export default function Eventpage() {
    const [showJoin, setShowJoin] = useState(false);
    const [myEvent, setMyEvent] = useState(eventData)
    console.log(showJoin)

    return (

        <div className='eventCarousel container-fluid'>


            {myEvent.length > 0 ? myEvent.filter(event => event.status === 'ongoing').map((event, index) => {
                return (
                    <div className='row ongoing-event-row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <Image src={event.image} style={{ objectFit: "cover", height: "360px", width: "100%" }} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12' style={{paddingLeft:"40px",display:"flex",flexDirection:"column",justifyContent:"center"}}>

                            <div className='ongoing' style={{ display: "flex", justifyContent: "flex-start", textAlign: "left", width: "100%" }}> <h4 style={{ color: "orangered", fontSize: "45px", fontWeight: "bold" }}>Ongoing Events</h4></div>
                            <div className='head' style={{ display: "flex", justifyContent: "flex-start", textAlign: "left" }}><h5 style={{ color: "orangered" }}>{event.title}</h5></div>
                            <div className='description' style={{ display: "flex", justifyContent: "flex-start", color: "black", textAlign: "left" }}>{event.description}</div>
                            <div className='row' style={{ marginTop: "5%" }}>
                                <div className='col-4'>
                                <i class="fa fa-calendar" style={{ marginRight: "10px" }} aria-hidden="true"></i> {event.date}
                                </div>
                                <div className='col-4'>
                                <i className='fas fa-clock' style={{ marginRight: "10px" }} />   {event.time}
                                </div>
                                <div className='col-4'>
                                <i className='far fa-location' style={{ marginRight: "10px" }} />  {event.location}
                                </div>
                            </div>

                            <div className='JoinusButton'>
                                <button onClick={() => setShowJoin(true)} className='joinButton' type='submit'>Join Us</button>
                                <Modal
                                    show={showJoin}
                                    onHide={() => setShowJoin(false)}
                                    dialogClassName="modal-90w"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                >
                                    <div className='eventjoin-panel' style={{ width: "75%" }}>
                                        <div className='eventimage'>
                                            <Image src={event.image} width={100} />
                                        </div>

                                        <div className='join-us-form'>
                                            {/* <h3 style={{ textAlign: "left", fontWeight: "bold" }}> Us</h3> */}
                                            {/* <hr style={{ height: "3px", width: "20%", background: "#e83802", opacity: "1" }}></hr> */}
                                            <h6 style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}>
                                                I would like to join your <q><b>{event.title}</b></q> event
                                                on <b>{event.date}</b>.
                                                <br /><br />
                                                Please be kind to consider my request.
                                            </h6>

                                            <form className='joinusForm'>

                                                <div className='row inputSection'>
                                                    <diV className="col-md-12 col-sm-12">
                                                        <input type='text' placeholder='Name' name='fName' style={{ width: "100%" }} />
                                                    </diV>
                                                    <diV className="col-md-12 col-sm-12">
                                                        <input type='email' placeholder='Email' name='email' style={{ width: "100%" }} />
                                                    </diV>
                                                    <diV className="col-md-12 col-sm-12">
                                                        <input type='number' placeholder="Phone Number" name='phone' style={{ width: "100%" }} />
                                                    </diV>

                                                </div>
                                                <div className="row textAreazcont">
                                                    <div className="col-md-12">
                                                        <textarea type='text' placeholder='My Motive to Join this Event' name='message' style={{ width: "100%" }} />
                                                    </div>
                                                </div>




                                            </form>
                                            <button className='joinButton' type='submit' style={{ width: "100%", marginBottom: "25%", marginTop: "10%" }}>Request for Invitation</button>
                                        </div>


                                    </div>
                                </Modal>



                            </div>

                        </div>

                    </div>
                )
            }) : null
            }



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
