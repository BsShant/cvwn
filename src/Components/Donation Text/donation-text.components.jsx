import React from "react";
import { useSelector } from "react-redux";
import "./donation-text.styles.scss";

export default function DonationText() {
 
  const donationHero = useSelector((state) => state.getInvolvedStore.donationHero);


  return (
    <div className="donationText">
      <div className="whytodonate">
        <h3>{donationHero ? donationHero.title : ""}</h3>
        <p>{donationHero ? donationHero.detail : ""}</p>
      </div>
    </div>
  );
}
