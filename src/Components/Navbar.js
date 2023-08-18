import React from "react";
import "./Navbar.css";
import easiImage from "../assets/easi.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container easi">
        <div className="topnav">
          <img className="easy" src={easiImage} alt="easIMG" />
          <Link to={"/"}>Individual</Link>
          <Link to={"/"}>Business</Link>
          <Link to={"/"}>Pricing</Link>
          <Link to={"/"}>Set your payroll</Link>
        </div>
        <div>
          <button
            className="log"
            onClick={() => {
              navigate("/dashboard");
            }}
            type="submit"
          >
            Log in
          </button>
          <button
            className="regi"
            onClick={() => {
              navigate("/dashboard");
            }}
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
