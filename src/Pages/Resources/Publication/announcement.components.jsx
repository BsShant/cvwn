import React from "react";
import "./announcement.styles.scss";
import anImg1 from "../../../assets/GetInvolved/announcement1.png";
import anImg2 from "../../../assets/GetInvolved/announcement2.png";
import Announcement from "./announcement";
import { useSelector } from "react-redux";

export default function PublicationPage() {
  const publication = useSelector(
    (state) => state.landingStore.publication
  );

  return (
    <div className="publication-section">
      <div className="container">
        <div style={{ margin: "auto", textAlign: "center", marginBottom:"30px" }}>
          <h2>Publications</h2>
        </div>
        <div className="row">
          {publication.length > 0
            ? publication.map((announce) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12  mb-4">
                    <Announcement
                      title={announce.title}
                      image={announce.image}
                      link={announce.link}
                      id={announce.id}
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
