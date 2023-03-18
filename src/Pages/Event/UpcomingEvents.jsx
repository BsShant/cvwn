import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { useSelector } from "react-redux";
import EventCard from "../../Components/eventcardComponent/eventCard";
import { server } from "../../utils/fetch";
import { DatePicker } from "antd";
import "./upcoming.scss";
const UpcomingEvents = (props) => {
  const { RangePicker } = DatePicker;

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

  function onDateChange(s) {
    const newup = event.filter(
      (nup) =>
        new Date(nup.date).toDateString() == new Date(s).toDateString() &&
        nup.status == status
    );
    setUpcomingEvent([...newup]);
  }
  {
    /* <div className="col-md-6">
          <div className="data-heading">Select Start And End Date</div>
          <RangePicker onChange={(s, e) => onDateChange(s, e)} />
        </div> */
  }
  return (
    <>
      <div className="upcoming-slider">
        <div className="container" style={{ padding: "0" }}>
          <div className="row up-top">
            <div className="col-md-6">
              <h2>{heading}</h2>
            </div>
            <div className="col-md-2" style={{marginLeft:"auto"}}>
              <div className="date-sorter">
                <div className="date-sort-heading">Select Date</div>
                <DatePicker onChange={(s) => onDateChange(s)} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {upcoming.length > 0 ? (
            <ReactOwlCarousel
              className="owl-theme"
              loop
              responsiveClass={true}
              nav={false}
              responsive={{
                0: {
                  items: 1,
                  margin: 30,
                },
                400: {
                  items: 1,
                  margin: 30,
                },
                600: {
                  items: 1,
                  margin: 30,
                },
                768: {
                  items: 2,
                  margin: 30,
                },
                1000: {
                  items: 3,
                  margin: 30,
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
          ) : (
            <div className="upcoming-no-data">No Data</div>
          )}
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
