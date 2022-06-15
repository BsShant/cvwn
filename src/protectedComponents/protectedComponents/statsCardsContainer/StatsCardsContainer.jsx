import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import StatsCard from '../statCards/StatsCard'
import './styles.css'
const colors = [
    {
        background: "transparent",
        color: "#00000082"
    },
    {
        background: "transparent",
        color: "#00000082"
    },
    {
        background: "transparent",
        color: "#00000082"
    },
    {
        background: "transparent",
        color: "#00000082"
    }
]
const StatsCardsContainer = () => {
    return (
        <div className='stats-cards-container'>
            <div className="row stats-row" style={{ display: "flex"}}>
                <div className="stats-side-margin">
                    <StatsCard color={colors[0].color} background={colors[0].background} icon={<FontAwesomeIcon icon={faCog} />} title="7" body="Services" />
                </div>
                <div className="stats-side-margin">
                    <StatsCard color={colors[1].color} background={colors[1].background} icon={<FontAwesomeIcon icon={faCog} />} title="6" body="Products" />
                </div>
                <div className="stats-side-margin">
                    <StatsCard color={colors[2].color} background={colors[2].background} icon={<FontAwesomeIcon icon={faCog} />} title="7" body="Fund Raisers" />
                </div>
                <div className="stats-side-margin">
                    <StatsCard noBorder color={colors[3].color} background={colors[3].background} icon={<FontAwesomeIcon icon={faCog} />} title="10" body="Inquiry" />
                </div>

            </div>

        </div>
    )
}

export default StatsCardsContainer