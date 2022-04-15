import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/1.jpg';
import slider1 from '../../assets/slider4.jpg';
import slider2 from '../../assets/slider1.jpg';
import image3 from '../../assets/slider3.jpg';
import image4 from '../../assets/3.jpg';
import './main-slider.styles.scss'


const MainSlider = () => {
    return (<div className='myCarousel' >
        <Carousel interval={3000} loop={true} fade>
        <Carousel.Item className='sliderOverlay' >
    <img
      className="d-block  w-100  slide "
      src={slider1} 
      alt="First slide"
     height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">
                     <h2 className="animate__animated animate__fadeInDown">Storytelling is a medium<br/> for social change</h2>
                 </div>
              </div>
     </div>

    
    
  </Carousel.Item>
  <Carousel.Item className='sliderOverlay'>
    <img
      className="d-block w-100 "
      src={image1}
      alt="Second slide"
      height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">
                     <h2 className="animate__animated animate__fadeInUp">Storytelling is a medium<br/> for social change</h2>
                 </div>
              </div>
     </div>
    
  </Carousel.Item>
  
  <Carousel.Item className='sliderOverlay' >
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">
                <h2 className="animate__animated animate__fadeInDown">Who tells the story, <br/>matters</h2>
                 </div>
              </div>
     </div>
    
  </Carousel.Item>
  <Carousel.Item className='sliderOverlay'>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Fourth slide"
      height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">
                <h2 className="animate__animated animate__fadeInDown">We can use culture<br/> to change culture</h2>
                 </div>
              </div>
     </div>
    
  </Carousel.Item>
  <Carousel.Item className='sliderOverlay' >
    <img
      className="d-block w-100"
      src={image4}
      alt="Fifth slide"
      height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">
                     <h2 className="animate__animated animate__fadeInDown">Storytelling is a medium<br/> for social change</h2>
                 </div>
              </div>
     </div>
    
  </Carousel.Item>
</Carousel>
</div>
)
    }
    

export default MainSlider;