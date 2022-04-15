import React from 'react'
import ProjectSection from '../ProjectSection/project.section.components'
import '../Project1/project1.styles.scss'
import Project2About from './project2.about'

function LeadershipProject() {
  return (
    <div className='strengtheningProject'>
        <div className='projectImgSection'>
        <img src='https://nepal.ec-undp-electoralassistance.org/wp-content/uploads/sites/16/2017/05/ec-undp-jtf-nepal-news-stories-womens-leadership-conference-1.jpg'/>
        </div>
       <h6>OUR PROJECTS</h6>
       <ProjectSection title={'Leadership & Skill Development for the Conflict Victims’ Women of Tulsipur, Dang of Nepal'}
       duration={'6 Month (From 15 December 2021 to 14 June 2022)'}
       about={<Project2About/>}/>
    </div>
  )
}

export default LeadershipProject