import React from "react";

export default function Announcement(props) {
  const { title, detail, date } = props;
  return (
    <div className="announcementCard">
      <div className="title">{title}</div>
      <hr />
      <div className="Description">{detail}</div>
      <div className="base-title">{date}</div>
    </div>
  );
}
