import React from "react";
import { Link } from "react-router-dom";
import { server } from "../../../utils/fetch";

export default function Announcement(props) {
  const { title, link, id, image } = props;
  return (
    <Link
      to={`/resources/publication/publication-description/${id}`}
      className="publicationCard"
    >
      <div className="publication-image">
        <img src={`${server}/${image}`} />
      </div>
      <div className="mask">
        <div className="title">{title}</div>
      </div>
    </Link>
  );
}
