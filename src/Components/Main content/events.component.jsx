import React from 'react'
import { Carousel } from 'react-bootstrap';
import './main-content.styles.scss'


export default function EventSection() {
  return (
      <div className='container'>
    <div className=" Event-section ">
       
            <h2>EVENTS</h2>
            <div className='row event-row'>
            <div className='event1 col-lg-6 col-md-6 col-sm-6'>
                
                    <Carousel interval={null} arrow={false}>
  
             <Carousel.Item >
         <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
          <div className='Carousel-img'>
             <img
              className="d-block w-100"
             src="https://www.voicesofwomenmedia.org/wp-content/uploads/2022/03/celebrating-95x100.jpg"
            alt="Third slide"
            />
            </div>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-7'>
          <div className='Carousel-detail'>
          <div className='title'>
          <h5>Celebrating Women in Leadership</h5>
          </div>
          <div className='footer'>
          <span><i className='fas fa-globe px-2'/>VOW media</span>
          <span><i className='fas fa-calendar-week px-2'/>4 April 2022</span>
          </div>
          
          
      </div>
          </div>
      </div>
    
  </Carousel.Item>
  <Carousel.Item >
      <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
          <div className='Carousel-img'>
      <img
      className="d-block w-100"
      src="https://www.voicesofwomenmedia.org/wp-content/uploads/2021/10/Dhanusha5_ZoomPoster-95x100.jpg"
      alt="Third slide"
      />
      </div>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-7'>
          <div className='Carousel-detail'>
          <div className='title'>
          <h5>१० वर्षपछि लाश मिल्यो तर अझै न्याय मिलेन सार्वजनिकीकरण</h5>
          </div>
          <div className='footer'>
          <span><i className='fas fa-globe px-2'/>VOW media</span>
          <span><i className='fas fa-calendar-week px-2'/>4 April 2022</span>
          </div>
          
          
      </div>
          </div>
      </div>
      
      
    
    
  </Carousel.Item>
  <Carousel.Item >
  <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
          <div className='Carousel-img'>
      <img
      className="d-block w-100"
      src="https://www.voicesofwomenmedia.org/wp-content/uploads/2021/07/2D3CF4B3-346B-420A-9CE6-18238E5E983E-95x100.png"
      alt="Third slide"
      />
      </div>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-7'>
          <div className='Carousel-detail'>
          <div className='title'>
          <h5>Shared Journeys Virtual Exhibition -2021</h5>
          </div>
          <div className='footer'>
          <span><i className='fas fa-globe px-2'/>VOW media</span>
          <span><i className='fas fa-calendar-week px-2'/>4 April 2022</span>
          </div>
          
          
      </div>
          </div>
      </div>
    
  </Carousel.Item>
                    </Carousel>
              
               
            </div>
            
            <div className='event2 col-lg-6 col-md-6 col-sm-6'>
                <img src=''/>
            </div>
            </div> 
            </div>
        </div> 
        
  )
}
