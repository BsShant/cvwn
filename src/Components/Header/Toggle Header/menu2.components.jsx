import React from "react";
import { Link } from "react-router-dom";
import "./menu2.styles.scss";

export default function MenuToggle() {
  return (
    <div className="menutoggle">
      <button
        class=" myButton"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span className="canvasToggler">
          <i className="fas fa-bars" />
        </span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="collapse navbar-collapse " id="offcanvasRight ">
            <div className="nav-item dropdown">
              <Link
                className="nav-link"
                id="offcanvasRight"
                to="/"
                aria-expanded="false"
              >
                Home
              </Link>
            </div>
            <div className="nav-item dropdown">
              <Link
                className="nav-link"
                id="offcanvasRight"
                to="/about"
                aria-expanded="false"
              >
                About
              </Link>
            </div>
            <div className="nav-item dropdown">
              <Link
                className="nav-link"
                id="offcanvasRight"
                to="/projects"
                aria-expanded="false"
              >
                Project
              </Link>
            </div>
            <div className="nav-item dropdown">
              <Link
                className="nav-link"
                id="offcanvasRight"
                to="/events"
                aria-expanded="false"
              >
                Event
              </Link>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link "
                href="#"
                id="offcanvasRight"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu " aria-labelledby="offcanvasRight">
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
            <div className="nav-item dropdown">
              <a
                className="nav-link "
                href="#"
                id="offcanvasRight"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Get Involved
              </a>
              <ul className="dropdown-menu " aria-labelledby="offcanvasRight">
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
            <div className="nav-item dropdown">
              <Link
                className="nav-link"
                id="offcanvasRight"
                to="/contact"
                aria-expanded="false"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
