import React from "react";
import { VscRefresh } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const Swap = () => {
  return (
    <div className="Swap-section">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div className="col-md-5 text-white">
            <div className="border border-success  mt-5 p-3 rounded-5">
              <div className="row">
                <div className="col-md-5 col-5">
                  <h5>Swap</h5>
                  <p>Fast, Secure, KYC-Free.</p>
                  <p className="mt-3">From:</p>
                  <p className="mt-3 text-secondary">0.00</p>
                </div>
                <div className="col-md-3 col-2"></div>
                <div className="col-md-4 col-5 text-end">
                  <a href="">
                    <VscRefresh className="iconcolor mx-2" size={30} />
                  </a>

                  <a href="">
                    <AiFillSetting className="iconcolor" size={30} />
                  </a>
                  <p className="mt-5">Balance: 0</p>
                  <div className="row text-end">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">
                      <p className="text-success">Max</p>
                    </div>
                    <div className="col-md-7">
                      <ul className="list-unstyled">
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle text-white "
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            BNB
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark bg-black">
                            <li>
                              <a className="dropdown-item" href="#">
                                BNB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                SAFUU
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row text-center my-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <AiOutlineArrowDown className="text-success" size={25} />
                </div>
                <div className="col-md-4"></div>
              </div>

              <div className="row">
                <div className="col-md-5 col-7">
                  <p className="mt-5 ">To:</p>
                  <p className="mt-3 text-secondary">0.00</p>
                  <p className="">Slippage Tolerance</p>
                </div>
                <div className="col-md-3 col-1"></div>
                <div className="col-md-4 col-4 text-end">
                  <p className="mt-5">Balance: 0</p>
                  <div className="row text-end">
                    <div className="col-md-3"></div>
                    <div className="col-md-2 col-4">
                      <p className="text-success">Max</p>
                    </div>
                    <div className="col-md-7 col-7">
                      <ul className="list-unstyled">
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle text-white "
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            BNB
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark bg-black">
                            <li>
                              <a className="dropdown-item" href="#">
                                BNB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                SAFUU
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <p className="text-success fs-5">0.1%</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <a href="" className="btn btn2  w-100 py-3">
                    Connect Wallet
                  </a>
                </div>
                <div className="col-md-1"></div>
              </div>
              <div className="row">
                <div className="col-md-5 col-7 mt-3">
                  <p className="m-0 p-0">Minimum received</p>
                  <p className="m-0 p-0">Price Impact</p>
                  <p className="m-0 p-0">Liquidity Provider Fee</p>
                  <p className="m-0 p-0">Route</p>
                </div>
                <div className="col-md-3 col-1"></div>
                <div className="col-md-4 col-4 text-end mt-3">
                  <p className="m-0 p-0">0 SAFUU</p>
                  <p className="m-0 p-0">0%</p>
                  <p className="m-0 p-0">0% - No Fee</p>
                  <p className="m-0 p-0">{"SAFUU < -- > BNB"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
