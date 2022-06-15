import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useSelector } from "react-redux";
import Login from "../../protectedPages/login/login.page";
import Admin from "../../protectedPages/admin/Admin";

const RouteSuperComponent = (props) => {
  const authUser = useSelector((state) => state.authStore.authUser);
  console.log("authuser", authUser);
  const location = useLocation();
  const navigate = useNavigate();
  if (!authUser) {
    return (
      <>
        <Login />
      </>
    );
  }
  if (authUser && props.login) {
    return <Admin />;
  }

  return <>{props.children}</>;
};

export default RouteSuperComponent;
