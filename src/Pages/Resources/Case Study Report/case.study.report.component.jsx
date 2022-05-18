import React from 'react'
import ReportComponent from '../AnnualReport/report.component'
import './case.study.report.styles.scss'
import '../AnnualReport/annualreport.styles.scss'
import image1 from '../../../assets/report01.jpg'
import image2 from '../../../assets/report02.webp'
import image3 from '../../../assets/report03.png'
import image4 from '../../../assets/report04.jpg'
import image5 from '../../../assets/report05.jpg'
import image6 from '../../../assets/report06.jpg'

export default function CaseStudyReportPage() {
  return (
    <div className='annualReport'>
        <h2>Case Studies Reports</h2>

        <div className='row' style={{width:"89%",margin:"auto"}}>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='report-container'  data-aos="fade-right">
            <ReportComponent report_type={'Case Studies Report'} year={2021} image={image1}/>
            </div>
                
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2020} image={image2}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2019} image={image3}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2018} image={image4}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2017} image={image5}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2016} image={image6}/>
            </div>
        </div>
    </div>
  )
}
