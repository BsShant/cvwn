import React from 'react'
import './contactpage.styles.scss'
import SimpleMap from '../../Components/mapComponent/MapComponent'
import ContactForm from '../../Components/ContactForm/contactform.component'

export default function Contactpage() {
  return (
    <div className='aboutPage'>
       <SimpleMap/>
        <div className='my-5'>
        <ContactForm/>
        </div>
        
       
    </div>
  )
}