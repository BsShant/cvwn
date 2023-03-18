import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage";
import MenuBar from "./Components/Header/header.components";
import Footer from "./Components/Footer/footer.component";
import Copyright from "./Components/Copyright/copyright.components";
import "antd/dist/antd.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Aboutpage from "./Pages/About/aboutpage.component";
import Eventpage from "./Pages/Event/eventpage.component";
import Contactpage from "./Pages/Contact/contactpage.components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AnnualReportPage from "./Pages/Resources/AnnualReport/annualreport.component";
import CaseStudyReportPage from "./Pages/Resources/Case Study Report/case.study.report.component";
import AnnouncementPage from "./Pages/Get Involved/Announcement/announcement.components";
import VolunteerPage from "./Pages/Get Involved/VolunteerPage/volunteer.component";
import DonatePage from "./Pages/Get Involved/Donate Page/donate.components";
import Articlepage from "./Pages/Resources/Article/article";
import EventDescription from "./Components/eventcardComponent/EventDescription/eventDescription";
import ArticleDescription from "./Pages/Resources/Article/articleDescription";
import Login from "./protectedPages/login/login.page";
import { useDispatch, useSelector } from "react-redux";
import { PublicLayout } from "./layout/publicLayout/PublicLayout";
import Admin from "./protectedPages/admin/Admin";
import {
  fetchingLandingAboutWithSpinnerStarts,
  fetchingLandingDonateWithSpinnerStarts,
  fetchingLandingHeroWithSpinnerStarts,
  fetchingMemberWithSpinnerStarts,
  fetchingPartnerWithSpinnerStarts,
  fetchingLandingSliderWithSpinnerStarts,
} from "./store/landingReducer/landingStore.actions";
import { fetchingAboutWithSpinnerStarts } from "./store/aboutReducer/aboutStore.actions";
import {
  fetchingEventWithSpinnerStarts,
  fetchingRequestWithSpinnerStarts,
} from "./store/eventReducer/eventStore.actions";
import { fetchingProjectWithSpinnerStarts } from "./store/projectReducer/projectStore.actions";
import {
  fetchingAnnouncementWithSpinnerStarts,
  fetchingVolunteerWithSpinnerStarts,
  fetchingDonationWithSpinnerStarts,
  fetchingDonationHeroWithSpinnerStarts,
  fetchingVolunteerHeroWithSpinnerStarts,
  fetchingVolunteerTypeWithSpinnerStarts,
} from "./store/getInvolvedReducer/getInvolvedStore.actions";
import {
  fetchingReportWithSpinnerStarts,
  fetchingCaseWithSpinnerStarts,
  fetchingArticleWithSpinnerStarts,
} from "./store/resourceReducer/resourceStore.actions";
import CaseStudyDescription from "./Pages/Resources/Case Study Report/CaseStudyDescription";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ProjectDescription from "./Pages/projectDescription/ProjectDescription";
import {
  fetchingFooterAboutWithSpinnerStarts,
  fetchingFooterContactWithSpinnerStarts,
  fetchingFooterLinksWithSpinnerStarts,
} from "./store/footerReducer/footerStore.actions";
import { fetchingContactWithSpinnerStarts } from "./store/contactReducer/contactStore.actions";
import ResetPassword from "./protectedPages/login/resetPassword";
import ForgotPassword from "./protectedPages/login/forgotPassword";
import RouteSuperComponent from "./Components/SuperRoute/SuperRoute";
import ReactGA from "react-ga";
import SettingPage from "./protectedPages/SettingPage/SettingPage";
import Gallery from "./Pages/Gallery/Gallery";
import CaseStoryPage from "./Pages/Resources/Case Story Report/case.study.report.component";
import CaseStoryDescription from "./Pages/Resources/Case Story Report/CaseStudyDescription";
import PublicationPage from "./Pages/Resources/Publication/announcement.components";
import PublicationDescription from "./Pages/Resources/Publication/PublicationDescription";
import AnnouncementDetail from "./Pages/Get Involved/Announcement/AnnouncementDetail";
function App() {
  const authUser = useSelector((state) => state.authStore.authUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingLandingHeroWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingLandingDonateWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingPartnerWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingAboutWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingCaseWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingAnnouncementWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingEventWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingProjectWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingArticleWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingReportWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingLandingAboutWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingLandingSliderWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingLandingHeroWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingVolunteerHeroWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingVolunteerWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingDonationWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingVolunteerTypeWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingDonationHeroWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingMemberWithSpinnerStarts());
  }, []);
  useEffect(() => {
    dispatch(fetchingContactWithSpinnerStarts());
  }, []);

  useEffect(() => {
    AOS.init();
    ReactGA.initialize("UA-228812119-3");
    ReactGA.pageview(window.location.pathname + window.location.search);

    dispatch(fetchingFooterAboutWithSpinnerStarts());
    dispatch(fetchingFooterLinksWithSpinnerStarts());
    dispatch(fetchingFooterContactWithSpinnerStarts());
    dispatch(fetchingRequestWithSpinnerStarts());
  }, []);
  return (
    <div>
      <Routes>
        <Route
          element={
            <PublicLayout>
              <Outlet />
            </PublicLayout>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/events" element={<Eventpage />} />
          <Route
            path="/resources/annual-report"
            element={<AnnualReportPage />}
          />
          <Route path="/projects" element={<ProjectPage />} />
          <Route
            path="/projects/project-description/:id"
            element={<ProjectDescription />}
          />
          <Route
            path="/events/events-description/:id"
            element={<EventDescription />}
          />
          <Route
            path="/resources/article/article-description/:id"
            element={<ArticleDescription />}
          />
          <Route
            path="/resources/case-study/case-study-description/:id"
            element={<CaseStudyDescription />}
          />
          <Route
            path="/resources/case-story/case-story-description/:id"
            element={<CaseStoryDescription />}
          />
          <Route
            path="/resources/publication/publication-description/:id"
            element={<PublicationDescription />}
          />
           <Route
            path="/get-involved/announcement-detail/:id/:title"
            element={<AnnouncementDetail />}
          />

          <Route
            path="/project/project-description/:id"
            element={<CaseStudyDescription />}
          />

          <Route
            path="/resources/case-study-report"
            element={<CaseStudyReportPage />}
          />
          <Route path="/resources/case-story" element={<CaseStoryPage />} />
          <Route path="/resources/publication" element={<PublicationPage />} />
          <Route path="/resources/article" element={<Articlepage />} />
          <Route
            path="/get-involved/announcement"
            element={<AnnouncementPage />}
          />
          <Route path="/get-involved/volunteer" element={<VolunteerPage />} />
          <Route path="/get-involved/donate" element={<DonatePage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <RouteSuperComponent>
              <Admin />
            </RouteSuperComponent>
          }
        />
        <Route
          path="/admin/setting"
          element={
            <RouteSuperComponent>
              <SettingPage />
            </RouteSuperComponent>
          }
        />
        <Route
          path="/login"
          element={
            <RouteSuperComponent login>
              <Login />
            </RouteSuperComponent>
          }
        />
        <Route
          path="/reset-password/:id/:token"
          element={
            <RouteSuperComponent login>
              <ResetPassword />
            </RouteSuperComponent>
          }
        />
        <Route
          public
          noLayout
          path="/forgot-password"
          element={
            <RouteSuperComponent login>
              <ForgotPassword />
            </RouteSuperComponent>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
