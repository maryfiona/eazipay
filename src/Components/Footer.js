import React from "react";
import './Footer.css'
import easiImage from '../Assets/easi.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    const sendEmail = () => {
        window.location.href = "mailto:eazipay@gmail.com";
      };

    return (
        <React.Fragment>
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
                                <a href="/">Individual</a>
                                <br />
                                <a href="/">Businesses</a>
                                <br />
                                <a href="/">Request Demo</a>
                                <br />
                                <a href="/">Pricing</a>
                            </div>


                        </div>
                        <div className="col-md-2 footer-links">
                            <h5 className="pro">Legal</h5>
                            <a href="/">Privacy Policy</a>
                            <br />
                            <a href="/">Terms of Service</a>


                        </div>
                        <div className="col-md-2 footer-links">
                            <h5 className="pro">Resources</h5>
                            <a href="/">FAQs</a>
                            <br />
                            <a href="/">Blog</a>
                            <br />
                            <a href="/">Career</a>
                            <br />
                            <a href="/">Customer Stories</a>


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

        </React.Fragment >
    )
}
export default Footer;