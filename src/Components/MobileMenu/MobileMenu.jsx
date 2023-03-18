import { Menu } from "antd";
import React from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./styles.scss";
const MobileMenu = (props) => {
  const { displayMobileMenu, setDisplayMobileMenu } = props;
  const { pathname } = useLocation();
  const [mySelected, setMySelected] = useState("");
  const onClick = (e) => {
    setDisplayMobileMenu(false);
  };

  return (
    <>
      <div
      onClick={()=> setDisplayMobileMenu(false)}
        className={`hamburger-overlay ${
          displayMobileMenu ? "hamburgerOn" : "hamburgerOff"
        }`}
      ></div>
      <div
        className={`mobile-menu ${
          displayMobileMenu ? "mobileOn" : "mobileOff"
        }`}
      >
        <div className="cross" onClick={() => setDisplayMobileMenu(false)}>
          <i class="fas fa-times"></i>
        </div>
        <Menu
          className="mobile-menu-container"
          onClick={(e) => onClick(e)}
          mode="inline"
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="gallery">
            <Link to="/gallery">Gallery</Link>
          </Menu.Item>
          <Menu.Item key="projects">
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="events">
            <Link to="/events">Events</Link>
          </Menu.Item>

          <Menu.SubMenu title="Resources">
            <Menu.Item key="annual-report">
              <Link to="/resources/annual-report">Annual Report</Link>
            </Menu.Item>
            <Menu.Item key="case-study-report">
              <Link to="/resources/case-study-report">Case Study Report</Link>
            </Menu.Item>
            <Menu.Item key="case-story">
              <Link to="/resources/case-story">Case Story</Link>
            </Menu.Item>
            <Menu.Item key="publication">
              <Link to="/resources/publication">Publication</Link>
            </Menu.Item>
            <Menu.Item key="article">
              <Link to="/resources/article">Article</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu title="Get Involved">
            <Menu.Item key="announcement">
              <Link to="/get-involved/announcement">Announcement</Link>
            </Menu.Item>
            <Menu.Item key="donate">
              <Link to="/get-involved/donate">Donate</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default MobileMenu;
