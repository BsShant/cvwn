import React from 'react'
import './annualreport.styles.scss'

import image1 from '../../../assets/case-1.png'
import image2 from '../../../assets/case-2.png'
import image3 from '../../../assets/case-3.png'
import image4 from '../../../assets/case-4.png'
import image5 from '../../../assets/case-5.jpg'
import image6 from '../../../assets/case-6.png'

import ReportComponent from './report.component'

export default function AnnualReportPage() {
  return (
    <div className='annualReport'>
        <h2>Annual Reports</h2>
<div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='report-container'  data-aos="fade-right">
            <ReportComponent report_type={'Annual Report'} year={2021} image={image1}/>
            </div>
                
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Annual Report'} year={2020} image={image2}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Annual Report'} year={2019} image={image3}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Annual Report'} year={2018} image={image4}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Annual Report'} year={2017} image={image5}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Annual Report'} year={2016} image={image6}/>
            </div>
        </div>
        </div>
    </div>
  )
}
