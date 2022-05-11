import React from 'react'
import ProjectSection from '../ProjectSection/project.section.components'
import '../Project1/project1.styles.scss'
import Project2About from './project2.about'
import Project2 from './project-22.JPG';


function LeadershipProject() {
  return (
    <div className='strengtheningProject'>
        <div className='projectImgSection'>
        <img src={Project2}/>
        </div>
       <h6>OUR PROJECTS</h6>
       <div className='image-container'>
       </div>
       <ProjectSection title={'Leadership & Skill Development'}
       duration={'6 Month (From 15 December 2021 to 14 June 2022)'}
       about={<Project2About/>}/>
    </div>
  )
}

export default LeadershipProject