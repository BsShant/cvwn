import React from 'react'
import CustomButton from '../Custom button/custom-button.component'
import './footer.styles.scss'

export default function Footer() {
  return (
    <div className='container-fluid footer-section'>
        <div className='container footer-info'>
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <div className='row'>
                        <div className="col-4">
                            <p>STRENGTHENING VOICES</p>
                            
                            <img src='https://www.voicesofwomenmedia.org/wp-content/themes/voices/images/foot_logo1.png' className='img-fluid'/>
                            <img src='https://www.voicesofwomenmedia.org/wp-content/themes/voices/images/foot_logo2.png' className='img-fluid'/>
                           
                        </div>
                        <div className="col-4 touch">
                        <p>GET IN TOUCH</p>
                        
                            <span className='details'>Hanuman Dhoka, Kathmandu, Nepal<br/></span>
                            <span className='details'>+977 9841485364<br/></span>
                            <span className='details'>cvwnnepal@gmail.com</span>
                        
                        </div>
                        <div className="col-4">
                        <p>RESOURCES</p>
                       
                            <span className='details'>Annual Reports<br/></span>
                            <span className='details'>Privacy Policy</span>
                       
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 newsletter-section">
                    <div className='newsletter'>
                        <p>CONNECT WITH US</p>
                        <div className='social-icon'>
                        <a href='https://www.facebook.com/cvwnn'> <i className='fab fa-facebook-f facebook'/></a>
                        <a href='https://www.instagram.com/cvwnnepal/'> <i className='fab fa-instagram'/></a>
                        <a href='https://twitter.com/Cvwnnepal'> <i className='fab fa-twitter'/></a>
                        </div>
                        <span className='newsletter-txt'>
                        Stay Upto Date With VOW News, Programs And Appeals
                        </span>
                        <form>
                            <input type='email' placeholder='Your email address' name='email'/>
                           <CustomButton children="Subscribe"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
