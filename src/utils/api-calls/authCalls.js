import { message } from "antd";
import { server } from "../fetch";

export const login = async (values) => {
  try {
    const res = await fetch(`${server}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.status === 401) {
      message.error("The email or password do not match");
      throw new Error("The authentication failed");
    }
    const data = await res.json();
    localStorage.setItem("cvwnUser", JSON.stringify(data.user));
    localStorage.setItem("cvwnToken", JSON.stringify(data.token));

    return data;
  } catch (error) {
    console.log("login error: ", error);
  }
};

export const subscriberCheck = async (values) => {
  try {
    const res = await fetch(`${server}/subscriber`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(res);
    if (res.status !== 200) {
      message.error("The subscriber Link failed");
      throw new Error("The Subscriber Link failed");
    }
    const data = values;
    localStorage.setItem("subscriber", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log("Subscriber error: ", error);
  }
};

export const logout = () => {
  localStorage.clear();
};
