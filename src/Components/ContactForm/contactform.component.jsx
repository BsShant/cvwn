import React from 'react'
import CustomButton from '../Custom button/custom-button.component';
import './contactform.styles.scss'

function ContactForm() {
    return (
        <div className=' contactFormSection'>
            <div className="container">


                <h2>SAY HELLO!</h2>
                <form className='contactForm'>
                    <div className='row inputSection'>
                        <diV className="col-md-4 col-sm-12">
                            <input type='text' placeholder='Name' name='fName' />

                        </diV>
                        <diV className="col-md-4 col-sm-12">
                            <input type='email' placeholder='Email' name='email' />

                        </diV>
                        <diV className="col-md-4 col-sm-12">

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
    )
}

export default ContactForm;