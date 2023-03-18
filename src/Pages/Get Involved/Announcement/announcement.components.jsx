import React from "react";
import "./announcement.styles.scss";
import anImg1 from "../../../assets/GetInvolved/announcement1.png";
import anImg2 from "../../../assets/GetInvolved/announcement2.png";
import Announcement from "./announcement";
import { useSelector } from "react-redux";

export default function AnnouncementPage() {
  const announcement = useSelector(
    (state) => state.getInvolvedStore.announcement
  );

  return (
    <div className="announcementSection">
      <div className="container">
        <div style={{ margin: "auto", textAlign: "left" }}>
          <h2>OUR ANNOUNCEMENTS</h2>
        </div>
        <div className="row announcementCol">
          {announcement.length > 0
            ? announcement.map((announce) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6 announcementRow">
                    <Announcement
                      title={announce.title}
                      detail={announce.detail}
                      date={announce.date}
                      file={announce.file}
                      id={announce.id}
                      image={announce.image}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
