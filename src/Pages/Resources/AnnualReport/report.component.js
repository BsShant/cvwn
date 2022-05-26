import React from 'react'
import './annualreport.styles.scss'
import { Image } from 'antd';
import 'antd/dist/antd.css'

export default function ReportComponent({report_type, year, image}) {
  return (
    <div className='reportSection'>
    <div className='projectTitle'>
    <h5> {report_type} {year}</h5>
    </div>
     
     
       
       <div className='reportImage' style={{objectFit:"cover"}}>
           <Image src={image} alt='report image' style={{objectFit:"cover",height:"100%",width:"100%"}}/>
       </div>
       <div className='report-txt'><a href="#"> <h5 style={{color:"white"}}> {report_type} {year}</h5></a></div>
       
   </div>
  )
}
