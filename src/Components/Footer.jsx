import React from "react";
import './Footer.css'
import easiImage from '../assets/easi.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Footer = () => {
    const sendEmail = () => {
        window.location.href = "mailto:eazipay@gmail.com";
      };

    return (
        <>
            <div className="foot">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={easiImage} alt="easIMG" />

                            <p className="pt-5">&copy; 2023 Eazipay.<br /> All rights reserved.</p>
                            <div className="social-icons">
                                <a href="/" target="_blank" ><i className="fab fa-instagram insta"></i></a>

                                <a href="/" target="_blank "><i className="fab fa-twitter twi"></i></a>
                                <a href="/" target="_blank" ><i className="fab fa-linkedin link"></i></a>
                                <a href="/" target="_blank" ><i className="fab fa-facebook fac"></i></a>
                            </div>

                        </div>


                        <div className="col-md-3">
                            <div className="footer-links">
                                <h5 className="pro">Products</h5>
                                
                                 <Link to={'/business'}>Individual</Link>
                                 <br />
                                 <Link to={'/business'}>Business</Link>
                                 <br />
                                 <Link to={'/'}>Request Demo</Link>
                                 <br />
                                 <Link to={'/'}>Pricing</Link>
              
                            </div>


                        </div>
                        <div className="col-md-2 footer-links">
                            <h5 className="pro">Legal</h5>
                            
                            <Link to={"/"}>Privacy Policy</Link>
                            <br/>
                            <Link to={"/"}>Terms of service</Link>


                        </div>
                        <div className="col-md-2 footer-links">
                            <h5 className="pro">Resources</h5>
                            <Link to={"/"}>FAQS</Link>
                            <br />
                            <Link to={"/"}>Blog</Link>
                            <br />
                            <Link to={"/"}>Career</Link>
                            <br />
                            <Link to={"/"}>Customer Stories</Link>


                        </div>
                        <div className="col-md-3 footer-links">
                            <div className="footer-section">
                                <h3 className="pro">Contact us</h3>
                                <ul>
                                    <li><a href="mailto:eazipay@gmail.com">eazipay@gmail.com</a></li>
                                    <li><a href="tel:+2348168789518">+234 816 878 9518</a></li>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="email-input yea"
                                    />
                                    <button className="email-icon yoo" onClick={sendEmail}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </button>
                                </ul>

                            </div>

                        </div>


                    </div>


                </div>
                </div>
                </ >



    )
}
export default Footer;