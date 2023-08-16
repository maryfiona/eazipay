import React from "react";
import  './Business.css'
import Imge1 from '../Assets/Image1.png'; // Replace with actual image paths
import Imge2 from '../Assets/Image2.png'; // Replace with actual image paths
import Imge3 from '../Assets/Image3.png';


const Business = () => {

    return(
        <React.Fragment>
            
            <div className="container pt-5  text-center">
                <h1 className="text-success">
                For Individuals and Businesses
                </h1>
                <p>Join 200+ businesses using Eazipay's easy solution.</p>


            
 
    <div className="image-container">
      <img className="img1"  width={350} src={Imge1} alt="Img1" />
      <img className="img2" width={350} src={Imge2} alt="Img2" />
      <img className="img3" width={350} src={Imge3} alt="Img3" />
     
    </div>
    <div className="contact-container">
      <p>
        We are happy to answer your queries. Please, reach us at{" "} <br/ >
        <a href="mailto:hello@myeazipay.com">hello@myeazipay.com</a> and expect
        our response shortly after.
      </p>
    </div>
    </div>
  
  


            

        </React.Fragment>
    )
}
export default Business;