import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { useSelector } from "react-redux";
import EventCard from "../../Components/eventcardComponent/eventCard";
import { server } from "../../utils/fetch";

const UpcomingEvents = (props) => {
  const { status, heading } = props;
  const event = useSelector((state) => state.eventStore.event);
  const [upcoming, setUpcomingEvent] = useState(
    event.filter((ev) => {
      return ev.status == status;
    })
  );
  useEffect(() => {
    setUpcomingEvent(
      event.filter((ev) => {
        return ev.status == status;
      })
    );
  }, [event]);
  return (
    <>
      {upcoming.length > 0 ? (
        <div>
          <h2 style={{ marginTop: "30px" }}>{heading}</h2>
          <div className="">
            <ReactOwlCarousel
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
              {upcoming.length > 0 ? (
                upcoming.map((ev) => {
                  return (
                    <EventCard
                      key={ev.id}
                      id={ev.id}
                      image={`${server}/${ev.image}`}
                      title={ev.title}
                      date={new Date(ev.date).toDateString()}
                      sponsor={ev.sponsor}
                    />
                  );
                })
              ) : (
                <div>No Data</div>
              )}
            </ReactOwlCarousel>
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
};

export default UpcomingEvents;
