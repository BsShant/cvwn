import React from 'react'
import CustomButton from '../../../Components/Custom button/custom-button.component'
import './volunteer.styles.scss'
import VolunteerComponent from './volunteerComponent'
import Face1 from '../../../assets/rdj.webp'
import Face2 from '../../../assets/pepper.webp'
import Face3 from '../../../assets/Tobey.webp'
import Face4 from '../../../assets/wanda.jpg'
import Face5 from '../../../assets/chris.webp'
import Face6 from '../../../assets/benedict.webp'


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
            <VolunteerComponent image={Face1} name="Tony stark" role="Analyst"/>
                </div>
             
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent image={Face2} name="Pepper Pots" role="CEO"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent image={Face3} name="Tobey Maguire" role="Programmer"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 d-sm-block d-lg-none d-md-none">
            <VolunteerComponent image={Face4} name="Wanda Maximof" role="Graphic Designer"/>
            </div>
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
            <VolunteerComponent/>
            </div> */}
</div>
<div className="row volunteerContainer" style={{marginTop:"4%"}}>
            <div className="col-lg-4 col-md-4 col-sm-6 d-sm-none d-lg-block d-md-block">
            <VolunteerComponent image={Face4} name="Wanda Maximof" role="Graphic Designer"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent image={Face5} name="Chris Evans" role="Marketing Manager"/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <VolunteerComponent image={Face6} name="Benedict Cumberbatch" role="Sales Manager"/>

            </div>
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
               
             <VolunteerComponent/>
            </div> */}
        </div>
    </div>
  )
}
