import React from "react";
import "./Hero.css";
import LandImg from "../assets/Landing.png";
import PlayStoreImage from "../assets/Playstore.png";

import AppleStore from "../assets/AppleStore.png";

const Hero = () => {
  return (
    <>
      <div className="container land vh-100">
        <div className="row">
          <div className="col-md-6">
            <h1 className="heading">
              <span className="black-text brand-font fw-bold">Run</span> your
              <span className="green-text brand-font fw-bold"> Payroll</span>
              <br />
              <span className="yellow-text brand-font fw-bold"> easily</span>
              <span className="black-text brand-font fw-bold"> in</span>
              <span className="red-text brand-font fw-bold"> seconds</span>
            </h1>
            <p>
              We've built an all-inclusive simple solution for <br /> individual
              and businesses to manage staff, pay <br />
              salaries, bills, and relevant taxes all at once.
            </p>
            <button className="free text-light">
              Start Using Free, Forever
            </button>
            <div className="pt-5">
              <p>Download the Eazipay App</p>
              <div className="d-flex gap-3">
                <a
                  className="shadow radius-25"
                  href="https://www.apple.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={AppleStore} alt="AppleStore" />
                </a>
                <a
                  className="shadow radius-25"
                  href="https://play.google.com/store/apps?hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={PlayStoreImage} alt="PlayStoreImage" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img width={650} src={LandImg} alt="LandImg" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
