import React from 'react'
import './main-content.styles.scss'


export default function MainContent() {
  return (
    <div className='continer-fluid '>
        <div className='container mainContent'>
        <div className="row">
        <div className="col-lg-12 col-md-12">
            <h2>OUR PROJECTS</h2>
            <div className='row'>
               <div className='col-lg-3 project ml-2'>
                   <div className='project-container'>
                   <a href='https://www.voicesofwomenmedia.org/project/mtj-educational-outreach-program/'>  <img src='https://www.voicesofwomenmedia.org/wp-content/uploads/2020/04/coveroutreach1-400x322.jpg' alt='project image' className='img-fluid'/> </a>
                   <div className='project-txt'><a href='https://www.voicesofwomenmedia.org/project/mtj-educational-outreach-program/'> MT&J Educational Outreach Program</a></div>
                   </div>
                   
                   
               </div>
               <div className='col-lg-3'>
               <div className='project-container'>
                   <a href='https://www.voicesofwomenmedia.org/project/junkiri-the-feminist-library/'><img src='https://www.voicesofwomenmedia.org/wp-content/uploads/2020/04/junkiri-library-400x317.jpg' alt='project image' /></a> 
                   <div className='project-txt'><a href='https://www.voicesofwomenmedia.org/project/junkiri-the-feminist-library/'> Junkiri : The Feminist Library</a></div>
                </div>
               </div>
               <div className='col-lg-3'>
               <div className='project-container'>
                   <img src='https://www.voicesofwomenmedia.org/wp-content/uploads/2020/04/sheisthestory_lastshot-825x510-400x247.jpg' alt='project image' height='250px' />
                   <div className='project-txt'><a href='https://www.voicesofwomenmedia.org/project/she-is-the-story-ii-edition/'> She is the Story – II Edition</a></div>
                </div>
               </div>
               <div className='col-lg-3'>
               <div className='project-container'>
                   <img src='https://www.voicesofwomenmedia.org/wp-content/uploads/2020/04/IMG_9667-400x291.jpg' alt='project image'/>
                  
                   <div className='project-txt'><a href='https://www.voicesofwomenmedia.org/project/she-is-the-story-ii-edition/'>  Techno Hub</a></div>
               </div>
               </div>
            </div>
            
        </div>
        
        </div>
        
          
            
           
        </div>
    </div>
    
  )
}
