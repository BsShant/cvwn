import React from 'react'
import CustomButton from '../../../Components/Custom button/custom-button.component'
import './volunteer.styles.scss'
import VolunteerComponent from './volunteerComponent'


export default function VolunteerPage() {
  return (
    <div className='volunteerSection'>
        <h2>Volunteers</h2>

            {/* <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 custBtn">
                <CustomButton children={'Click here for Indivudual Registration '} />
            </div>
        </div> */}

        {/*     2nd row     */}

        <div className="row volunteerContainer">
        <div className="row volunteerContainer" style={{paddingBottom:"3%"}}>
            {/* <div className="col-lg-8 col-md-8 col-sm-7"> */}
            <div className="col-lg-12 col-md-12 col-sm-12">
                <p>Volunteers are the backbone of every organization
                       – they not only carry the organization’s ideals within them, but also spread the message far and beyond,
                     sensitizing the society towards the cause. <strong>Volunteer for NGO</strong>, volunteer to serve, spread some smiles!
                </p>
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent/>
                </div>
             
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent/> 
            </div>
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
            <VolunteerComponent/>
            </div> */}
</div>
<div className="row volunteerContainer" style={{marginTop:"4%"}}>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent/>

            </div>
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
               
             <VolunteerComponent/>
            </div> */}
        </div>
    </div>
  )
}
