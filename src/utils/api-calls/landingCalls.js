import { server } from "../fetch";

export const fetchLandingHero = async () => {
  const res2 = await fetch(`${server}/landingHero`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const landingHero = await res2.json();

  return landingHero;
};

export const fetchLandingSlider = async () => {
  const res2 = await fetch(`${server}/landingSlider`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const landingSlider = await res2.json();

  return landingSlider;
};

export const fetchLandingAbout = async () => {
  const res2 = await fetch(`${server}/landingAbout`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const landingAbout = await res2.json();

  return landingAbout;
};

export const fetchLandingDonate = async () => {
  try {
    const res2 = await fetch(`${server}/landingDonate`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const landingDonate = await res2.json();
    return landingDonate;
  } catch (error) {
    console.log("Fetching Landing Donate Failed: ", error);
  }
};

export const fetchMember = async () => {
  const res2 = await fetch(`${server}/member`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const member = await res2.json();

  return member;
};

export const fetchPartner = async () => {
  const res4 = await fetch(`${server}/partnerBg`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const partnerBg = await res4.json();
  
  const res2 = await fetch(`${server}/partner`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const partner = await res2.json();

  const res3 = await fetch(`${server}/publication`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const publication = await res3.json();

  return { partner, publication, partnerBg };
};
