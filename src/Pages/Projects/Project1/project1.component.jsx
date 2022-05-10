import React from 'react'
import ProjectSection from '../ProjectSection/project.section.components'

import Project1About from './project1.about'
import './project1.styles.scss'
import Project2 from './project-3.jpg';


function StrengtheningProject() {
  return (
    <div className='strengtheningProject'>
        <div className='projectImgSection'>
        <img src={Project2}/>
        </div>
       
        <h6>OUR PROJECTS</h6>
       
       
       <ProjectSection title={'Strengthening Access to Justice'}
       duration={'2 years (Oct 2021 to Sep 2023)'}
       id={'#event1'}
       about={<Project1About/>}/>
    </div>
  )
}

export default StrengtheningProject