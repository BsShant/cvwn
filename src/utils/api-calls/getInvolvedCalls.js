import { server } from "../fetch";

export const fetchAnnouncement = async () => {
  const res2 = await fetch(`${server}/announcement`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const announcement = await res2.json();

  return announcement;
};

export const fetchVolunteer = async () => {
  const res2 = await fetch(`${server}/volunteer`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const volunteer = await res2.json();

  return volunteer;
};

export const fetchVolunteerHero = async () => {
  const res2 = await fetch(`${server}/volunteerHero`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const volunteerHero = await res2.json();

  return volunteerHero;
};



export const fetchDonate = async () => {
  const res2 = await fetch(`${server}/donation`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const donate = await res2.json();
  return donate;
};



export const fetchDonateHero = async () => {
  const res2 = await fetch(`${server}/donationHero`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const donateHero = await res2.json();
  return donateHero;
};


