import './fixed-banner.styles.scss'
import DonationForm from '../Donation Form/donation.form.component'

import React from 'react'
import { Link } from 'react-router-dom'

export default function Fixedbanner() {
  return (
    <div class="place-order fixedOverlay">
    <div class="container place-order-text">
      <div class="row text-center">
        <div class="col-lg-12 col-md-12 txt">
          <div className='myTxt'>
          <h2>No one has ever become poor by giving.</h2>
          <p>Giving to charity or the nonprofit organization is not a business transaction. It is a connection with the humans and the world. Many organizations are working to attract the donors to give. They have to work on different platforms and show the donors how their money is invested in a better way. The charitable donations help us to have an effective appeal.</p>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 mt-lg-0 mt-4">
          <Link class="main-btnn" to='./get-involved/donate' style={{textDecoration:'none'}}>Donate Now!  </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
