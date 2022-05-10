import React from 'react'
import CustomButton from '../Custom button/custom-button.component';
import './contactform.styles.scss';
import waveHi from '../../assets/wave-hi.gif'

function ContactForm() {
    return (
        <div className=' contactFormSection'>
            <div className="container">
<div className=' row contact'style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
    <div className='col-md-6 col-sm-0' style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
    <h1 style={{color:"#f1592f",marginRight:"20px"}}>SAY HELLO!</h1>

    <img src={waveHi} style={{height:"100px", width:"100px"}}></img>
    </div>
    </div>
    {/* <div className='col-md-4 col-sm-0' style={{marginTop:"1%", justifyContent:"center"}}>

    </div> */}
    

    <div className='col-md-6 col-sm-0'>
               
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
                <div className='button'>
                    <CustomButton children="Send Message" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ContactForm;