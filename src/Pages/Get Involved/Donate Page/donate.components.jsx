import React from "react";
import DonationForm from "../../../Components/Donation Form/donation.form.component";
import DonationText from "../../../Components/Donation Text/donation-text.components";
import "./donate.styles.scss";

export default function DonatePage() {
  return (
    <div className="donatePage">
      <div className="ArticleSection">
        <DonationText />
      </div>
      <div className="FormSection">
        <DonationForm />
      </div>
    </div>
  );
}
