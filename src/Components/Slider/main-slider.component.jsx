import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import './main-slider.styles.scss'


const MainSlider = () => {
    return (<div className='myCarousel' >
        <Carousel interval={3000} loop={true} fade>
        <Carousel.Item  >
    <img
      className="d-block  w-100  slide "
      src="https://www.voicesofwomenmedia.org/wp-content/uploads/2014/05/frontbanner8_vow.jpg"  
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
  <Carousel.Item >
    <img
      className="d-block w-100 "
      src="https://www.voicesofwomenmedia.org/wp-content/uploads/2014/05/frontbanner1_vow.jpg"
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
  
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={image1}
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
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://www.voicesofwomenmedia.org/wp-content/uploads/2014/05/frontbanner4_vow.jpg"
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
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={image3}
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