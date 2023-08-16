import React from 'react';
import './Dashboard.css'
import Easi2 from '../Assets/Easi2.png'
import Dash from '../Assets/Dash.png'
import Wallet from '../Assets/Wallet.png'
import Comp from '../Assets/Comp.png'
import Employ from '../Assets/Employ.png'
import Pay from '../Assets/Pay.png'
import Loan from '../Assets/Loan.png'
import Book from '../Assets/Book.png'
import Logo from '../Assets/Logo.png'
import Admin from '../Assets/Admin.png'
import Fund from '../Assets/Fund.png'
import Data from '../Assets/Data.png'

const Dashboard = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsDropdownOpen(!isDropdownOpen);
    // };


    return (
        <React.Fragment>
       
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
                        {/* <div className="dropdown-container">
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
    </div> */}
                    </li>
                    <li><img src={Pay} alt="Pay" /><a href="/">Payroll</a></li>
                    <li> <img src={Comp} alt="Comp" /><a href="/">Compliance</a></li>
                    <li><img src={Loan} alt="Loan" /><a href="/">Quick Loan</a></li>
                    <li> <img src={Book} alt="Book" /><a href="/">Book Keeping</a></li>
                </ul>
            </div>

                    </div>
                    <div className='col-md-6 upnav'>
                       
                       <img className='logo' src={Logo}  alt="Logo"/>
                       <img className='add' src={Admin}  alt="Admin"/>
                       {/* <div>
                        <img className='frame' src={frame} alt="frame" />
                       </div> */}
                       <div className='wel'>
                            <h1>Welcome  Abasiama</h1>
                            <p>Pay and manage your employee in minutes</p>

                        </div>
                        <div>
                            <img className="Fund" src={Fund} alt='Fund' />
                            <img className='Data' src={Data} alt='Data' />

                        </div>
                       

                    </div>

                </div>

            </div>
            

        </React.Fragment>
        
    )
}
export default Dashboard;