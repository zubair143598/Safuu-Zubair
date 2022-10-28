import React from "react";

const Calculator = () => {
  return (
    <div className="Calculator-section">
      <div className="container text-white">
        <div className="row ">
          <div className="col-lg-4 "></div>
          <div className="col-lg-7 border rounded-5 border-success">
            <div className="row">
              <div className="col-lg-12">
                <h5 className="mt-2">Calculator</h5>
                <p className="">Estimate your returns</p>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-lg-4 col-12 text-start px-4">
                <h4 className="m-0 mt-4 text-secondary">SAFUU Price</h4>
                <h3 className="m-0">$1.53</h3>
              </div>
              <div className="col-lg-4 col-6">
                <h4 className="m-0 mt-4 text-secondary">Current Pay</h4>
                <h3 className="m-0">383,025.8%</h3>
              </div>
              <div className="col-lg-4 col-6">
                <h4 className="m-0 mt-4 text-secondary">Your SAFUU Balance</h4>
                <h3 className="m-0">0 SAFUU</h3>
              </div>
            </div>

            <form action="">
              <div className="row mt-5">
                <div className="col-md-6">
                  <label htmlFor="">
                    <h5> SAFUU Amount</h5>
                  </label>
                  <input
                    type="number"
                    placeholder="0                                                              max"
                    className="form-control bg-secondary "
                  />
                  <br />
                  <label htmlFor="">
                    <h5> SAFUU price at purchase ($)</h5>
                  </label>
                  <input
                    type="number"
                    placeholder="0                                                              max"
                    className="form-control bg-secondary "
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">
                    <h5> SAFUU Amount</h5>
                  </label>
                  <input type="number" className="form-control bg-secondary" />
                  <br />
                  <label htmlFor="">
                    <h5> SAFUU price at purchase ($)</h5>
                  </label>
                  <input
                    type="number"
                    placeholder="0                                                              max"
                    className="form-control mb-5 bg-secondary "
                  />
                </div>
                {/* <div className="col-md-4"></div> */}
              </div>
            </form>
          </div>
          <div className="col-lg-1 "></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
