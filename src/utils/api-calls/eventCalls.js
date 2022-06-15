import { server } from "../fetch";

export const fetchEvent = async () => {
  const res2 = await fetch(`${server}/event`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const event = await res2.json();

  return event;
};


export const fetchRequest = async () => {
  const res2 = await fetch(`${server}/request`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const request = await res2.json();

  return request;
};




