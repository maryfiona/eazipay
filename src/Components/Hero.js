import React from "react";
import './Hero.css'
import LandImg from '../assets/Landing.png'
import PlayStoreImage from '../assets/Playstore.png';

import AppleStore from '../assets/AppleStore.png'




const Hero = () => {


    return(

        <>
            <div className="container land">
                <div className="row">
                    <div className="col-md-6">
                    <h1 className="heading">
        <span className="black-text">Run</span> your 
        <span className="green-text "> Payroll</span> 
        <br />
        <span className="yellow-text "> easily</span> 
        <span className="black-text "> in</span> 
        <span className="red-text "> seconds</span>
      </h1>
      <p>
      We’ve built an all-inclusive simple solution for <br /> individual and businesses to manage staff, 
      pay  <br />salaries, bills, and relevant taxes all at once.
      </p>
      <button className="free text-light">Start Using Free, Forever</button>
      <div className="pt-5">
        <p>Download the Eazipay App</p>
        <a className="apple" href="https://www.apple.com/store" target="_blank" rel="noopener noreferrer">
    <img src={AppleStore} alt="AppleStore" />
  </a>
  <a className="play" href="https://play.google.com/store/apps?hl=en&gl=US" target="_blank" rel="noopener noreferrer">
    <img src={PlayStoreImage} alt="PlayStoreImage" />
  </a>
      </div>
    </div>
                    <div className="col-md-6">
                        <img width={650} src={LandImg} alt="LandImg" />

                    </div>

                </div>

            </div>


        </>
    )
}
export default Hero;