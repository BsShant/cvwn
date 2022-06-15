import React from "react";
import "./volunteer.styles.scss";
import VolunteerComponent from "./volunteerComponent";

import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";

export default function VolunteerPage() {
  const volunteer = useSelector((state) => state.getInvolvedStore.volunteer);
  const volunteerHero = useSelector(
    (state) => state.getInvolvedStore.volunteerHero
  );
  return (
    <div className="volunteerSection">
      <h2>{volunteerHero ? volunteerHero.title : ""}</h2>
      <div className="row volunteerContainer">
        <div className="row volunteerContainer" style={{ paddingBottom: "3%" }}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p>{volunteerHero ? volunteerHero.detail : ""}</p>
          </div>
        </div>
        {volunteer.length > 0
          ? volunteer.map((vol) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                  <VolunteerComponent
                    image={`${server}/${vol.image}`}
                    name={vol.name}
                    role={vol.role}
                    fb={vol.facebook}
                    insta={vol.insta}
                    twitter={vol.twitter}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
