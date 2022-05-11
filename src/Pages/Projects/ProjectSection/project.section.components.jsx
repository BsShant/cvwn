import React from 'react'
import './project.section.styles.scss'

function ProjectSection({title, duration, about}) {
  return (
    <div className='projectSection'>
     <div className='projectTitle'>
     <h3> {title}</h3>
     </div>
      
      
        
        <h4>{duration}</h4>
        <p>{about}</p>
    </div>
  )
}

export default ProjectSection