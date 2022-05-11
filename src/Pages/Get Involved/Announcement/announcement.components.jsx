import React from 'react'
import './announcement.styles.scss'
import anImg1 from '../../../assets/GetInvolved/announcement1.png'
import anImg2 from '../../../assets/GetInvolved/announcement2.png'
import Announcement from './announcement'

export default function AnnouncementPage() {
  return (
    <div className='announcementSection'>
      <div style={{width:"80%",margin:"auto",textAlign:"left"}}>
        <h2>OUR ANNOUNCEMENTS</h2>
        </div>
<div className='col announcementCol'>
  
   <div className='row-lg-12 row-md-12 col-sm-12 announcementRow'>
<Announcement/>
   </div>
   <div className='row-lg-12 row-md-12 col-sm-12 announcementRow'>
      <Announcement/>
      </div>
      <div className='row-lg-12 row-md-12 col-sm-12 announcementRow'>
      <Announcement/>
      </div>
</div>
    </div>
  )
}
