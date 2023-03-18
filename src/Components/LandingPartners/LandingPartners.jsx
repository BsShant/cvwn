import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "./styles.scss";
import Esewa from "../../assets/partners/esewa.png";
import khalti from "../../assets/partners/khalti.png";

import Hero6 from "../../assets/handHolding.JPG";
import LandingPartnertItem from "../LandingPartnerItem/LandingPartnertItem";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import { useEffect } from "react";
import { useState } from "react";

const LandingPartners = () => {
  const partner = useSelector((state) => state.landingStore.partner);
  const partnerBg = useSelector((state) => state.landingStore.partnerBg);

  const [myBg, setMyBg] = useState("");
  useEffect(() => {
    if (partnerBg) {
      setMyBg(partnerBg.image);
    }
  }, [partnerBg]);
  return (
    <>
      {partnerBg && partnerBg.image ? (
        <div
          className="landing-partner-container"
          style={{
            backgroundImage: `url(${server}/${partnerBg.image})`,
          }}
        >
          <div className="landing-partner-heading">
            Our Partners
          </div>

          {partner.filter((part) => part.type.toLowerCase() == "main").length >
          0 ? (
            <ReactOwlCarousel
              loop={true}
              nav={false}
              margin={30}
              dots={false}
              slideTransition="linear"
              autoplaySpeed={6000}
              smartSpeed={6000}
              center={true}
              autoPlay={true}
              items={1}
              responsiveClass={true}
              responsive={{
                0: {
                  items: 4,
                  autoplay: true,
                },
                768: {
                  items: 5,
                  autoplay: true,
                },
                992: {
                  items: 7,
                  autoplay: true,
                },
              }}
              className="partner-carousel"
            >
              {partner
                .filter((part) => part.type.toLowerCase() == "main")
                .map((part, index) => {
                  return (
                    <LandingPartnertItem
                      image={`${server}/${part.image}`}
                      link={part.link}
                      name={part.name}
                    />
                  );
                })}
            </ReactOwlCarousel>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default LandingPartners;
