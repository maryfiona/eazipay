import React from "react";
import './Navbar.css';
import easiImage from '../Assets/easi.png';





const Navbar = () => {

    return(

        <React.Fragment>
            <div className="container easi">
            <div className="topnav">
            <img className="easy" src={easiImage} alt="easIMG" />

               <a href="/">Individual</a>
          <a href="/">Business</a>
             <a href="/">Pricing</a>
             <a href="/">Set your payroll</a>
            </div>
            <div>
            <button className="log"  type="submit">Log in</button>
            <button className="regi" type="submit">Register</button>
            </div>
            </div>



        </React.Fragment>
    )
} 
export default Navbar;