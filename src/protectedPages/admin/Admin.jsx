import React, { useEffect, useState } from "react";

import "./styles.css";

import { NavProvider } from "../../protectedComponents/NavProvider/NavProvider";


import AdminBody from "../../protectedComponents/adminBody/AdminBody";
const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [adminSlider, setAdminSlider] = useState(true);
  return (
    <div>
      <NavProvider>
        <AdminBody />
      </NavProvider>
    </div>
  );
};

export default Admin;
