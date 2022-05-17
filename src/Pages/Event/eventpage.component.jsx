import React from 'react'
import EventSection from './event.component'
import './eventpage.styles.scss'
import OwlCarousel from 'react-owl-carousel';
import image1 from '../../assets/events/event1.jpg';
import image2 from '../../assets/events/event2.jpg';
import image3 from '../../assets/events/event3.jpg'



export default function Eventpage() {
  return (
    <div className='eventCarousel container-fluid'>
        <h2>Our Events</h2>
        <div className='container'>
        <OwlCarousel className='owl-theme' loop   responsiveClass={true} nav={false}
         responsive= {{
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        }}
        >
    <div class='item'>
        
        <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5 '>
          <div className='Carousel-img'>
             <img
              className="d-block w-100"
             src={image1}
            alt="First slide"
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
    </div>
    <div class='item'>
    <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
          <div className='Carousel-img'>
             <img
              className="d-block w-100"
             src={image2}
            alt="First slide"
            />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
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
    </div>
    <div class='item'>
    <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
          <div className='Carousel-img'>
             <img
              className="d-block w-100"
             src={image3}
            alt="First slide"
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
    </div>
   
</OwlCarousel>
</div>
<div className='container'>
<OwlCarousel className='owl-theme' loop   responsiveClass={true} nav={false}
         responsive= {{
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
    
            }
        }}
        >
    <div class='item'>
        
        <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5 '>
          <div className='Carousel-img'>
             <img
              className="d-block w-100"
             src={image3}
            alt="First slide"
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
    </div>
    <div class='item'>
    <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
          <div className='Carousel-img'>
             <img
              className="d-block w-100"
             src={image2}
            alt="First slide"
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
    </div>
    <div class='item'>
    <div className='row'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
          <div className='Carousel-img'>
             <img
              className="d-block w-100"
             src={image1}
            alt="First slide"
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
    </div>
   
</OwlCarousel>
</div>
    </div>
  )
}