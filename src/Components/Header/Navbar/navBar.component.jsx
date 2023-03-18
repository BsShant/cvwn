import React, { useState } from "react";
import "./navBar.styles.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav, NavDropdown, NavItem } from "react-bootstrap";
import MobileMenu from "../../MobileMenu/MobileMenu";

export default function NavBar() {
  const [resource, setResource] = useState(false);
  const showResourceDropdown = (e) => {
    setResource(!resource);
  };
  const hideResourceDropdown = (e) => {
    setResource(false);
  };
  const [getInvolved, setGetInvolved] = useState(false);
  const showGetInvolvedDropdown = (e) => {
    setGetInvolved(!getInvolved);
  };
  const hideGetInvolvedDropdown = (e) => {
    setGetInvolved(false);
  };
  return (
    <div className="container-fluid main-menu">
      <div className="  navBar ">
        <div className=" navbar">
          <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm text-white navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse "
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse header-nav"
              id="navbarNavDropdown "
            >
              <Nav>
                <NavItem>
                  <Link
                    className="nav-link"
                    id="navbarDropdownMenuLink"
                    to="/"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    id="navbarDropdownMenuLink"
                    to="/about"
                    aria-expanded="false"
                  >
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    id="navbarDropdownMenuLink"
                    to="/gallery"
                    aria-expanded="false"
                  >
                    Gallery
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    id="navbarDropdownMenuLink"
                    to="/projects"
                    aria-expanded="false"
                  >
                    Projects
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    className="nav-link"
                    id="navbarDropdownMenuLink"
                    to="/events"
                    aria-expanded="false"
                  >
                    Events
                  </Link>
                </NavItem>
                <NavDropdown
                  show={resource}
                  onMouseEnter={showResourceDropdown}
                  onMouseLeave={hideResourceDropdown}
                  title="Resources"
                  id="nav-dropdown"
                >
                  <NavDropdown.Item eventKey="4.1">
                    <Link
                      className="dropdown-item"
                      id="navbarDropdownMenuLink"
                      to="/resources/annual-report "
                      aria-expanded="false"
                    >
                      Annual Report
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">
                    <Link
                      className="dropdown-item"
                      id="navbarDropdownMenuLink"
                      to="/resources/case-study-report  "
                      aria-expanded="false"
                    >
                      Case Studies Report
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">
                    <Link
                      className="dropdown-item"
                      id="navbarDropdownMenuLink"
                      to="/resources/case-story"
                      aria-expanded="false"
                    >
                      Case Story
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.4">
                    <Link
                      className="dropdown-item"
                      id="navbarDropdownMenuLink"
                      to="/resources/publication"
                      aria-expanded="false"
                    >
                     Publication
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.5">
                    <Link
                      className="dropdown-item"
                      id="navbarDropdownMenuLink"
                      to="/resources/article"
                      aria-expanded="false"
                    >
                      Article
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Get Involved"
                  id="nav-dropdown"
                  show={getInvolved}
                  onMouseEnter={showGetInvolvedDropdown}
                  onMouseLeave={hideGetInvolvedDropdown}
                >
                  <NavDropdown.Item eventKey="4.1">
                    <Link
                      className="dropdown-item a"
                      id="navbarDropdownMenuLink"
                      to="/get-involved/announcement "
                      aria-expanded="false"
                    >
                      Announcement
                    </Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item eventKey="4.2">
                      <Link
                        className="dropdown-item"
                        id="navbarDropdownMenuLink"
                        to="/get-involved/volunteer "
                        aria-expanded="false"
                      >
                        Volunteer
                      </Link>
                    </NavDropdown.Item> */}
                  <NavDropdown.Item eventKey="4.3">
                    <Link
                      className="dropdown-item"
                      id="navbarDropdownMenuLink"
                      to="/get-involved/donate "
                      aria-expanded="false"
                    >
                      Donate
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavItem>
                  <Link
                    className="nav-link"
                    id="navbarDropdownMenuLink"
                    to="/contact"
                    aria-expanded="false"
                  >
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </div>
          </nav>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
