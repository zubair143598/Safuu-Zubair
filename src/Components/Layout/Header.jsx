import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar header sticky-top  navbar-expand-lg bg-black">
      <div className="container header">
      {/* offcanvas trigger */}
      <button
        className=" color navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
       <span className="navbar-toggler-icon " /> 
      </button>
      {/* offcanvas trigger */}
      <a style={{backgroundColor: "#36d33b"}} className="btn nav-link text-white fs-3 fw-bolder px-5 py-2 my-4 active" aria-current="page" href="#">
        SAFUU
      </a>

      <button
        className=" color  navbar-toggler"
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
            <Link className="nav-link fs-5 clr" aria-current="page" to="Home">
            Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link clr fs-5" to="OurTeam">
            Litepaper
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr" to="Swap">
            Platform
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 clr" href="#">
            Roadmap
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 clr" href="#">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5 clr" href="#">
            Audit Report
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header