
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from './Pages/homepage';
import MenuBar from './Components/Header/header.components';
import Footer from './Components/Footer/footer.component';
import Copyright from './Components/Copyright/copyright.components';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aboutpage from './Pages/About/aboutpage.component';
import Eventpage from './Pages/Event/eventpage.component';
import Contactpage from './Pages/Contact/contactpage.components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import StrengtheningProject from './Pages/Projects/Project1/project1.component';
import LeadershipProject from './Pages/Projects/Project2/project2.component';
import AnnualReportPage from './Pages/Resources/AnnualReport/annualreport.component';
import CaseStudyReportPage from './Pages/Resources/Case Study Report/case.study.report.component';
import Event1Component from './Pages/Event/event1/event1.component';
import Event2Component from './Pages/Event/event2/event2.component';
import AnnouncementPage from './Pages/Get Involved/Announcement/announcement.components';
import VolunteerPage from './Pages/Get Involved/VolunteerPage/volunteer.component';
import DonatePage from './Pages/Get Involved/Donate Page/donate.components';
import Articlepage from './Pages/Resources/Article/article';
import EventDescription from './Components/eventcardComponent/EventDescription/eventDescription';
import ArticleDescription from './Pages/Resources/Article/articleDescription';
import Login from './protectedPages/login/login.page'
import { useSelector } from 'react-redux';
import { PublicLayout } from './layout/publicLayout/PublicLayout';

function App() {
  const authUser = useSelector(state => state.authStore.authUser)
  console.log(authUser)
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout><Outlet /></PublicLayout>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/project/strengthening-access-to-justice" element={<StrengtheningProject />} />
          <Route path="project/women-leadership-skill-development" element={<LeadershipProject />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/events/event-page" element={<Event1Component />} />
          <Route path="/events/event2" element={<Event2Component />} />
          <Route path="/resources/annual_report" element={<AnnualReportPage />} />
          <Route path="/events/events-description/:id" element={<EventDescription />} />
          <Route path="/resources/article/article-description/:id" element={<ArticleDescription />} />
          <Route path="/resources/case_study_report" element={<CaseStudyReportPage />} />
          <Route path="/resources/article" element={<Articlepage />} />
          <Route path="/get-involved/announcement" element={<AnnouncementPage />} />
          <Route path="/get-involved/volunteer" element={<VolunteerPage />} />
          <Route path="/get-involved/donate" element={<DonatePage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Route>
       
        <Route path="/admin" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
