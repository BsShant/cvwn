import React from 'react'
import DonationForm from '../../../Donation Form/donation.form.component'
import './donate.styles.scss'

export default function DonatePage() {
  return (
    <div className='donatePage'>
        <div className='row'>
            <div className='col-lg-6'></div>
            <div className='col-lg-6'>
                <DonationForm/>
            </div>
        </div>
    </div>
  )
}
