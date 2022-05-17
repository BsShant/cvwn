import React from 'react'
import CustomButton from '../Custom button/custom-button.component';
import './contactform.styles.scss';
import GoogleMapReact from 'google-map-react';
import waveHi from '../../assets/wave-hi.gif'

function ContactForm() {

    return (
        <div className=' contactFormSection'>
            <div className="container">
                <div className=' row contact' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
<div style={{display:"flex",color:"#orange",alignItems:"center",height:"5vh",marginBottom:"4%"}}>
            <h1 >SAY HELLO!</h1>
        
            <img src={waveHi} style={{height:"100px", width:"100px"}}></img>
            </div>
            </div> */}

                    {/* <div className='col-md-4 col-sm-0' style={{marginTop:"1%", justifyContent:"center"}}>

    </div> */}


                    <div className='col-md-6 col-sm-0'>
                        <h3 style={{ textAlign: "left", fontWeight: "bold" }}>Conatct Us</h3>
                        <hr style={{height:"3px",width:"20%",background:"#e83802",opacity:"1"}}></hr>
                        <h6 style={{ textAlign: "left" ,marginTop:"13px"}}>Please fill out the following enquiry</h6>

                        <form className='contactForm'>
                            <div className='row inputSection'>
                                <diV className="col-md-12 col-sm-12">
                                    <input type='text' placeholder='Name' name='fName' />

                                </diV>
                                <diV className="col-md-12 col-sm-12">
                                    <input type='email' placeholder='Email' name='email' />

                                </diV>
                                <diV className="col-md-12 col-sm-12">

                                    <input type='text' placeholder='Subject' name='subject' />
                                </diV>

                            </div>
                            <div className="row textAreazcont">
                                <div className="col-md-12">
                                    <textarea type='text' placeholder='Say Something' name='message' />

                                </div>

                            </div>




                        </form>
                        <div className='button' style={{ display: "flex", justifyContent: "left" }}>
                            <CustomButton children="Send Message" />
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-0'>
                        <div className='map-container'>
                            <div className='googleMap'>
                                <div className="map-bg"></div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.918522113257!2d85.3244171503422!3d27.68891303282491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194e18fd9b51%3A0xaedb262bd4e817e0!2sConflict%20Victims&#39;%20Women%20National%20Network(CVWN)!5e0!3m2!1sen!2snp!4v1652691047864!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28263.48129929145!2d85.31864798715819!3d27.68839876538011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1649661329824!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;