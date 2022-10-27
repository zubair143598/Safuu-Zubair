import React from "react";

const Hero = () => {
  return (
    <div className="Hero-section">
      <div className="container text-white text-center">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-3 ">
            <div className="mb-5">
              <h4 className="mt-5 fw-bolder">Market Value of Treasury Asset</h4>
              <h4 className="text-success fw-bolder mb-5">$58,229,903</h4>
            </div>
            <div className="border border-success p-2 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">Total supplay</h4>
              <h4 className="text-success fw-bolder">61,634,066.59</h4>
            </div>
            <div className="border border-success mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">Circulating Supply</h4>
              <h4 className="text-success fw-bolder">45,337,883.34</h4>
            </div>
            <div className="border border-success mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder"># Value of FirePit</h4>
              <h4 className="text-success fw-bolder">16,296,183.24 SAFUU</h4>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="border border-success mt-5 p-3 rounded-3">
              <a href="" className="btn border fs-4 border-success text-white">
                SAFUU PRICE
              </a>
              <h4 className="text-success fs-4 mt-3 mb-5 fw-bolder">$1.54</h4>
              <h4 className="border border-success rounded-5 p-5">timer</h4>
              <h4 className=" pt-5">Rebasing...</h4>
            </div>
            <div className="border border-success mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder"># Value of FirePit</h4>
              <h4 className="text-success fw-bolder">16,296,183.24 SAFUU</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className="mb-5">
              <h4 className="mt-5 fw-bolder">SAFUU Insurance Fund Value</h4>
              <h4 className="text-success fw-bolder mb-5">$8762</h4>
            </div>MarketCap

            <div className="border border-success p-2 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">MarketCap</h4>
              <h4 className="text-success fw-bolder">$70,235,066</h4>
            </div>

            <div className="border border-success mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">Pool Value</h4>
              <h4 className="text-success fw-bolder">$9,146,879</h4>
            </div>

            <div className="border border-success mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">% FirePit : Supply</h4>
              <h4 className="text-success fw-bolder">26.44%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
