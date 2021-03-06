import React, { useRef, useState, useEffect, useContext } from "react";
import "./styles.css";
import { Menu, DatePicker, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavContext } from "../NavProvider/NavProvider";
import Logo from "../../assets/Logo.png";

const ProtectedNav = (props) => {
  const navLinks = [
    {
      navLinkId: "Dashboard",
      name: "Dashboard",
      scrollToId: "DashboardContainer",
    },
    ,
    {
      navLinkId: "Landing",
      name: "Landing Page",
      scrollToId: "LandingContainer",
    },
    {
      navLinkId: "About",
      name: "About Page",
      scrollToId: "AboutContainer",
    },
    {
      navLinkId: "Project",
      name: "Project Page",
      scrollToId: "ProjectContainer",
    },
    
    {
      navLinkId: "Event",
      name: "Event Page",
      scrollToId: "EventContainer",
    },
    {
      navLinkId: "Resource",
      name: "Resources Page",
      scrollToId: "ResourceContainer",
    },
    {
      navLinkId: "GetInvolved",
      name: "Get Involved Page",
      scrollToId: "GetInvolvedContainer",
    },
    {
      navLinkId: "ContactUs",
      name: "Contact US Page",
      scrollToId: "ContactUsContainer",
    },
  ];
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const protectedNavRef = useRef(null);
  const { activeNavLinkId, setActiveNavLinkId, setAdminSlider, adminSlider } =
    useContext(NavContext);
  const handleClick = (e) => {
    setActiveNavLinkId(e.key);
    const myNav = navLinks.filter((n) => n.navLinkId === e.key)[0];
    document.getElementById(myNav.scrollToId).scrollIntoView({
      behavior: "smooth", // gives an ease-in-out effect to our scroll
    });
  };

  // add/remove scroll event listener
  useEffect(() => {}, []);

  return (
    <div
      ref={protectedNavRef}
      className={`protected-nav-container `}
    >
      <div className="slider-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-md-12">
          <Menu
            disabledOverflow={true}
            onClick={(e) => handleClick(e)}
            selectedKeys={[activeNavLinkId]}
            mode="horizontal"
          >
            {navLinks.map((nav, index) => {
              return (
                <Menu.Item
                  id={nav.navLinkId}
                  className={
                    activeNavLinkId === nav.navLinkId
                      ? "protectedNavActive"
                      : ""
                  }
                  key={nav.navLinkId}
                >
                  {nav.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default ProtectedNav;
