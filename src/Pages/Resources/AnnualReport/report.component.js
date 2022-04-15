import React from 'react'
import './annualreport.styles.scss'

export default function ReportComponent({report_type, year, image}) {
  return (
    <div className='reportSection'>
    <div className='projectTitle'>
    <h5> {report_type} {year}</h5>
    </div>
     
     
       
       <div className='reportImage'>
           <img src={image} alt='report image'/>
       </div>
       <div className='report-txt'><a href="#"> <h5> {report_type} {year}</h5></a></div>
       
   </div>
  )
}
