import React from 'react'
import ReportComponent from '../AnnualReport/report.component'
import './case.study.report.styles.scss'
import '../AnnualReport/annualreport.styles.scss'
import image1 from '../../../assets/Resources/case study report/case1.jpg'
import image2 from '../../../assets/Resources/case study report/case2.jpg'

export default function CaseStudyReportPage() {
  return (
    <div className='annualReport'>
        <h2>Case Studies Reports</h2>

        <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='report-container'  data-aos="fade-right">
            <ReportComponent report_type={'Case Studies Report'} year={2021} image={image1}/>
            </div>
                
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2020} image={image2}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2019} image={image1}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2018} image={image2}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2017} image={image1}/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
                <ReportComponent report_type={'Case Studies Report'} year={2016} image={image2}/>
            </div>
        </div>
    </div>
  )
}
