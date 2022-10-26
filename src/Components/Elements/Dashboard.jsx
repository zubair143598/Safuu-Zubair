import React from "react";
import { AiOutlineTable } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <nav className="navbar header   navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="container  border border-success">
          {/* <div className="row"> */}
          <button
            className=" color navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="col-md-12 collapse navbar-collapse dashbordcol"
            id="navbarSupportedContent"
          >
            <ul className="list-unstyled">
              <li className="nav-item">
                <img className="w-100" src="./Assists/safuu-logo.png" alt="" />
                <br />
              </li>
              <li className="nav-item">
                
                <a className="btn nav-link clr mt-3 px-4 py-3" href="">
                  
                  <AiOutlineTable /> Dashbord
                </a>
                <br />
              </li>
              <li className="nav-item">
                <a className="btn nav-link clr mt-3  px-4 py-3" href="">
                  <BsFillPersonFill /> Dashbord
                </a>
                <br />
              </li>
              <li className="">
                <a className="btn  mt-3 px-4 py-3" href="">
                  {" "}
                  Dashbord
                </a>
                <br />
              </li>
              <li className="nav-item">
                <a className="btn  mt-3  px-4 py-3" href="">
                  
                  Dashbord
                </a>
              </li>
                <br />
              <li className="nav-item">
                {" "}
                <a className="btn  mt-3  px-4 py-3" href="">
                  {" "}
                  Dashbord
                </a>
                <br />
              </li>
              <li className="nav-item">
                {" "}
                <a className="btn  mt-3 mb-5 px-4 py-3" href="">
                  {" "}
                  Dashbord
                </a>
                <br />
              </li>
            </ul>
          </div>

          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Dashboard;
