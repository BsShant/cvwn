import React, { useState } from "react";
import "./eventpage.styles.scss";
import { eventData } from "../../assets/dummyData/eventsData";
import { useSelector } from "react-redux";
import UpcomingEvents from "./UpcomingEvents";
import OngoingEvent from "./OngoingEvent";

export default function Eventpage() {
  const [showJoin, setShowJoin] = useState(false);
  return (
    <div className="eventCarousel container">
      <OngoingEvent showJoin={showJoin} setShowJoin={setShowJoin} />
      <UpcomingEvents heading="Completed Events" status="completed" />
      <UpcomingEvents heading="Upcoming Events" status="upcoming" />
    </div>
  );
}
