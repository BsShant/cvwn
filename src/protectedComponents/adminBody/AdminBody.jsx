import React, { useContext } from "react";
import AboutPage from "../../protectedPages/aboutPage/AboutPage";
// import ContactPage from "../../protectedPages/contactPage/ContactPage";
// import FooterPage from "../../protectedPages/footerPage/FooterPage";
// import FundRaiserPage from "../../protectedPages/fundRaiserPage/FundRaiserPage";
import LandingPage from "../../protectedPages/landingPage/LandingPage";
// import ServicePage from "../../protectedPages/servicePage/ServicePage";
import SmallDashboard from "../../protectedPages/SmallDashboard/SmallDashboard";
import AdminBottom from "../adminBottom/AdminBottom";
import ProtectedHeader from "../header/ProtectedHeader";
import ProtectedNav from "../nav/ProtectedNav";
import Logo from "../../assets/Logo.png";
import "./styles.css";
import { NavContext } from "../NavProvider/NavProvider";
import ProjectPage from "../../protectedPages/projectPage/ProjectPage";
import EventPage from "../../protectedPages/eventPage/EventPage";
import ArticlePage from "../../protectedPages/resourcePage/resourcePage";
import CaseStudyPage from "../../protectedPages/caseStudyPage/CaseStudyPage";
import ReportPage from "../../protectedPages/reportPage/ReportPage";
import GetInvolvedPage from "../../protectedPages/getInvolvedPage/getInvolvedPage";
import ResourcePage from "../../protectedPages/resourcePage/resourcePage";
import FooterPage from "../../protectedPages/footerPage/FooterPage";
import ContactPage from "../../protectedPages/contactPage/ContactPage";
import ProtectedNavSmall from "../nav/ProtectedNavSmall";
import GalleryPage from "../../protectedPages/GalleryPage/GalleryPage";
const AdminBody = () => {
  const { activeNavLinkId, setActiveNavLinkId, setAdminSlider, adminSlider } =
    useContext(NavContext);
  return (
    <div className={`admin-container ${!adminSlider ? "full-admin-body" : "admin-backdrop"}`}>
      <ProtectedHeader />
      <ProtectedNav />
      <ProtectedNavSmall />
      <div className="admin-padding">
        <SmallDashboard />
        <LandingPage />
        <AboutPage />
        <GalleryPage />
        <ProjectPage />
        <EventPage />
        <ResourcePage />
        <GetInvolvedPage />
        <ContactPage />
        <FooterPage />
        {/* <ServicePage />
        <FundRaiserPage />
        <ContactPage />
        <FooterPage /> */}
        <div className="logo-above-bottom">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <AdminBottom />
    </div>
  );
};

export default AdminBody;
