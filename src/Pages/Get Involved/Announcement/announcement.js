import React from "react";
import { Link } from "react-router-dom";
import { server } from "../../../utils/fetch";
export default function Announcement(props) {
  const { title, detail, date, file, id, image } = props;
  return (
    <Link
      className="announcementCard"
      to={`/get-involved/announcement-detail/${id}/${title.replaceAll(
        " ",
        "-"
      )}`}
    >
      <img src={`${server}/${image}`} />
      <div className="announcement-overlay">
        <div className="title">{title}</div>
      </div>
      {/* <hr />
      <div className="Description">{detail}</div>
      <div className="base-title">{date}</div> */}
    </Link>
  );
}
