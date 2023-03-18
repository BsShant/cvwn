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
  const res3 = await fetch(`${server}/esewa`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const res4 = await fetch(`${server}/khalti`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const res5 = await fetch(`${server}/bank`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data1 = await res2.json();
  const data2 = await res3.json();
  const data3 = await res4.json();
  const data4 = await res5.json();

  return {
    ...data1.data,
    esewa: { ...data2.data },
    khalti: { ...data3.data },
    bank: { ...data4.data },
  };
};

export const fetchFooterContact = async () => {
  const res2 = await fetch(`${server}/footerContact`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const footerContact = await res2.json();

  return footerContact;
};
