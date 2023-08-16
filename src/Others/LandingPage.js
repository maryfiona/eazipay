import React from "react";
import './LandingPage.css'
import LandImg from '../Assets/Landing.png'




const LandingPage = () => {


    return(

        <React.Fragment>
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

                    </div>
                    <div className="col-md-6">
                        <img width={650} src={LandImg} alt="LandImg" />

                    </div>

                </div>

            </div>


        </React.Fragment>
    )
}
export default LandingPage;