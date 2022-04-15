import React from 'react'
import Project2About from '../../Projects/Project2/project2.about'
import ProjectSection from '../../Projects/ProjectSection/project.section.components'

export default function Event2Component() {
  return (
    <div className='event1'>
    <ProjectSection title={'Strengthening Access to Justice'}
    duration={'2 years (Oct 2021 to Sep 2023)'}
    about={<Project2About/>}/>
 </div>
  )
}
