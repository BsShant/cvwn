import React from 'react'
import './header.styles.scss'
import NavBar from './Navbar/navBar.component'
import Logo from'../../assets/Logo.png'

export default function MenuBar() {
  return (
    <div className='container-fluid menu-bar'>
        <div className='container menu-container'>
        <div className="row menu-row">
            <div className="col-lg-4 col-md-2  logo-section">
                
                <img src={Logo} className='img-fluid'/>
             
                
            </div>
            <div className="col-lg-8 col-md-10  info">
                <div className='row top-section'>
                    <div className='col-lg-4 col-md-5  mail mx-1' ><i className='fas fa-envelope'></i><span className='mailT'>cvwnnepal@gmail.com</span></div>
                    <div className='col-lg-4 col-md-4 contact'><i className='fas fa-phone'></i>+977 9841485364</div>
                    <div className='social col-lg-3 col-md-3'>
                        <a href='https://www.facebook.com/cvwnn'><i className='fab fa-facebook-f'></i></a> 
                        <a href='https://www.instagram.com/cvwnnepal/'><i className='fab fa-instagram'></i></a> 
                        <a href='https://twitter.com/Cvwnnepal'> <i className='fab fa-twitter'></i></a> 
                        
                    </div>
                </div>
                <div className='row below-section'>
                    <NavBar/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
