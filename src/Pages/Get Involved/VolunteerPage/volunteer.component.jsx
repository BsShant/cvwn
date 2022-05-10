import React from 'react'
import CustomButton from '../../../Components/Custom button/custom-button.component'
import './volunteer.styles.scss'
import VolunteerComponent from './volunteerComponent'


export default function VolunteerPage() {
  return (
    <div className='volunteerSection'>
        <h2>Volunteers</h2>
        <div className="row">
            {/* <div className="col-lg-8 col-md-8 col-sm-7"> */}
            <div className="col-lg-12 col-md-12 col-sm-12">
                <p>
                    <span>CVWN</span> believes that unless members of the civil society are involved proactively in the process
                     of development, sustainable change will not happen. We encourage and invite individuals for <strong>volunteer opportunities</strong> 
                     and <strong>volunteer registration</strong>, to be an active part of our organization and share the same vision and purpose as us
                      – to work for the welfare of children and their families. Volunteers are the backbone of every organization
                       – they not only carry the organization’s ideals within them, but also spread the message far and beyond,
                     sensitizing the society towards the cause. <strong>Volunteer for NGO</strong>, volunteer to serve, spread some smiles!
                </p>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 custBtn">
                <CustomButton children={'Click here for Indivudual Registration '} />
            </div>
        </div>

        {/*     2nd row     */}

        <div className="row volunteerContainer">
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
