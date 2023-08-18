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
import EmployeeCount from "../../assets/EmployeeCount.png";
import MobileTemplate from "./MobileTemplate";
import avatar from "../../assets/avatar.png";

const EmployeeTab = ({ name, role, details, salary }) => {
  return (
    <div className="w-100 d-flex gap-1 p-2 radius-25 border bg-white">
      <img width={48} height={48} src={avatar} alt="User Avatar" />
      <div className="d-flex flex-column gap-0">
        <h3 className="m-0 text-grey">{name}</h3>
        <p className="m-0 text-grey">{role}</p>
        <div className="d-flex gap-3 justify-content-between">
          <h5 className="m-0 text-grey">{details}</h5>
          <h4 className="text-green fw-bold">{salary}</h4>
        </div>
      </div>
    </div>
  )
}

const Employee = () => {
  return (
    <MobileTemplate>
      <div className="container h-100 py-4 d-flex gap-4 flex-column justify-content-start">

        <div className="border-bottom">
          <h3 className="text-center fw-bold">Eazipay's Team</h3>
        </div>

        {/* balance */}
        <div>
          <img src={EmployeeCount} alt="Dash" className="w-100 radius-25" />
        </div>

        <div className="d-flex w-100 p-2 border radius-25 gap-2">
          <button className="btn w-100 bg-green radius-25 fw-bold text-white">All Employee</button>
          <button className="btn w-100 bg-grey radius-25 fw-bold text-green">Departments</button>
        </div>

        <div className="d-flex flex-column gap-3">
          {[
            { name: "Caleb Nwafor", role: "Accountant", details: "Female | Monthly", salary: "N250,600.78" },
            { name: "Wasiu Tiamiyu", role: "Product Designer", details: "Male | Monthly", salary: "N550,600.78" },
            { name: "Toyin Faleke", role: "Product Manager", details: "Female | Monthly", salary: "N700,600.78" },
            { name: "Caleb Nwafor", role: "Accountant", details: "Female | Monthly", salary: "N250,600.78" },
            { name: "Wasiu Tiamiyu", role: "Product Designer", details: "Male | Monthly", salary: "N550,600.78" },
            { name: "Toyin Faleke", role: "Product Manager", details: "Female | Monthly", salary: "N700,600.78" },
          ].map(({ name, role, details, salary }) => (
            <EmployeeTab name={name} role={role} details={details} salary={salary} />
          ))}
        </div>

      </div>
    </MobileTemplate>
  );
};

export default Employee;
