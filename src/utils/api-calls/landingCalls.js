import { server } from "../fetch";

export const fetchLandingHero = async () => {
  const res2 = await fetch(`${server}/landingHero`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const landingHero = await res2.json();

  return landingHero;
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
    console.log("Fetching Landing Donate Failed: ", error)
  }

};


