import { server } from "../fetch";

export const fetchFooterAbout = async () => {
  const res2 = await fetch(`${server}/footerAbout`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const footerAbout = await res2.json();

  return footerAbout;
};

export const fetchFooterLinks = async () => {
  const res2 = await fetch(`${server}/footerLink`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const footerLinks = await res2.json();

  return footerLinks;
};

export const fetchFooterContact = async () => {
  const res2 = await fetch(`${server}/footerContact`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const footerContact = await res2.json();

  return footerContact;
};
