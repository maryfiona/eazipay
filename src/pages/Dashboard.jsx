import React, { useState } from "react";
import "./Dashboard.css";
import Easi2 from "../assets/Easi2.png";
import Dash from "../assets/Dash.png";
import Wallet from "../assets/Wallet.png";
import Comp from "../assets/Comp.png";
import Employ from "../assets/Employ.png";
import Pay from "../assets/Pay.png";
import Loan from "../assets/Loan.png";
import Book from "../assets/Book.png";
import Logo from "../assets/Logo.png";
import Admin from "../assets/Admin.png";
import Fund from "../assets/Fund.png";
import Data from "../assets/Data.png";
import Ploy from "../assets/Ploy.png";
import Salary from "../assets/Salary.png";
import get from "../assets/get.png";
import plain from "../assets/plain.png";
import graph from "../assets/graph.png";
import FilterIcon from "../assets/FilterIcon.png";
import BM from "../assets/BM.png";
import head from "../assets/head.png";
import SearchIcon from "../assets/SearchIcon.png";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar bg-white shadow-sm vh-100 position-fixed top-0 start-0 overflow-y-auto">
      <div className="h-100 d-flex flex-column justify-content-start gap-4">

        <img src={Easi2} alt="Easi2" style={{ cursor: "pointer" }} onClick={() => { navigate('/') }} />

        <div className="d-flex flex-column">
          {[
            { icon: Dash, title: "Dashboard", link: "/" },
            { icon: Wallet, title: "Wallet", link: "/" },
            { icon: Employ, title: "Employee Management", link: "/" },
            { icon: Pay, title: "Payroll", link: "/" },
            { icon: Comp, title: "Compliance", link: "/" },
            { icon: Loan, title: "Quick Loan", link: "/" },
            { icon: Book, title: "Book Keeping", link: "/" },
          ].map(({ icon, title, link }) => (
            <SidebarItem icon={icon} title={title} link={link} />
          ))}
        </div>

        <div className="d-flex flex-column">
          {[
            { icon: Book, title: "Support", link: "/" },
            { icon: Book, title: "Settings", link: "/" },
          ].map(({ icon, title, link }) => (
            <SidebarItem icon={icon} title={title} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}
const SidebarItem = ({ icon, title, link }) => {
  return (
    <li style={{ cursor: "pointer" }} className="d-flex gap-2 w-100 align-items-center p-3 text-grey border-bottom">
      <img src={icon} alt={title} width={20} height={20} />
      <Link to={link} className="text-decoration-none text-grey">
        {title}
      </Link>
    </li>
  );
};
const Topbar = () => {
  return (
    <div className="topbar sticky-top bg-white shadow-sm d-flex align-items-center">
      <div className="container w-100 d-flex justify-content-between align-items-center">
        <img height={58} width={117} src={Logo} alt="Logo" />
        <img height={56} width={313} src={Admin} alt="Admin" />
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <>
      <div className="bg-dashboard min-h-100">
        <Sidebar />
        <main className="main position-relative top-0 overflow-y-auto">
          <Topbar />
          <div className="container p-5 d-flex flex-column gap-5 overflow-y-auto">
            {/* welcome note */}
            <div className="d-flex flex-column gap-0">
              <h1 className="m-0">Welcome Abasiama</h1>
              <p className="m-0">Pay and manage your employee in minutes</p>
            </div>

            {/* stats */}
            <div>
              <div className="d-flex w-100 justify-content-between py-3">
                <div className="d-flex w-100 flex-column gap-3">
                  <img className="w-100 radius-25" src={Fund} alt="Fund" />
                  <div className="d-flex gap-3">
                    {
                      [
                        { image: Ploy, title: "Add Employee" },
                        { image: Salary, title: "Pay Salaries" },
                        { image: plain, title: "Pay Compliances" },
                        { image: get, title: "Quick Loan" },
                      ].map(({ image, title }) => (
                        <div className="w-25 radius-25 bg-white p-3 border border-2 shadow d-flex flex-column gap-2 align-items-center justify-content-center">
                          <img width={48} height={48} src={image} alt={title} />
                          <p className="text-grey">{title}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div>
                  <img src={Data} alt="Data" />
                </div>
              </div>
            </div>

            {/* graph */}
            <div className="bg-white shadow radius-25 p-5">
              <div className="row">
                <div className="col-md-4">
                  <p>Inflow</p>
                  <h5 className="text-success">N1,567,552</h5>
                </div>
                <div className="col-md-4 ">
                  <p>Outflow</p>
                  <h5 className="text-danger">N1,567,552</h5>
                </div>
                <div className="col-md-4 flow">
                  <p className="text-success">Inflow/Outflow</p>
                </div>
              </div>

              <div>
                <img width={650} src={graph} alt="graph" />
              </div>

              <div>
                <button className="graph-button">2022</button>
              </div>
            </div>

            {/* recent activities */}
            <div className="w-100 d-flex flex-column gap-4">
              <h3>Recent Activities</h3>

              <div className="w-100 d-flex gap-2">
                <div className="w-100 input-group radius-25">
                  <input className="input form-control radius-25" name="text" placeholder="Search employee" />
                  <button style={{ width: '10%' }} className="btn bg-light-green radius-25">
                    <img width={24} height={24} src={SearchIcon} alt="search" />
                  </button>
                </div>
                <button style={{ width: '10%' }} className="btn bg-white border text-grey radius-25 d-flex align-items-center d-flex gap-2 justify-content-center">
                  <img width={18} height={18} src={FilterIcon} alt="filter" />
                  <span>Filter</span>
                </button>
              </div>

              <div className="radius-25 bg-grey d-flex flex-column gap-5 py-5 px-4">

                <div className="d-flex flex-column gap-2">
                  <h6>Wednesday, November 09, 2022</h6>

                  <div className="d-flex flex-column gap-2 bg-white border shadow radius-25 py-2 px-5">
                    <p className="m-0">PAYROLL</p>
                    <div className="w-100 row">
                      <div className="col-4 mt-4 d-flex align-items-center gap-3">
                        <img width={32} height={32} src={BM} alt="BM" />
                        <p className="m-0">Badmus Kemis</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">ACTIVITY</p>
                        <p className="m-0">Paid November 2022 salary</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">EMPLOYEE</p>
                        <p className="m-0">52</p>
                      </div>
                      <div className="col-2">
                        <p className="m-0">TIME</p>
                        <p className="m-0">16:15</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2 bg-white border shadow radius-25 py-2 px-5">
                    <p className="m-0">EMPLOYEE MANAGEMENT</p>
                    <div className="w-100 row">
                      <div className="col-4 mt-4 d-flex align-items-center gap-3">
                        <img width={32} height={32} src={head} alt="BM" />
                        <p className="m-0">Kalu Abasiama</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">ACTIVITY</p>
                        <p className="m-0">Added new employee</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">EMPLOYEE</p>
                        <p className="m-0">04</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-2">
                  <h6>Friday, November 04, 2022</h6>

                  <div className="d-flex flex-column gap-2 bg-white border shadow radius-25 py-2 px-5">
                    <p className="m-0">BONUS</p>
                    <div className="w-100 row">
                      <div className="col-4 mt-4 d-flex align-items-center gap-3">
                        <img width={32} height={32} src={BM} alt="BM" />
                        <p className="m-0">Badmus Kemis</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">ACTIVITY</p>
                        <p className="m-0">Added new bonus</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">BONUS NAME</p>
                        <p className="m-0">XMAS Bonus</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2 bg-white border shadow radius-25 py-2 px-5">
                    <p className="m-0">PAYROLL</p>
                    <div className="w-100 row">
                      <div className="col-4 mt-4 d-flex align-items-center gap-3">
                        <img width={32} height={32} src={BM} alt="BM" />
                        <p className="m-0">Badmus Kemis</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">ACTIVITY</p>
                        <p className="m-0">Paid November 2022 salary</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0">AMOUNT</p>
                        <p className="m-0 text-danger">N11,1678,900.00</p>
                      </div>
                      <div className="col-2">
                        <p className="m-0">TIME</p>
                        <p className="m-0">15:21</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </main>
      </div>
    </>
  );
};

export default Dashboard;

