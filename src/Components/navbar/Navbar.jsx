import React from "react";
import "../../css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-c py-4">
        <div className="container">
          <Link className="navbar-brand text-white fw-bold fs-2" to="">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-bold fs-6 me-4 actnav-link text-whive"
                  aria-current="page"
                  to="about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-bold fs-6 me-4"
                  to="PORTFOLIO"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-bold fs-6 me-4"
                  to="CONTACT"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
