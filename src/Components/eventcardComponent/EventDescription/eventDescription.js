import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './eventDescription.css'
import { eventData } from '../../../assets/dummyData/eventsData'
import { Modal } from 'react-bootstrap';
export default function EventDescription() {
    const [showJoin, setShowJoin] = useState(false);
    const id = useParams().id
    const [myEvent,setMyEvent] = useState(eventData.filter(event=>event.id==id)[0])
    console.log("my event", myEvent)
    return (
        <div className="eventpage-section"style={{minHeight:"100vh",background:`url(${myEvent? myEvent.image : ""})`, backgroundSize:"cover",alignContent:"center"}}>
            <div className='main-contents'>
                <div className='inner-main-contents'>
            <div className='title'>
                <h2>{myEvent.title}</h2>
              
            </div>
            <div className='container'>
            <div className='event-desc'>
                {myEvent.description}
            </div>

            <div className='row event-row'>
                <div className='col-4 col-lg-4 col-md-4 col-sm-4'>
                    {myEvent.date}
                </div>
                <div className='col-4 col-lg-4 col-md-4 col-sm-4'>
                    {myEvent.time}
                    </div>
                    <div className='col-4 col-lg-4 col-md-4 col-sm-4'>
                    {myEvent.location}
                    </div>
            </div>
          </div>

            <div className='JoinusButton'>
         <button onClick={() => setShowJoin(true)} className='joinButton'  type='submit'>Join Us</button>
         <Modal
                                show={showJoin}
                                onHide={() => setShowJoin(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <div className='eventjoin-panel' style={{width:"75%"}}>
                                   
                                <div className='join-us-form'>
                        {/* <h3 style={{ textAlign: "left", fontWeight: "bold" }}> Us</h3>
                        <hr style={{height:"3px",width:"20%",background:"#e83802",opacity:"1"}}></hr> */}
                        <h6 style={{ textAlign: "left" ,marginTop:"13px"}}>
I would like to join your <q><b>{myEvent.title}</b></q> event 
on <b>{myEvent.date}</b>.
 Please be kind to consider my request.<br/><br/>
My required information can be seen below:
                        </h6>

                        <form className='joinusForm'>

                            <div className='row inputSection'>
                                <diV className="col-md-12 col-sm-12">
                                    <input type='text' placeholder='Name' name='fName' style={{width:"100%"}} />
                                </diV>
                                <diV className="col-md-12 col-sm-12">
                                    <input type='email' placeholder='Email' name='email'  style={{width:"100%"}} />
                                </diV>
                                <diV className="col-md-12 col-sm-12">
                                    <input type='number' placeholder="Phone Number" name='phone'  style={{width:"100%"}} />
                                </diV>

                            </div>
                            <div className="row textAreazcont">
                                <div className="col-md-12">
                                    <textarea type='text' placeholder='My Motive to Join this Event' name='message'  style={{width:"100%"}}/>

                                </div>

                            </div>




                        </form>
                        <button className='joinButton'  type='submit' style={{width:"100%",marginBottom:"10px"}}>Request for Invitation</button>
                       </div>


                                    </div>
                            </Modal>



           </div>
           </div>
        </div>
        </div>
    )
}
