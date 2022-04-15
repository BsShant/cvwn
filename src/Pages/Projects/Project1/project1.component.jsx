import React from 'react'
import ProjectSection from '../ProjectSection/project.section.components'

import Project1About from './project1.about'
import './project1.styles.scss'

function StrengtheningProject() {
  return (
    <div className='strengtheningProject'>
        <div className='projectImgSection'>
        <img src='https://th.bing.com/th/id/R.e3555ac4556032cef2b449d76cd607a6?rik=TngwczP4W5CXRQ&riu=http%3a%2f%2fwww.sbs.com.au%2fyourlanguage%2fsites%2fsbs.com.au.yourlanguage%2ffiles%2fpodcasts%2fsite_197_Nepalese_574854.JPG&ehk=f%2fJxxQ6ZaFRvmM6M4eMvUxlr7G%2bjJSXYwOuXwU5z8c4%3d&risl=1&pid=ImgRaw&r=0'/>
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