import React from 'react'
import './announcement.styles.scss'
import anImg1 from '../../../assets/GetInvolved/announcement1.png'
import anImg2 from '../../../assets/GetInvolved/announcement2.png'

export default function AnnouncementPage() {
  return (
    <div className='announcementSection'>
        <h2>OUR ANNOUNCEMENTS</h2>
        <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className="imgSection">
               <img src={anImg1} alt='announcement banner'/>
               </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="imgSection">
               <img src={anImg2} alt='announcement banner'/>
               </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="imgSection">
               <img src={anImg1} alt='announcement banner'/>
               </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="imgSection">
               <img src={anImg2} alt='announcement banner'/>
               </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="imgSection">
               <img src={anImg1} alt='announcement banner'/>
               </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className="imgSection">
               <img src={anImg2} alt='announcement banner'/>
               </div>
            </div>
        </div>
    </div>
  )
}
