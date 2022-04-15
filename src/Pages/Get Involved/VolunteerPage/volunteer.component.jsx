import React from 'react'
import CustomButton from '../../../Components/Custom button/custom-button.component'
import './volunteer.styles.scss'

export default function VolunteerPage() {
  return (
    <div className='volunteerSection'>
        <h2>Volunteers</h2>
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-7">
                <p>
                    <span>CVWN</span> believes that unless members of the civil society are involved proactively in the process
                     of development, sustainable change will not happen. We encourage and invite individuals for <strong>volunteer opportunities</strong> 
                     and <strong>volunteer registration</strong>, to be an active part of our organization and share the same vision and purpose as us
                      – to work for the welfare of children and their families. Volunteers are the backbone of every organization
                       – they not only carry the organization’s ideals within them, but also spread the message far and beyond,
                     sensitizing the society towards the cause. <strong>Volunteer for NGO</strong>, volunteer to serve, spread some smiles!
                </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-5 custBtn">
                <CustomButton children={'Click here for Indivudual Registration '} />
            </div>
        </div>

        {/*     2nd row     */}

        <div className="row volunteerContainer">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://th.bing.com/th/id/R.34b0e5bc273b02353b4d5367f65eb570?rik=uvlxac2N95tPAQ&pid=ImgRaw&r=0'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Intern</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://www.cheatsheet.com/wp-content/uploads/2019/07/Tom-Holland-4-1024x936.jpg?x53037'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Intern</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://th.bing.com/th/id/OIP.WxRM2zJBtpopOf7S-Z7ULgHaIy?pid=ImgDet&rs=1'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Intern</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://english.onlinekhabar.com/wp-content/uploads/2020/10/Rajesh-Hamal--768x502.jpg'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Individual Partnership</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://th.bing.com/th/id/R.34b0e5bc273b02353b4d5367f65eb570?rik=uvlxac2N95tPAQ&pid=ImgRaw&r=0'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Intern</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://www.cheatsheet.com/wp-content/uploads/2019/07/Tom-Holland-4-1024x936.jpg?x53037'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Intern</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://th.bing.com/th/id/OIP.WxRM2zJBtpopOf7S-Z7ULgHaIy?pid=ImgDet&rs=1'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Intern</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="volunteers">
                    <div className="imgSection">
                        <img src='https://english.onlinekhabar.com/wp-content/uploads/2020/10/Rajesh-Hamal--768x502.jpg'/>
                    </div>
                    <div className="detailSection">
                        <h5>Cristiano Ronaldo</h5>
                        <p>Individual Partnership</p>
                        <h6>CVWN</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
