import React from "react";
import { Link } from "react-router-dom";
import {RiDashboardLine} from "react-icons/ri"
import {MdOutlineAccountBox} from "react-icons/md"
import {IoMdSwap} from "react-icons/io"
import {BsFillCalculatorFill} from "react-icons/bs"
import {SiPlausibleanalytics} from "react-icons/si"
import {HiDocumentText} from "react-icons/hi"

const Dashboard1 = () => {
  return (
    <div className="Dashboard1-section">
      
      
      <div
        className="offcanvas border-danger  bg-black offcanvas-start sidebar-nav"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="container">
        <div className="offcanvas-body p-0">
            <nav className="navbar-dark">
            <ul className="navbar-nav ms-auto listBorder   mb-2 mb-lg-0">

            <li className="nav-item">
            <Link className="nav-link fs-5  mt-3 btn" aria-current="page" to="Home">
            <img src="./Assists/safuu-logo.png" className="w-75" alt="" />
            </Link>
          </li>
            <li className="nav-item">
            <Link className="nav-link fs-5 clr mt-3  btn" aria-current="page" to="Home">
                <RiDashboardLine className="mx-3 iconcolor" size={30}/>
            Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr mt-3 btn" aria-current="page" to="Home">
                <MdOutlineAccountBox className="mx-3 iconcolor" size={30}/>
            Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr mt-3 btn " aria-current="page" to="Home">
            <IoMdSwap className="mx-3 iconcolor" size={30}/>

            Swap
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr mt-3 btn" aria-current="page" to="Home">
            <BsFillCalculatorFill className="mx-3 iconcolor " size={30} />

            Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr mt-3 btn" aria-current="page" to="Home">
            <SiPlausibleanalytics className="mx-3 iconcolor " size={30} />

            Analytics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5 clr mt-3 btn" aria-current="page" to="Home">
            <HiDocumentText className="mx-3 iconcolor" size={30}/>

            Features
            </Link>
          </li>
            </ul>
       
            </nav>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
