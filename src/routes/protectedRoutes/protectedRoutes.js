import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Dashboard from "../../protectedPages/dashboard/Dashboard";
import Login from "../../protectedPages/login/login.page";
import ResetPassword from "../../protectedPages/login/resetPassword";
import ForgotPassword from "../../protectedPages/login/forgotPassword";

import SuperRoute from "../../components/privateRoute/index";
import Setting from "../../protectedPages/setting/setting";

const ProtctedRoutes = () => {
  return (
    <>
      <Route
        path="/login"
        element={
          //   <SuperRoute public noLayout>
          <Login />
          //   </SuperRoute>
        }
      />
      <Route
        path="/reset-password/:id/:token"
        element={
          <SuperRoute public noLayout>
            <ResetPassword />
          </SuperRoute>
        }
      />
      <Route
        public
        noLayout
        path="/forgot-password"
        element={
          <SuperRoute public noLayout>
            <ForgotPassword />
          </SuperRoute>
        }
      />

      <Route exact path="/admin" />
      <Route path="/admin/dashboard" element={Dashboard} />
      <Route path="/admin/setting" element={Setting} />
    </>
  );
};

export default ProtctedRoutes;
