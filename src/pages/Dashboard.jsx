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
import search from "../assets/search.png";
import BM from "../assets/BM.png";
import head from "../assets/head.png";
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
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <div className="container p-5 d-flex flex-column gap-3 overflow-y-auto">
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
            <div>
              <div>
                <h3>Recent Activities</h3>
              </div>
              <input className="search" name="text" placeholder="Search employee" />
              <button className="">
              <img className="botton" src={search} alt="search" />
              </button>
            

            </div>
            <div className="container ">
            <h3>Wednesday, November 09, 2022</h3>
                       </div>
            <div className="box1 d-flex">
                 <p>PAYROLL</p>
            <div className=" col-md-3 bm">
                 <img src={BM} alt="BM" />
                 <p className="bad">Badmus Kemis</p>
               </div>
               <div className="col-md-3">
                 <p>ACTIVITY</p>
                 <p>Paid November 2022 salary</p>
               </div>
               <div className="col-md-3">
                 <p>EMPLOYEE</p>
                 <p>52</p>
               </div>
               <div className="col-md-2">
                 <p>TIME</p>
                 <p>16:15</p>
              </div>

            </div>
            
            <div className="box1 d-flex">
                 <p>EMPLOYEE MANAGEMENT</p>
            <div className=" col-md-3 bm">
                 <img src={head} alt="head" />
                 <p className="bad">Kalu Abasiama</p>
               </div>
               <div className="col-md-3">
                 <p>ACTIVITY</p>
                 <p>Added new employee</p>
               </div>
               <div className="col-md-3">
                 <p>EMPLOYEE</p>
                 <p>04</p> 
               </div>
               

            </div>
            <div className="container ">
            <h3>Friday, November 04, 2022</h3>
                       </div>
            <div className="box1 d-flex">
                 <p>BONUS</p>
            <div className=" col-md-3 bm">
                 <img src={BM} alt="BM" />
                 <p className="bad">Badmus Kemis</p>
               </div>
               <div className="col-md-3">
                 <p>ACTIVITY</p>
                 <p>Added new bonus</p>
               </div>
               <div className="col-md-3">
                 <p>BONUS NAME</p>
                 <p>XMAS Bonus</p>
               </div>
            </div>
            
            <div className="box1 d-flex">
                 <p>WALLET</p>
            <div className=" col-md-3 bm">
                 <img src={BM} alt="BM " />
                 <p className="bad">Badmus Kemis</p>
               </div>
               <div className="col-md-3">
                 <p>ACTIVITY</p>
                 <p>Paid November 2022 salary</p>
               </div>
               <div className="col-md-3">
                 <p>AMOUNT</p>
                 <p>N11,1678,900.00</p>
               </div>
               <div className="col-md-2">
                 <p>TIME</p>
                 <p>15:21</p>
              </div>

            </div>



          </div>
          
        </main>
      </div>
    </>
  );
};

export default Dashboard;


//           </div>

//           <section>
//             <h2>Recent Activities</h2>
//           </section>

//           <div className="container">
//             <div className="text-center">
//               <div class="search-container">
//                 <input
//                   type="text"
//                   id="search-input"
//                   placeholder="Search employee"
//                 />
//                 <button id="search-button">
//                   <img src={search} alt="search" />
//                 </button>
//               </div>
//             </div>

//             <div></div>
//           </div>
//           <div className="container buttt text-center">
//             <h3>Wednesday, November 09, 2022</h3>
//           </div>
//           <div className="container  box1">
//             <div className="row">
//               <div className=" col-md-3">
//                 <p>PAYROLL</p>
//                 <img src={BM} alt="BM" />
//                 <p className="bad">Badmus Kemis</p>
//               </div>
//               <div className="col-md-3">
//                 <p>ACTIVITY</p>
//                 <p>Paid November 2022 salary</p>
//               </div>
//               <div className="col-md-3">
//                 <p>EMPLOYEE</p>
//                 <p>52</p>
//               </div>
//               <div className="col-md-2">
//                 <p>TIME</p>
//                 <p>16:15</p>
//               </div>
//             </div>
//           </div>
//           <div className="container  box1">
//             <div className="row">
//               <div className=" col-md-4">
//                 <p>PAYROLL</p>
//                 <img src={head} alt="head" />
//                 <p className="bad">Kalu Abasiama</p>
//               </div>
//               <div className="col-md-4">
//                 <p>ACTIVITY</p>
//                 <p>Added new employee</p>
//               </div>
//               <div className="col-md-4">
//                 <p>EMPLOYEE</p>
//                 <p>04</p>
//               </div>
//             </div>
//           </div>
//           <div className="container pt-5 buttt text-center">
//             <h3 className="pt-5">Friday, November 04, 2022</h3>
//           </div>
//           <div className="container  box1">
//             <div className="row">
//               <div className=" col-md-4">
//                 <p>PAYROLL</p>
//                 <img src={BM} alt="BM" />
//                 <p className="bad">Badmus Kemis</p>
//               </div>
//               <div className="col-md-4">
//                 <p>ACTIVITY</p>
//                 <p>Added new bonus</p>
//               </div>
//               <div className="col-md-4">
//                 <p>BONUS NAME</p>
//                 <p>XMAS Bonus</p>
//               </div>
//             </div>
//           </div>
//           <div className="container  box1">
//             <div className="row">
//               <div className=" col-md-3">
//                 <p>PAYROLL</p>
//                 <img src={head} alt="head" />
//                 <p className="bad">Kalu Abasiama</p>
//               </div>
//               <div className="col-md-3">
//                 <p>ACTIVITY</p>
//                 <p>Added new employee</p>
//               </div>
//               <div className="col-md-3">
//                 <p>AMOUNT</p>
//                 <p>N11,1678,900.00</p>
//               </div>
//               <div className="col-md-3">
//                 <p>TIME</p>
//                 <p>15:31</p>
//               </div>
//             </div>
//           </div>