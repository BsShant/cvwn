import React from 'react'
import CustomButton from '../Custom button/custom-button.component'
import './donation.form.styles.scss'

export default function DonationForm() {
  return (
    <div className='donationform'>
        <h4>Yes, I want to donate !</h4>
        <div className="donationSection">
        <div className="row inputRow">
            <div className="col-lg-3">
                <span className='title'>Name*</span>
            </div>
            <div className="col-lg-9">
                <input type="text" name='name' />
            </div>
        </div>
        <div className="row inputRow">
            <div className="col-lg-3">
                <span className='title'>Email*</span>
            </div>
            <div className="col-lg-9">
                <input type="email" name='email' />
            </div>
        </div>
        <div className="row inputRow">
            <div className="col-lg-3">
                <span className='title'>Phone*</span>
            </div>
            <div className="col-lg-9">
                <input type="text" name='number' />
            </div>
        </div>
        <div className="row inputRow">
            <div className="col-lg-3">
                <span className='title'>Address*</span>
            </div>
            <div className="col-lg-9">
                <input type="text" name='address' />
            </div>
        </div>
        <div className="row inputRow">
            <div className="col-lg-3">
                <span className='title'>Country*</span>
            </div>
            <div className="col-lg-9">
             <input type='text' name='country'/>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-3">
                <span className='title'>Date of Birth*</span>
            </div>
            <div className="col-lg-9">
            <input type="date" name="dob"/>
            </div>
        </div>

        </div>

        <div className='Checkbox'>
        <input type="checkbox"  name="selectedbox" />
       <label for="selectedbox"> I give my consent for authorized representatives of Smile Foundation
        to contact me occasionally by mobile and email for informing on the latest developments and updated offerings.
        </label>
        </div>
        <div>
            <CustomButton children={'Donate Now'}/>
        </div>

        {/*----------info div-------------*/}

        <div className='infoContainer'>
            <p>Please share your personal <span >Email ID, Mobile Number and Address </span>. so that we can send you the reciept certificate
                 & share updates on our programmes with you.<br></br>
               <span > To know more please sms SF to 56161</span><br></br>
               <span> (Registration No. - 6382)</span>
            </p>
        </div>

        {/*----------contact div-------------*/}

        <div className='contactContainer'>
            <p>For more information contact:<br></br>
                Email:<span> cvwnnepal@gmail.com </span><br></br>
                Phone: +01 16555, Mob: +977 9841485364
            </p>
        </div>
    </div>
  )
}
