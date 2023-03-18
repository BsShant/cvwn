import { Image } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { server } from "../../../utils/fetch";
import "./announcementDetail.scss";
const AnnouncementDetail = (props) => {
  const { title, id } = useParams();
  const announcement = useSelector(
    (state) => state.getInvolvedStore.announcement
  );
  const [myAnnouncement, setMyAnnouncement] = useState(null);

  useEffect(() => {
    if (announcement.length > 0) {
      let cc = announcement.find((an) => an.id == id);
      setMyAnnouncement(cc);
    }
  }, [announcement, announcement.length]);
  return (
    <div className="announcement-detail-page">
      <div className="container">
        <div className="announcement-detail-image">
          <Image  src={
              myAnnouncement && myAnnouncement.image
                ? `${server}/${myAnnouncement.image}`
                : ""
            }></Image>
        </div>

        <div className="announcement-detail-title">{myAnnouncement?.title}</div>

        <div className="announcement-detail-desc">{myAnnouncement?.detail}</div>

        <div className="announcement-detail-button">
          <a
            className="announcementCard"
            href={
                myAnnouncement && myAnnouncement.file
                ? `${server}/${myAnnouncement.file}`
                : ""
            }
            target="_blank"
          >
            Download File
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
