import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "./owlcarousel.styles.scss";
import image1 from "../../assets/events/event1.jpg";
import image2 from "../../assets/events/event2.jpg";
import image3 from "../../assets/events/event3.jpg";
import { useParams } from "react-router-dom";
import EventCard from "../eventcardComponent/eventCard";
import { eventData } from "../../assets/dummyData/eventsData";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import LandingEventPartners from "../LandingEventPartners/LandingPartners";
// import { eventData } from '../../assets/dummyData/eventsData';

export default function EventCarousel() {
  const event = useSelector((state) => state.eventStore.event);
  const id = useParams().id;
  const [myEvent, setMyEvent] = useState(eventData);
  return (
    <div className="eventCarousel container">
      <h2 style={{ textAlign: "left", color: "#f45a2f" }}>Events</h2>
      {event.length > 0 ? (
        <OwlCarousel
          className="owl-theme"
          loop
          responsiveClass={true}
          nav={false}
          responsive={{
            0: {
              items: 1,
            },
            400: {
              items: 1,
            },
            600: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          }}
        >
          {event.length > 0
            ? event
                .filter((myEvent) => myEvent.status === "completed")
                .map((event, index) => {
                  return (
                    <EventCard
                      key={index}
                      id={event.id}
                      image={`${server}/${event.image}`}
                      title={event.title}
                      date={new Date(event.date).toDateString()}
                      sponsor={event.sponsor}
                    />
                  );
                })
            : null}
        </OwlCarousel>
      ) : null}
      <LandingEventPartners />
    </div>
  );
}
