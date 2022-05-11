import React from 'react'
import Project1About from '../../Projects/Project1/project1.about'
import ProjectSection from '../../Projects/ProjectSection/project.section.components'
import articleimg1 from '../../../assets/events/event2.jpg'

export default function Event1Component() {
  return (
    <div className='event1' id='event1'>
      <div className='img-container' style={{display:"flex",justifyContent:"center",objectFit:"cover",width:"55%",margin:"auto"}}>
        <img src={articleimg1} style={{width:"100%",height:"350px",objectFit:"cover"}}/>
      </div>
       <ProjectSection title={'Strengthening Access to Justice'}
       duration={'2 years (Oct 2021 to Sep 2023)'}
       about={<Project1About/>}/>
    </div>
  )
}
