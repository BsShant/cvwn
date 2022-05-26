import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
import 'antd/dist/antd.css'
import './eventDescription.css'
import { eventData } from '../../../assets/dummyData/eventsData'
import { Modal } from 'react-bootstrap';
export default function EventDescription() {
    const [showJoin, setShowJoin] = useState(false);
    const id = useParams().id
    const [myEvent, setMyEvent] = useState(eventData.filter(event => event.id == id)[0])
    console.log("my event", myEvent)
    return (
        <div className="eventpage-section" style={{ minHeight: "90vh", background: `url(${myEvent ? myEvent.image : ""})`, backgroundSize: "cover", alignContent: "center", display: "flex" }}>
            <div className='main-contents'>
                <div className='inner-main-contents'>
                    <div className='Heading'>
                        <h1><b>{myEvent.title}</b></h1>
                    </div>
                    <div className='container'>
                        <div className='event-desc'>
                            {myEvent.description}
                        </div>

                        <div className='row event-row'>
                            <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                                <i class="fa fa-calendar" style={{ marginRight: "10px" }} aria-hidden="true"></i>  {myEvent.date}
                            </div>
                            <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                                <i className='fas fa-clock' style={{ marginRight: "10px" }} />  {myEvent.time}
                            </div>
                            <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                                <i className='far fa-location' style={{ marginRight: "10px" }} />  {myEvent.location}
                            </div>
                            {/* <div className='col-4 col-lg-4 col-md-4 col-sm-4'></div> */}
                        </div>
                    </div>
                    {myEvent.status === 'upcoming' ?
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
                                        <Image src={myEvent.image}  width={100} />
                                    </div>

                                    <div className='join-us-form'>
                                        {/* <h3 style={{ textAlign: "left", fontWeight: "bold" }}> Us</h3> */}
                                        {/* <hr style={{ height: "3px", width: "20%", background: "#e83802", opacity: "1" }}></hr> */}
                                        <h6 style={{ textAlign: "center", marginTop: "10%", marginBottom: "10%" }}>
                                            I would like to join your <q><b>{myEvent.title}</b></q> event
                                            on <b>{myEvent.date}</b>.
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



                        </div> :
                        <div className='gallery'>
                            <div className='gallery-heading'>
                                <h3>Our Gallery </h3>
                            </div>
                            <div className='row gallery-row '>

                                <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                                    <Image src={myEvent.image} width={200} height={200} style={{ objectFit: "cover", borderRadius:"15px" }} />
                                </div>
                                <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                                    <Image src={myEvent.image} width={200} height={200} style={{ objectFit: "cover", borderRadius:"15px" }} />
                                </div>
                                <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                                    <Image src={myEvent.image} width={200} height={200} style={{ objectFit: "cover", borderRadius:"15px" }} />

                                </div>
                            </div>
                            <div className='row gallery-row ' style={{ marginBottom: "30px" }}>

                                <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                                    <Image src={myEvent.image} width={200} height={200} style={{ objectFit: "cover" ,borderRadius:"15px"}} />
                                </div>
                                <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                                    <Image src={myEvent.image} width={200} height={200} style={{ objectFit: "cover", borderRadius:"15px" }} />
                                </div>
                                <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                                    <Image src={myEvent.image} width={200} height={200} style={{ objectFit: "cover", borderRadius:"15px" }} />

                                </div>
                            </div>


                        </div>
                    }



                </div>
            </div>
        </div>
    )
}
