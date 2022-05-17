import React from 'react'
import './header.styles.scss'
import NavBar from './Navbar/navBar.component'
import Logo from'../../assets/Logo.png'
import MenuToggle from './Toggle Header/menu2.components'


export default function MenuBar() {
  return (
      
    <div className='container-fluid menu-bar'>
        
        <div className='container-fluid menu-container'>
        <div className="row menu-row">
            <div className="col-lg-3 col-md-2 col-xl-3  logo-section" style={{display:"flex",justifyContent:"center"}}>
                
                <img src={Logo} className='img-fluid'/>
             
                
            </div>
            <div className="col-lg-9 col-md-10  col-xl-9  info" style={{marginLeft:"-4%"}}>
                <div className='row top-section'>
                    <div className='col-lg-4 col-md-4 col-xl-4  mail ' ><i className='fas fa-envelope'></i><span className='mailT'>cvwnnepal@gmail.com</span></div>
                    <div className='col-lg-4 col-md-5 col-xl-3 contact' style={{background:"transparent"}}><i className='fas fa-phone'></i><span className='mailTt'>+977 9841485364</span></div>
                    <div className='social col-lg-4 col-md-2 col-xl-3  '>
                        <a href='https://www.facebook.com/cvwnn'><i className='fab fa-facebook-f'></i></a> 
                        <a href='https://www.instagram.com/cvwnnepal/'><i className='fab fa-instagram'></i></a> 
                        <a href='https://twitter.com/Cvwnnepal'> <i className='fab fa-twitter'></i></a> 
                        
                    </div>
                </div>
                <div className='row below-section'>
                    <NavBar/>
                    <MenuToggle/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
