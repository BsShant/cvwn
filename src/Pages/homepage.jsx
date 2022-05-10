import React from 'react'
import Fixedbanner from '../Components/FixedBanner/fixed-banner.component'
import EventSection from'../Components/Main content/events.component'
import MainContent from '../Components/Main content/main-content.coponent'
import EventCarousel from '../Components/Owl/owlcarousel.component'
import MainSlider from '../Components/Slider/main-slider.component'
import './homepage.styles.scss'

export default function HomePage() {
  return (
      <div className='home'>
   
    <MainSlider/>
    <MainContent/>
    <Fixedbanner/>
    <EventCarousel/>
    
    </div>
  )
}
