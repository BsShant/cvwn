import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
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
function App() {
  const authUser = useSelector((state) => state.authStore.authUser);
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    ReactGA.initialize("UA-228812119-3");
    ReactGA.pageview(window.location.pathname + window.location.search);
    dispatch(fetchingLandingHeroWithSpinnerStarts());
    dispatch(fetchingLandingDonateWithSpinnerStarts());
    dispatch(fetchingAboutWithSpinnerStarts());
    dispatch(fetchingEventWithSpinnerStarts());
    dispatch(fetchingProjectWithSpinnerStarts());
    dispatch(fetchingReportWithSpinnerStarts());
    dispatch(fetchingCaseWithSpinnerStarts());
    dispatch(fetchingArticleWithSpinnerStarts());
    dispatch(fetchingAnnouncementWithSpinnerStarts());
    dispatch(fetchingVolunteerWithSpinnerStarts());
    dispatch(fetchingDonationWithSpinnerStarts());
    dispatch(fetchingDonationHeroWithSpinnerStarts())
    dispatch(fetchingVolunteerHeroWithSpinnerStarts())
    dispatch(fetchingLandingHeroWithSpinnerStarts());
    dispatch(fetchingLandingAboutWithSpinnerStarts());
    dispatch(fetchingFooterAboutWithSpinnerStarts());
    dispatch(fetchingFooterLinksWithSpinnerStarts());
    dispatch(fetchingFooterContactWithSpinnerStarts());
    dispatch(fetchingRequestWithSpinnerStarts());
    dispatch(fetchingContactWithSpinnerStarts());
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

          <Route path="/events" element={<Eventpage />} />
          <Route
            path="/resources/annual_report"
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
            path="/project/project-description/:id"
            element={<CaseStudyDescription />}
          />
          <Route
            path="/resources/case_study_report"
            element={<CaseStudyReportPage />}
          />
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
