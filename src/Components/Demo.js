import React from "react";
import './Demo.css'
import Dot2 from '../assets/Dot2.png';



const Demo = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="doot" src={Dot2} alt="Dot2" />
                        <h1 className="doo">
                            Get an Exclusive <br />
                            Demo of Eazipay
                        </h1>
                       <p className="padd"> 
                       Our greatest priority is to put you and <br />
                         your business first. Let’s show you how <br /> we can help.
                       </p>

                    </div>
                    <div className="col-md-6">
                    <div class="form-box">
  <form>
    <h4 className="text-center"> First things first</h4>
    <p className="text-center">
    We want to serve you better. Tell us a bit <br /> about yourself or company
    </p>
    <div>
            <button className="logg"  type="submit">Individual</button>
            <button className="regii" type="submit">Company</button>
            </div>
    
    
        
    <input className="add" type="text" id="name" placeholder="First name" name="name" />
    
    <input type="text" id="name"  placeholder="Last name" name="name" />
    
    
    <input type="email" id="email" placeholder="Email" name="email" />
    
    <input type="text" id="name"  placeholder="Job title" name="name" />
   
    <input type="text" id="name"  placeholder="Company Site" name="name" />
    
    
    
    <button className="butt" type="submit">Request Demo</button>
    
  </form>
</div>


         

                    </div>

                </div>
            </div>

        </>
    )
}
export default Demo;