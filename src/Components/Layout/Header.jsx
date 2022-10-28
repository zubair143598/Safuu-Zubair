import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineTwitter} from 'react-icons/ai'
import { FaDiscord} from 'react-icons/fa'
import { FaTelegramPlane} from 'react-icons/fa'

import { AiTwotoneSafetyCertificate} from 'react-icons/ai'


const Header = () => {
  return (
    <nav className="navbar header sticky-top  navborder    navbar-expand-lg bg-black">
      <div className="container-fluid header">
      {/* offcanvas trigger */}
      <button
        className="  navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
       <span className="navbar-toggler-icon bg-white " /> 
      </button>
      {/* offcanvas trigger */}
      <div className='btn1'>
      <a style={{backgroundColor: "#36d33b"}} className="btn border border-dark nav-link text-white fs-3 fw-bolder px-5 py-2 mx-3 my-4 active "  aria-current="page" href="#">
        SAFUU
      </a>
      </div>
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
      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white fs-5 clr" aria-current="page" to="Home">
            <AiOutlineTwitter className='border border-success  rounded-1' size={20}  />
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white clr fs-5" to="OurTeam">
            <FaDiscord className='border border-success  rounded-1' size={20}  />

            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr" to="Swap">
           <FaTelegramPlane className='border text-white border-success  rounded-1' size={20}  />

            </Link>
          </li>
          <li className="nav-item">
          <a className="nav-link fs-5 clr" href="#">
            <AiTwotoneSafetyCertificate className='border  text-white border-success  rounded-1' size={20}  />

            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white border-success border px-4 rounded-2 fs-5 clr" href="#">
              SAFUU
            </a>
          </li>
          <li className="nav-item">
            <a className="border border-success mx-3 btn2 nav-link text-white fs-5 clr" href="#">
            Connect Wallet
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header