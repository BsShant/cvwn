import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import EventMods from "./EventMods";

const OngoingEvent = (props) => {
  const { ev, showJoin, setShowJoin } = props;
  const event = useSelector((state) => state.eventStore.event);
  const [ongoingEvent, setOngoingEvent] = useState(null);
  useEffect(() => {
    setOngoingEvent(event.find((ev) => ev.status == "ongoing"));
  }, [event]);
  return (
    <>
      {ongoingEvent ? (
        <div className="row ongoing-event-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12" style={{padding:"0"}}>
            <Image
              src={`${server}/${ongoingEvent ? ongoingEvent.image : ""}`}
              style={{
                objectFit: "cover",
                height: "360px",
                width: "100%",
              }}
            />
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 ongoing-text"
           
          >
            <div
              className="ongoing"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left",
                width: "100%",
              }}
            >
              {" "}
              <h4
                style={{
                  color: "#f45a2f",
                  fontSize: "45px",
                  fontWeight: "bold",
                }}
              >
                Ongoing Events
              </h4>
            </div>
            <div
              className="head"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left",
              }}
            >
              <h5 style={{ color: "#f45a2f" }}>
                {ongoingEvent ? ongoingEvent.title : ""}
              </h5>
            </div>
            <div
              className="description"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "black",
                textAlign: "left",
              }}
            >
              {ongoingEvent ? ongoingEvent.detail : ""}
            </div>
            <div className="row" style={{ marginTop: "5%" }}>
              <div className="col-4">
                <i
                  class="fa fa-calendar"
                  style={{ marginRight: "10px" }}
                  aria-hidden="true"
                ></i>{" "}
                {ongoingEvent ? new Date(ongoingEvent.date).toDateString() : ""}
              </div>
              <div className="col-4">
                <i className="fas fa-clock" style={{ marginRight: "10px" }} />{" "}
                {ongoingEvent ? ongoingEvent.time : ""}
              </div>
              <div className="col-4">
                <i
                  className="far fa-location"
                  style={{ marginRight: "10px" }}
                />{" "}
                {ongoingEvent ? ongoingEvent.location : ""}
              </div>
            </div>

            <div className="JoinusButton">
              <button
                onClick={() => setShowJoin(true)}
                className="joinButton"
                type="submit"
              >
                Join Us
              </button>
              <EventMods
                event={ongoingEvent}
                showJoin={showJoin}
                setShowJoin={setShowJoin}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OngoingEvent;
