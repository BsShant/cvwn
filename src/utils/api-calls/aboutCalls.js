import { server } from "../fetch";

export const fetchAbout = async () => {
  const res2 = await fetch(`${server}/about`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const about = await res2.json();

  const res3 = await fetch(`${server}/galleryImage`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const galleryImage = await res3.json();
  const res4 = await fetch(`${server}/galleryVideo`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const galleryVideo = await res4.json();

  return { about, galleryImage, galleryVideo };
};
