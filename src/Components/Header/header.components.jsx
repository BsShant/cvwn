import React from "react";
import "./header.styles.scss";
import NavBar from "./Navbar/navBar.component";
import Logo from "../../assets/Logo.png";
import MenuToggle from "./Toggle Header/menu2.components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MenuBar() {
  const footerAbout = useSelector((state) => state.footerStore.footerAbout);
  const footerContact = useSelector((state) => state.footerStore.footerContact);
  const footerLinks = useSelector((state) => state.footerStore.footerLinks);
  return (
    <div className="container menu-bar">
      <div className="row menu-row">
        <div
          className="col-lg-3 col-md-3 col-xl-3  logo-section"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Link
            className=""
            id="navbarDropdownMenuLink"
            to="/"
            aria-expanded="false"
            style={{ height: "100%" }}
          >
            <img src={Logo} className="" />
          </Link>
        </div>
        <div className="col-lg-9 col-md-9  col-xl-9 header-info  info">
          <div className="row top-section">
            <div className="col-lg-4 col-md-4 col-xl-4  mail ">
              <i className="fas fa-envelope"></i>
              <span className="mailT">
                {footerContact ? footerContact.email : ""}
              </span>
            </div>
            <div
              className="col-lg-4 col-md-5 col-xl-3 contact"
              style={{ background: "transparent" }}
            >
              <i className="fas fa-phone"></i>
              <span className="mailTt">
                {footerContact ? footerContact.phone : ""}
              </span>
            </div>
            <div className="social col-lg-4 col-md-2 col-xl-3  ">
              <a
                href={footerLinks ? `${footerLinks.facebook}` : ""}
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={footerLinks ? `${footerLinks.insta}` : ""}
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={footerLinks ? `${footerLinks.twitter}` : ""}
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="row below-section">
            <NavBar />
            <MenuToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
