import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import BackgroundAudio from "../assets/audio/background.mp3";
import Dashboard from "../protectedPages/dashboard/Dashboard";
import Setting from "../protectedPages/setting/setting";
import PublicRoute from "./publicRoutes/publicRoutes";
import ResetPassword from "../protectedPages/login/resetPassword";
import ForgotPassword from "../protectedPages/login/forgotPassword";
import SuperRoute from "../components/privateRoute/index";
import Login from "../protectedPages/login/login.page";
import HomePage from "../pages/homePage/homepage";
import OurTeamPage from "../pages/ourTeam";
import ProtectedLayout from "../layout/protectedLayout/layout";
import OurTeam from "../protectedPages/ourTeam/ourTeam";
import AnimatingPages from "../animatingPages";
import OurCOmpany from "../protectedPages/ourCompany/ourCompany";
import { useDispatch } from "react-redux";
import { fetchingOurCompanyContentWithSpinnerStarts } from "../store/ourCompanyStore/ourCompanyAction";
import { fetchingOurTeamContentWithSpinnerStarts } from "../store/ourTeamStore/ourTeamAction";
function IndexRoute(props) {
  const dispatch = useDispatch()
  useEffect(()=>{

    sessionStorage.setItem("opened", "yes");
    dispatch(fetchingOurCompanyContentWithSpinnerStarts())
    dispatch(fetchingOurTeamContentWithSpinnerStarts());


  },[])
  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage playSpaceAudio={props.playSpaceAudio} audioEvent={props.audioEvent} audioPause={props.audioPause}/>} />
        <Route path="/our-team" element={<OurTeamPage playSpaceAudio={props.playSpaceAudio} audioEvent={props.audioEvent} audioPause={props.audioPause} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route
          public
          noLayout
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          exact
          path="/admin"
          element={
            <SuperRoute>
              <Dashboard />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <SuperRoute>
              <Dashboard />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/setting"
          element={
            <SuperRoute>
              <Setting />
            </SuperRoute>
          }
        /> 
       
      </Routes>
    </>
  );
}

export default IndexRoute;
