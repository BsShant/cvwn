import React from 'react'
import './main-content.styles.scss'
import Project1 from '../../assets/project-1.JPG'
import Project4 from '../../assets/project-4.jpg'
import Project3 from '../../assets/project-3.jpg'
import Project2 from '../../assets/project-2.JPG'
import { Link } from 'react-router-dom'


export default function MainContent() {
  return (
    <div className='continer-fluid '>
        <div className='container-fluid mainContent'>
        <div className="row">
        <div className="col-lg-12 col-md-12">

            <h2>OUR PROJECTS</h2>
            <div className='container'>
            <div className='row'>
               {/* <div className='col-lg-3 col-md-6 col-sm-6 project ml-2'>
                   <div className='project-container'  data-aos="fade-right">
                   <a  href='#'>  <img src={Project1}  alt='project image' className='img-fluid'/> </a>
                   <div className='project-txt'><a href='#'> MT&J Educational Outreach Program</a></div>
                   </div>
                   
                   
               </div> */}
           
               <div className='col-lg-6 col-md-6 col-sm-6'>
               <Link to='/project/women-leadership-skill-development'>
               <div className='project-container'>
                   <a href='#'><img src={Project2} alt='project image' /></a> 
                   <div className='project-txt'><a href='#'> Women in Leadership Skills And Development</a></div>
                </div>
               </Link>
               </div>

               <div className='col-lg-6 col-md-6 col-sm-6'>
             
                   <Link to='/project/strengthening-access-to-justice'>
               <div className='project-container'>
                  <a href='#'> <img src={Project3} alt='project image' height='250px' /></a>
                   <div className='project-txt'><a href='#'> Strengthening Access to Justice</a></div>
                </div>
                </Link>
               </div>
               {/* <div className='col-lg-3 col-md-6 col-sm-6'>
               <div className='project-container' >
               <a href='#'>  <img src={Project4} alt='project image'/></a>
                  
                   <div className='project-txt'><a href='#'>  Women  in Technology</a></div>
               </div>
               </div> */}
            </div>
            </div>
            
        </div>
        
        </div>
        
          
            
           
        </div>
    </div>
    
  )
}
