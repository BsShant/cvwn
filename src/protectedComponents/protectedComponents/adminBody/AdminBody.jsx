import React, { useContext } from "react";
import AboutPage from "../../protectedPages/aboutPage/AboutPage";
import ContactPage from "../../protectedPages/contactPage/ContactPage";
import FooterPage from "../../protectedPages/footerPage/FooterPage";
import FundRaiserPage from "../../protectedPages/fundRaiserPage/FundRaiserPage";
import LandingPage from "../../protectedPages/landingPage/LandingPage";
import ProductPage from "../../protectedPages/productPage/ProductPage";
import ServicePage from "../../protectedPages/servicePage/ServicePage";
import SmallDashboard from "../../protectedPages/SmallDashboard/SmallDashboard";
import AdminBottom from "../adminBottom/AdminBottom";
import ProtectedHeader from "../header/ProtectedHeader";
import ProtectedNav from "../nav/ProtectedNav";
import Logo from "../../assets/images/logo.png";
import "./styles.css";
import { NavContext } from "../NavProvider/NavProvider";
const AdminBody = () => {
  const { activeNavLinkId, setActiveNavLinkId, setAdminSlider, adminSlider } =
    useContext(NavContext);
  return (
    <div className={`admin-container ${!adminSlider ? "full-admin-body" : ""}`}>
      <ProtectedHeader />
      <ProtectedNav />
      <div className="admin-padding">
        <SmallDashboard />
        <LandingPage />
        <ServicePage />
        <ProductPage />
        <FundRaiserPage />
        <AboutPage />
        <ContactPage />
        <FooterPage />
        <div className="logo-above-bottom">
          <img src={Logo} alt="logo" />
        </div>
      </div>
        <AdminBottom />
    </div>
  );
};

export default AdminBody;
