import "./fixed-banner.styles.scss";
import DonationForm from "../Donation Form/donation.form.component";

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";

export default function Fixedbanner() {
  const landingDonate = useSelector(
    (state) => state.landingStore.landingDonate
  );

  return (
    <div
      class="place-order fixedOverlay"
      style={{
        backgroundImage: `url(${
          landingDonate ? `${server}/${landingDonate.image}` : ""
        })`,
      }}
    >
      <div class="container place-order-text">
        <div class="row text-center">
          <div class="col-lg-12 col-md-12 txt">
            <div className="myTxt">
              <h2>{landingDonate ? landingDonate.title : ""}</h2>
              <p>{landingDonate ? landingDonate.detail : ""}</p>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 mt-lg-0 mt-4">
            <Link
              class="main-btnn"
              to="./get-involved/donate"
              style={{ textDecoration: "none" }}
            >
              Donate Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
