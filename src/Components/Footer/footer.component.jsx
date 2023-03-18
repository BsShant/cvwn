import React from "react";
import CustomButton from "../Custom button/custom-button.component";
import "./footer.styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useSelector } from "react-redux";

export default function Footer() {
  const footerAbout = useSelector((state) => state.footerStore.footerAbout);
  const footerContact = useSelector((state) => state.footerStore.footerContact);
  const footerLinks = useSelector((state) => state.footerStore.footerLinks);

  return (
    <div className="container-fluid footer-section">
      <div className="container footer-info">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="row">
              <div className="col-3" style={{ paddingBottom: "15px" }}>
                <p>{footerAbout ? footerAbout.about : ""}</p>

                <div
                  className="container-footer"
                  style={{
                    marginLeft: "0px",
                    width: "60%",
                    paddingLeft: "0px",
                  }}
                >
                  <div className="outer-frame">
                    {/* <div className="inner-frame"> */}
                    <img
                      src={Logo}
                      className="img-fluid"
                      style={{ backgroundColor: "wihte" }}
                    />

                    {/* </div> */}
                  </div>
                </div>
                {/* <div style={{backgroundColor:"blue"}}>
                            <div className='inner-frame' >
                            <img src={Logo} className='img-fluid'style={{backgroundColor:"wihte"}} />
                            </div>
                            </div> */}
              </div>

              <div className="col-1">
                {/* 
<p>STRENGTHENING VOICES</p>

<div className='outer-frame'>
    <div className="inner-frame">
    <img src={Logo} className='img-fluid'style={{backgroundColor:"wihte"}} />

    </div>
</div> */}
                {/* <div style={{backgroundColor:"blue"}}>
<div className='inner-frame' >
<img src={Logo} className='img-fluid'style={{backgroundColor:"wihte"}} />
</div>
</div> */}
              </div>

              <div className="col-3 touch">
                <p>GET IN TOUCH</p>

                <span className="details">
                  {footerContact ? footerContact.address : ""}
                  <br />
                </span>
                <span className="details">
                  {footerContact ? footerContact.phone : ""}
                  <br />
                </span>
                <span className="details">
                  {footerContact ? footerContact.email : ""}
                </span>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
                <p>SITEMAP</p>
                <div className="sitemap">
                  <Link
                    className="nav-link sitemap"
                    id="offcanvasRight"
                    to="/"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                  <Link
                    className="nav-link sitemap"
                    id="offcanvasRight"
                    to="/about"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                  <div className="nav-item sitemap">
                    <a
                      className="nav-link sitemap"
                      href="#"
                      id="offcanvasRight"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ textAlign: "left", margin: "0" }}
                    >
                      Project
                    </a>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="offcanvasRight"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          id="offcanvasRight"
                          to="/project/strengthening-access-to-justice"
                          aria-expanded="false"
                        >
                          Strengthening Access to Justice
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          id="offcanvasRight"
                          to="project/women-leadership-skill-development"
                          aria-expanded="false"
                        >
                          Women Leadership & Skill Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                    className="nav-link sitemap"
                    id="offcanvasRight"
                    to="/events"
                    aria-expanded="false"
                  >
                    Event
                  </Link>
                  <div className="nav-item sitemap">
                    <a
                      className="nav-link sitemap"
                      href="#"
                      id="offcanvasRight"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ textAlign: "left", margin: "0" }}
                    >
                      Resources
                    </a>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="offcanvasRight"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          id="offcanvasRight"
                          to="/resources/annual_report "
                          aria-expanded="false"
                        >
                          Annual Report
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          id="offcanvasRight"
                          to="/resources/case_study_report  "
                          aria-expanded="false"
                        >
                          Case Studies Report
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          id="offcanvasRight"
                          to="/resources/article"
                          aria-expanded="false"
                        >
                          Article
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item sitemap">
                    <a
                      className="nav-link sitemap"
                      href="#"
                      id="offcanvasRight"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        textAlign: "left",
                        margin: "0",
                        paddingBottom: "0px",
                      }}
                    >
                      Get Involved
                    </a>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="offcanvasRight"
                    >
                      <li>
                        <Link
                          className="dropdown-item a"
                          id="offcanvasRight"
                          to="/get-involved/announcement "
                          aria-expanded="false"
                        >
                          Announcement
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          id="offcanvasRight"
                          to="/get-involved/volunteer  "
                          aria-expanded="false"
                        >
                          Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          id="offcanvasRight"
                          to="/get-involved/donate"
                          aria-expanded="false"
                        >
                          Donate
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 newsletter-section">
            <div className="newsletter">
              <p>CONNECT WITH US</p>
              <div className="social-icon">
                <a
                  href={footerLinks ? `${footerLinks.facebook}` : ""}
                  target="_blank"
                >
                  <i className="fab fa-facebook-f facebookicon" />
                </a>
                <a
                  href={footerLinks ? `${footerLinks.insta}` : ""}
                  target="_blank"
                >
                  {" "}
                  <i className="fab fa-instagram instagramicon" />
                </a>
                <a
                  href={footerLinks ? `${footerLinks.twitter}` : ""}
                  target="_blank"
                >
                  {" "}
                  <i className="fab fa-twitter twittericon" />
                </a>
                <a
                  href={footerLinks ? `${footerLinks.youtube}` : ""}
                  target="_blank"
                >
                  {" "}
                  <i class="fab fa-youtube youtubeicon" ></i>
                </a>
              </div>

              {/* <i className='fab fa-facebook-f facebookicon'/>  */}
              {/* <span className='newsletter-txt'>
                        Stay Upto Date With VOW News, Programs And Appeals
                        </span> */}
              {/* <form className='msg-us'>
                            <input type='email' placeholder='Your email address' name='email'/>
                           <CustomButton children="Subscribe"/>
                        </form> */}
              <div class="contact-btn">
                <Link
                  class="main-btnn"
                  to="./contact"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  Send Us a Message{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
