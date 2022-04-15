import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './owlcarousel.styles.scss'


export default function EventCarousel() {
  return (
    <div className='eventCarousel container-fluid'>
        <h2>Events</h2>
        <OwlCarousel className='owl-theme' loop margin={10}  responsiveClass={true} nav={false}
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
             src="https://www.voicesofwomenmedia.org/wp-content/uploads/2022/03/celebrating-95x100.jpg"
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
             src="https://www.voicesofwomenmedia.org/wp-content/uploads/2022/03/celebrating-95x100.jpg"
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
             src="https://www.voicesofwomenmedia.org/wp-content/uploads/2022/03/celebrating-95x100.jpg"
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
  )
}
