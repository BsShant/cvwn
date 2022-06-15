import { server } from "../fetch";

export const fetchSubscriber = async () => {
  try {
    const res2 = await fetch(`${server}/subscriber`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const subscriber = await res2.json();
    return subscriber.data;
  } catch (error) {
    console.log("Fetching Subsacriber Failed: ", error);
  }
};
