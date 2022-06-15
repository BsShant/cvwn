import React, { useRef, useState, useEffect, useContext } from "react";
import "./styles.css";
import { Menu, DatePicker, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavContext } from "../NavProvider/NavProvider";
import Logo from "../../assets/images/logo.png";

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
      navLinkId: "Service",
      name: "Service Page",
      scrollToId: "ServiceContainer",
    },
    {
      navLinkId: "Product",
      name: "Product Page",
      scrollToId: "ProductContainer",
    },
    {
      navLinkId: "FundRaiser",
      name: "Fund Raiser Page",
      scrollToId: "FundRaiserContainer",
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
      className={`protected-nav-container ${
        !adminSlider ? "removeSlider" : ""
      }`}
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
