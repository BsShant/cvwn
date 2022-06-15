import React from 'react'
import './styles.css'
const StatsCard = (props) => {
    const {icon, title, body, color, background} = props
  return (
    <div className='stats-card' style={{background: background, borderRight:`${props.noBorder? "none" : '1px solid #00000026'}`}}>
        <div className="stats-card-icon">
            {icon}
            <div className="stats-card-body" style={{color:color}}>
                {body}
            </div>
        </div>
        <div className="stats-card-text">
            <div className="stats-card-header" style={{color:color}}>
                {title}
            </div>
        </div>
    </div>
  )
}

export default StatsCard