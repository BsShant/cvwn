import React from 'react'
import Project2About from '../../Projects/Project2/project2.about'
import ProjectSection from '../../Projects/ProjectSection/project.section.components'
import articleimg2 from '../../../assets/events/event2.jpg'

export default function Event2Component() {
  return (
    <div className='event1'>
      <div className='img-container' style={{display:"flex",justifyContent:"center",objectFit:"cover",width:"55%",margin:"auto"}}>
        <img src={articleimg2} style={{width:"100%",height:"100%"}}/>
      </div>
    <ProjectSection title={'Strengthening Access to Justice'}
    duration={'2 years (Oct 2021 to Sep 2023)'}
    about={<Project2About/>}/>
 </div>
  )
}
