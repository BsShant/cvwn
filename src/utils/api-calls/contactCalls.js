import { server } from "../fetch";


export const fetchContact = async () => {
  const res2 = await fetch(`${server}/contact`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const contact = await res2.json();
  return contact;
};


