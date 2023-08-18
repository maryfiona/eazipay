import React, { useState } from "react";
import "../Dashboard.css";
import "./mobile.css";

import Notify from "../../assets/Notify.png";

import Salary from "../../assets/Salary.png";
import Ploy from "../../assets/Ploy.png";
import Payslip from "../../assets/Payslip.png";
import EditSalaries from "../../assets/EditSalaries.png";
import get from "../../assets/get.png";
import plain from "../../assets/plain.png";
import Airtime from "../../assets/Airtime.png";
import Wifi from "../../assets/Wifi.png";
import Electricity from "../../assets/Electricity.png";
import MobileDash from "../../assets/MobileDash.png";
import ProfilePicture from "../../assets/ProfilePicture.png";
import MobileTemplate from "./MobileTemplate";

const MobileDashboard = () => {
  return (
    <MobileTemplate>
      <div className="container h-100 py-4 d-flex gap-5 flex-column justify-content-start">
        {/* top */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex gap-3 align-items-center">
            <img src={ProfilePicture} alt="Profile" />
            <h3 className="text-dark">Hello Wasiu</h3>
          </div>
          <button className="btn">
            <img src={Notify} alt="Notification" />
          </button>
        </div>

        {/* balance */}
        <div>
          <img src={MobileDash} alt="Dash" className="w-100 radius-25" />
        </div>

        {/* quick stats */}
        <div className="d-flex flex-column gap-2">
          <p className="fw-light">QUICK STATS</p>
          <div className="d-flex gap-2">
            {
              [
                { title: "Total Payroll", details: "N 2,293,044,345.05" },
                { title: "Total Employee", details: "10,000" }
              ].map(({ title, details }) => (
                <div style={{ width: "50%" }} className="bg-grey radius-25 text-dark py-4 px-2 d-flex  flex-column justify-content-center">
                  <p className="m-0">{title}</p>
                  <b className="m-0">{details}</b>
                </div>
              ))
            }
          </div>
        </div>

        {/* quick actions */}
        <div className="d-flex flex-column gap-2">
          <p className="fw-light">QUICK ACTIONS</p>
          <div className="w-100 d-flex justify-content-between flex-wrap gap-2">
            {
              [
                { image: Salary, title: "Pay Salaries" },
                { image: Ploy, title: "Add Employee" },
                { image: Payslip, title: "Send Payslips" },
                { image: EditSalaries, title: "Edit Salaries" },
                { image: get, title: "Get a Loan" },
                { image: plain, title: "Make a Tranfer" },
                { image: Airtime, title: "Airtime" },
                { image: Wifi, title: "Data" },
                { image: Electricity, title: "Electricity" },
              ].map(({ image, title }) => (
                <button style={{ width: '30%' }}
                  className="btn radius-25 bg-white p-3 d-flex flex-column gap-2 align-items-center justify-content-start">
                  <img width={48} height={48} src={image} alt={title} />
                  <p className="text-grey text-center">{title}</p>
                </button>
              ))
            }
          </div>
        </div>

      </div>
    </MobileTemplate>
  );
};

export default MobileDashboard;
