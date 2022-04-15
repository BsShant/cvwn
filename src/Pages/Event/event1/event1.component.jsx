import React from 'react'
import Project1About from '../../Projects/Project1/project1.about'
import ProjectSection from '../../Projects/ProjectSection/project.section.components'

export default function Event1Component() {
  return (
    <div className='event1' id='event1'>
       <ProjectSection title={'Strengthening Access to Justice'}
       duration={'2 years (Oct 2021 to Sep 2023)'}
       about={<Project1About/>}/>
    </div>
  )
}
