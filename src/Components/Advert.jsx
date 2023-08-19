import React from 'react'
import './Advert.css'
import Smile from '../assets/smile.png';
import Dot from '../assets/Dot.png'
import PlayStoreImage from '../assets/Playstore.png';

import AppleStore from '../assets/AppleStore.png'



const Advert = () => {
    return(
        <>
            <div className='back'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src={Dot} alt="Dot" />
                    <h1 className="head">
        <span className="black-text">Free</span> Forever  <br />For our
        <span className="red-text "> Salary <br/> Payment</span> 
        
      </h1>
      <div className="pt-5">
        <p>Subscribe to the Eazilife today</p>
        <a className="apple" href="https://www.apple.com/store" target="_blank" rel="noopener noreferrer">
    <img src={AppleStore} alt="AppleStore" />
  </a>
  <a className="play" href="https://play.google.com/store/apps?hl=en&gl=US" target="_blank" rel="noopener noreferrer">
    <img src={PlayStoreImage} alt="PlayStoreImage" />
    
  </a>
      </div>

                    </div>
                    <div className="col-md-6">
                    <img className='pt' src={Smile} alt="Smile" />
</div>

                </div>

            </div>
            </div>
        </>
    )


}

export default Advert;