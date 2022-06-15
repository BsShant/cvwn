import React from "react";
import face1 from "../../../assets/bj.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function VolunteerComponent(props) {
  const { image, name, role, fb, insta, twitter } = props;
  return (
    <div className="volnt-box">
      <div className="image-container">
        <img
          src={image}
          height={200}
          width={200}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </div>
      <div className="Intel">
        <h5>{name}</h5>

        <div className="post">{role}</div>

        <div class="items">
          <a href={fb} target="_blank">
            <i className="fab fa-facebook-f facebook"></i>
          </a>
          <a href={insta} target="_blank">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href={twitter} target="_blank">
            {" "}
            <i className="fab fa-twitter twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
