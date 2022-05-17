import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './eventDescription.css'
import { eventData } from '../../../assets/dummyData/eventsData'
export default function EventDescription() {
    const id = useParams().id
    const [myEvent,setMyEvent] = useState(eventData.filter(event=>event.id==id)[0])
    console.log("my event", myEvent)
    return (
        <div style={{minHeight:"100vh",background:`url(${myEvent? myEvent.image : ""})`, backgroundSize:"cover"}}>
            {myEvent.title}
        </div>
    )
}
