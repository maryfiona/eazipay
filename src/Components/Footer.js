import React from "react";
import './Footer.css'
import easiImage from '../Assets/easi.png';


const Footer = () => {

    return (
        <React.Fragment>
            <div className="foot">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={easiImage} alt="easIMG" />
                            
                                <p className="pt-5">&copy; 2023 Eazipay.<br /> All rights reserved.</p>
                                <div className="social-icons">
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
                           
                            </div>

                    
                        <div className="col-md-10">

                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;