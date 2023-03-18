import React from "react";
import "./aboutpage.styles.scss";
import image from "../../assets/long2.jpg";
import { useSelector } from "react-redux";
import VolunteerPage from "../Get Involved/VolunteerPage/volunteer.component";
import { server } from "../../utils/fetch";

export default function Aboutpage() {
  const about = useSelector((state) => state.aboutStore.about);
  return (
    <>
      <div className="aboutPage ">
        <div className="container">
          <div className="row aboutPage-inner-row">
            <div className="aboutImgsection ">
              <img src={about? `${server}/${about.image}` : ""} alt="This is About Image" />
            </div>
            <div className="aboutDetail">
              <h6>{about ? about.topTitle : ""}</h6>
              <h2>{about ? about.heading : ""}</h2>
              <p>{about && about.para1 ? about.para1 : ""}</p>

              <p>{about && about.para2 ? about.para2 : ""}</p>

              <p>{about && about.para3 ? about.para3 : ""}</p>

              <p>{about && about.para4 ? about.para4 : ""}</p>
            </div>
          </div>
        </div>
      </div>
      <VolunteerPage />
    </>
  );
}
