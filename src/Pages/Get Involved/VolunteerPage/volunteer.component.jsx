import React from "react";
import "./volunteer.styles.scss";
import VolunteerComponent from "./volunteerComponent";

import { useSelector } from "react-redux";
import { server } from "../../../utils/fetch";

export default function VolunteerPage() {
  const volunteer = useSelector((state) => state.getInvolvedStore.volunteer);
  const volunteerType = useSelector(
    (state) => state.getInvolvedStore.volunteerType
  );

  const volunteerHero = useSelector(
    (state) => state.getInvolvedStore.volunteerHero
  );
  const type = [
    "Board Members",
    "Central Office, Kathmandu",
    "Peace Centre, Udaypur",
    "Peace Centre, Dhanusha",
    "Peace Centre, Ramechhap",
    "Peace Centre, baglung",
    "Peace Centre, myagdi",
    "Peace Centre, banke",
    "Peace Centre, rolpa",
    "Peace Centre, dailekh",
    "Peace Centre, jajarkot",
    "Peace Centre, kailali",
  ];
  return (
    <div className="volunteerSection">
      <h2>Our Team</h2>
      <div className="row volunteerContainer">
        {volunteerType.length > 0
          ? volunteerType
              .sort((a, b) => a.rank - b.rank)
              .map((typ) => {
                return (
                  <div className="volunteer-section">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                        <h3>{typ.name.replaceAll("-", " ")}</h3>
                      </div>
                    </div>
                    <div className="volunteer-teams row">
                      {volunteer.filter((vol) => {
                        ""
                        return vol.type == typ.name;
                      }).length > 0
                        ? volunteer
                            .filter((vol) => vol.type == typ.name)
                            .sort((a, b) => a.rank - b.rank)
                            .map((vol) => {
                              return (
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                                  <VolunteerComponent
                                    image={`${server}/${vol.image}`}
                                    name={vol.name}
                                    role={vol.role}
                                    fb={vol.facebook}
                                    insta={vol.insta}
                                    twitter={vol.twitter}
                                    address={vol.address}
                                  />
                                </div>
                              );
                            })
                        : null}
                    </div>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}
