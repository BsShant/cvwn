import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { donationSpinnerStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import StatsCard from "../statCards/StatsCard";
import "./styles.css";
const colors = [
  {
    background: "transparent",
    color: "#00000082",
  },
  {
    background: "transparent",
    color: "#00000082",
  },
  {
    background: "transparent",
    color: "#00000082",
  },
  {
    background: "transparent",
    color: "#00000082",
  },
];
const StatsCardsContainer = () => {
  const event = useSelector((state) => state.eventStore.event);
  const project = useSelector((state) => state.projectStore.project);
  const volunteer = useSelector((state) => state.getInvolvedStore.volunteer);
  const donation = useSelector((state) => state.getInvolvedStore.donation);
  return (
    <div className="stats-cards-container">
      <div className="row stats-row" style={{ display: "flex" }}>
        <div className="stats-side-margin col-12 col-md-6 col-sm-6 col-lg-3 mb-4">
          <StatsCard
            color={colors[0].color}
            background={colors[0].background}
            icon={<i class="fal fa-calendar-alt"></i>}
            title={event.length}
            body="Events"
          />
        </div>
        <div className="stats-side-margin col-12 col-md-6 col-sm-6 col-lg-3 mb-4">
          <StatsCard
            color={colors[1].color}
            background={colors[1].background}
            icon={<i class="fal fa-globe"></i>}
            title={project.length}
            body="Projects"
          />
        </div>
        <div className="stats-side-margin col-12 col-md-6 col-sm-6 col-lg-3 mb-4">
          <StatsCard
            color={colors[2].color}
            background={colors[2].background}
            icon={<i class="fal fa-hands-usd"></i>}
            title={donation.length}
            body="Donations"
          />
        </div>
        <div className="stats-side-margin col-12 col-md-6 col-sm-6 col-lg-3 mb-4">
          <StatsCard
            noBorder
            color={colors[3].color}
            background={colors[3].background}
            icon={<i class="far fa-users"></i>}
            title={volunteer.length}
            body="Team Members"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCardsContainer;
