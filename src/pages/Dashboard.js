import React from 'react';
import './Dashboard.css'
import Easi2 from '../assets/Easi2.png'
import Dash from '../assets/Dash.png'
import Wallet from '../assets/Wallet.png'
import Comp from '../assets/Comp.png'
import Employ from '../assets/Employ.png'
import Pay from '../assets/Pay.png'
import Loan from '../assets/Loan.png'
import Book from '../assets/Book.png'
import Logo from '../assets/Logo.png'
import Admin from '../assets/Admin.png'
import Fund from '../assets/Fund.png'
import Data from '../assets/Data.png'
import Ploy from '../assets/Ploy.png'
import Salary from '../assets/Salary.png'
import get from '../assets/get.png'
import plain from '../assets/plain.png'
import graph from '../assets/graph.png'
import search from '../assets/search.png'

const Dashboard = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsDropdownOpen(!isDropdownOpen);
    // };


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="sidebar">
                            <img src={Easi2} alt="Easi2" />
                            <ul className="nav-links">
                                <li> <img src={Dash} alt="Dash" /><a href="/">Dashboard</a></li>
                                <li>
                                    <img src={Wallet} alt="Wallet" />
                                    <a href="/">Wallet</a>
                                </li>
                                <li>
                                    <img src={Employ} alt="Employ" />
                                    <a href="/">Employee Management</a>
                                    {/* 
                                        <div className="dropdown-container">
                                            <p  className="dropdown-button" onClick={toggleDropdown}>
                                                <i className="fa fa-angle-double-down  down"></i> 
                                            </p>
                                            {isDropdownOpen && (
                                                <ul className="dropdown-menu">
                                                <li><a href="/">Option 1</a></li>
                                                <li><a href="/">Option 2</a></li>
                                                <li><a href="/">Option 3</a></li>
                                                </ul>
                                            )}
                                        </div> 
                                    */}
                                </li>
                                <li><img src={Pay} alt="Pay" /><a href="/">Payroll</a></li>
                                <li> <img src={Comp} alt="Comp" /><a href="/">Compliance</a></li>
                                <li><img src={Loan} alt="Loan" /><a href="/">Quick Loan</a></li>
                                <li> <img src={Book} alt="Book" /><a href="/">Book Keeping</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-md-6 upnav'>
                        <img className='logo' src={Logo} alt="Logo" />
                        <img className='add' src={Admin} alt="Admin" />
                        <div className='wel'>
                            <h1>Welcome Abasiama</h1>
                            <p>Pay and manage your employee in minutes</p>
                        </div>
                        <div>
                            <img className="Fund" src={Fund} alt='Fund' />
                            <img className='Data' src={Data} alt='Data' />
                        </div>
                        <div className='box added'>
                            <img src={Ploy} alt="Ploy" />
                            <p>Add Employee</p>
                        </div>
                        <div className='box  lol'>
                            <img src={Salary} alt="Salary" />
                            <p>Pay Salaries</p>
                        </div>
                        <div className='box pla'>
                            <img src={plain} alt="plain" />
                            <p>Pay Compliances</p>
                        </div>
                        <div className='box get'>
                            <img src={get} alt="get" />
                            <p>Quick Loan</p>
                        </div>
                    </div>
                    <section>
                        <div className='container in '>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <p>Inflow</p>
                                    <h5 className='text-success' >
                                        N1,567,552
                                    </h5>

                                </div>
                                <div className='col-md-4 '>
                                    <p>Outflow</p>
                                    <h5 className='text-danger'>
                                        N1,567,552
                                    </h5>
                                </div>
                                <div className='col-md-4 flow' >
                                    <p className='text-success'>Inflow/Outflow
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img width={650} src={graph} alt="graph" />
                            </div>
                            <div>
                                <button className='graph-button'>
                                    2022
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

                 

                 <section>
                    <h2>Recent Activities</h2>
                 </section>

            <div className='container'>
                <div className='text-center'>
                <div class="search-container">
        <input type="text" id="search-input" placeholder="Search employee" />
        <button id="search-button"><img src={search} alt="search"/></button>
        
    </div>

                </div>
                
                    <div>

                    

                </div>

            </div>
            <div>
                <h3>Wednesday, November 09, 2022</h3>

            </div>
            {/* <div className="d-flex gap-3 py-5">
            <div className="rounded-pill border-1 p-2" ></div>
                                    <div className="rounded-pill border-1 p-2" ></div>
                
            </div> */}
            
        </>
    )
}
export default Dashboard;