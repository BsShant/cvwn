import React from 'react'
import './main-content.styles.scss'
import event1 from '../../assets/event1.jpg'
import event4 from '../../assets/event4.jpg'

export default function MainContent() {
  return (
    <div className='continer-fluid '>
        <div className='container-fluid mainContent'>
        <div className="row">
        <div className="col-lg-12 col-md-12">
            <h2>OUR PROJECTS</h2>
            <div className='row'>
               <div className='col-lg-3 col-md-6 col-sm-6 project ml-2'>
                   <div className='project-container'  data-aos="fade-right">
                   <a  href='#'>  <img src={event1}  alt='project image' className='img-fluid'/> </a>
                   <div className='project-txt'><a href='#'> MT&J Educational Outreach Program</a></div>
                   </div>
                   
                   
               </div>
               <div className='col-lg-3 col-md-6 col-sm-6'>
               <div className='project-container'>
                   <a href='#'><img src='https://www.voicesofwomenmedia.org/wp-content/uploads/2020/04/junkiri-library-400x317.jpg' alt='project image' /></a> 
                   <div className='project-txt'><a href='#'> Junkiri : The Feminist Library</a></div>
                </div>
               </div>
               <div className='col-lg-3 col-md-6 col-sm-6'>
               <div className='project-container'>
                  <a href='#'> <img src='https://www.voicesofwomenmedia.org/wp-content/uploads/2020/04/sheisthestory_lastshot-825x510-400x247.jpg' alt='project image' height='250px' /></a>
                   <div className='project-txt'><a href='#'> She is the Story – II Edition</a></div>
                </div>
               </div>
               <div className='col-lg-3 col-md-6 col-sm-6'>
               <div className='project-container' >
               <a href='#'>  <img src={event4} alt='project image'/></a>
                  
                   <div className='project-txt'><a href='#'>  Women  in Technology</a></div>
               </div>
               </div>
            </div>
            
        </div>
        
        </div>
        
          
            
           
        </div>
    </div>
    
  )
}
