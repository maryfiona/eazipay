import React from "react";
import './HowItWorks.css'
import BG from '../assets/BG.png';
import Phone from '../assets/Phone.png';
import Steps from '../assets/Steps.png'


const HowItWorks = () => {

    return(
        <>
            <div className=" HowItWorks">
            <h1 className="works">How Eazipay Works</h1>
                <h5 className="text-center">Get started in 3 simple steps.</h5>
            </div>
            <div className="container">
                <div  className="d-flex justify-content-center align-items-center ">
                
                <div className="row ">
                    <div className="col-md-6">
                    <img className="pt" width={450} src={BG} alt="Bg" />
                    <img className="phone"  src={Phone} alt="phone" />


                    </div>
                    <div className="col-md-6">
                        <img className="pt" width={300} src={Steps} alt="Steps" />

                    </div>

                </div>
                </div>

            </div>

        </>
    )
}
 export default HowItWorks;