

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SliderContainer from "./SliderContainer";

function FifthPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [revealPrize , setRevealPrize] = useState(false);
  const [showWinners , setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [announceWinner , setAnnounceWinner] = useState(false);


  const toggleElement = () => {
    setIsShowing(true);
  };


  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
  };

  const handleAnnounceImage = ()=>{
    setRevealPrize(false)
    setShowWinners(true)
    setIsShowing(true)
    setAnnounceWinner(false)
   
    

  }

  return (
    
    <div className="wholepage">
        <div className="nav-buttons-container">
        <Link to={"/"} >
        <button className="home-button medium-home-button">Home</button>
        </Link>
        </div>
      <div className="grandPrize">
        <img src="/pics/creatives/fifth-winner-up.gif" className="grandprize-image" alt="" />
      </div>
      <div className="grandprize-down-portion">
         <img className="grand-down-image" src="/pics/creatives/fifth-winner-down.gif" alt="" />
      <div className="items-container">
        {isCardVisible && (
          <div className="grand-page-card-container">
            <div className="card" onClick={handleCardClick}>
              <div className="card-image-container">
                <img src="/pics/fifth-card.gif" className="card-image" alt="" />
              </div>
            </div>
          </div>
        )}
        {isSpinnerVisible && (
          <div>
            <Spinner
              isSpinnerVisible={isSpinnerVisible}
              setIsSpinnerVisible={setIsSpinnerVisible}
              revealPrize={revealPrize}
              setRevealPrize={setRevealPrize}
              announceWinner={announceWinner}
              setAnnounceWinner={setAnnounceWinner}
              setIsShowing={setIsShowing}
           
            />
          </div>
        )}
        {
            announceWinner && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} onClick={handleAnnounceImage}>
                    <img src="/images/third_step_image.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }

        {/* {
            showWinners && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}
        {
            showWinners && (<SliderContainer/>)
        }

      </div>
      </div>
    </div>
  );
}

export default FifthPrize

