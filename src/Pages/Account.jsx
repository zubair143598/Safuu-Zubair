import React from "react";

const Account = () => {
  return (
    <div className="account-section">
      <div className="container  text-white">
        <div className="row text-center">
          <div className="col-lg-2"></div>
          <div className="col-lg-3">
            <div className="compborder mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">Your Balance</h4>
              <h1 className="text-success fw-bolder">$0</h1>
              <h4 className=" fw-bolder">16,296,183.24 SAFUU</h4>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="compborder mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">APY</h4>
              <h1 className="text-success fw-bolder">383,025.8%</h1>
              <h4 className=" fw-bolder">Daily ROI 2.28%</h4>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="compborder mt-5 p-3 rounded-3">
              <h4 className="fs-4 p-0 fw-bolder">Next Rebase:</h4>
              <h1 className="text-success fw-bolder">00:11:52</h1>
              <h4 className=" fw-bolder">Rebasing...</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-9 compborder  mt-5 p-3 rounded-3">
            <div className="row">
              <div className="col-lg-4 col-7">
                <h5 className="">Current SAFUU Price</h5>
                <h5 className="mt-3">Next Reward Amount</h5>
                <h5 className="mt-3">Next Reward Amount USD</h5>
                <h5 className="mt-3">Next Reward Yield</h5>
                <h5 className="mt-3">ROI(1-Day Rate) USD</h5>
                <h5 className="mt-3">ROI(5-Day Rate)</h5>
                <h5 className="mt-3">ROI(5-Day Rate) USD</h5>
              </div>
              <div className="col-lg-5 col-1"></div>
              <div className="col-lg-3 col-4 text-end">
                <h3>$1.54</h3>
                <h3>0 SAFUU</h3>
                <h3 className="mt-md-0 mt-2">$0</h3>
                <h3 className="mt-md-0 mt-5">0.02355%</h3>
                <h3>$0</h3>
                <h3>11.96%</h3>
                <h3>$0</h3>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
