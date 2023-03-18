import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import "antd/dist/antd.css";
import "./eventDescription.css";
import { eventData } from "../../../assets/dummyData/eventsData";
import { Modal } from "react-bootstrap";
import EventCompleted from "./eventCompleted";
import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";
import EventMods from "../../../Pages/Event/EventMods";
export default function EventDescription() {
  const [showJoin, setShowJoin] = useState(false);
  const id = useParams().id;
  const event = useSelector((state) => state.eventStore.event);
  const [myEvent, setMyEvent] = useState(null);
  useEffect(() => {
    setMyEvent(event.find((ev) => ev.id == id));
  }, [event]);
  return (
    <div className="eventPages container">
      <div
        className="eventpage-section"
        style={{
          minHeight: "80vh",
          backgroundSize: "cover",
          alignContent: "center",
          display: "flex",
        }}
      >
        <div className="main-contents">
          <div className="inner-main-contents">
            <div className="row ongoing-event-row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12"
                style={{ padding: "0" }}
              >
                <Image
                  src={`${myEvent ? `${server}/${myEvent.image}` : ""}`}
                  style={{ objectFit: "cover", height: "360px", width: "100%" }}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 ongoing-text">
                <div
                  className="head"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <h5 style={{ color: "#f45a2f" }}>
                    {myEvent ? myEvent.title : ""}
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
                  {myEvent ? myEvent.detail : ""}
                </div>
                <div className="row" style={{ marginTop: "5%" }}>
                  <div className="col-4">
                    <i
                      class="fa fa-calendar"
                      style={{ marginRight: "10px" }}
                      aria-hidden="true"
                    ></i>{" "}
                    {myEvent ? new Date(myEvent.date).toDateString() : ""}
                  </div>
                  <div className="col-4">
                    <i
                      className="fas fa-clock"
                      style={{ marginRight: "10px" }}
                    />{" "}
                    {myEvent ? myEvent.time : ""}
                  </div>
                  <div className="col-4">
                    <i
                      className="far fa-location"
                      style={{ marginRight: "10px" }}
                    />{" "}
                    {myEvent ? myEvent.location : ""}
                  </div>
                </div>
                {myEvent && myEvent.status != "completed" ? (
                  <div className="JoinusButton">
                    <button
                      onClick={() => setShowJoin(true)}
                      className="joinButton"
                      type="submit"
                    >
                      Join Us
                    </button>
                    <EventMods
                      event={myEvent}
                      showJoin={showJoin}
                      setShowJoin={setShowJoin}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {myEvent && myEvent.status !== "upcoming" ? (
        <EventCompleted myEvent={myEvent} />
      ) : null}
    </div>
  );
}
