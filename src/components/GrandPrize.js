import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Spinner2 from "./Spinner2";

function GrandPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [showFirstSelected , setShowFirstSelected] = useState(false);
  const [showWinners , setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [showSecondSelected , setShowSecondSelected] = useState(false);
  const [isSecondSpinnerVisible, setIsSecondSpinnerVisible] = useState(false);
  const [announceWinner , setAnnounceWinner] = useState(false);


  const toggleElement = () => {
    setIsShowing(true);
  };


  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
  };

  const handleAnnounceImage = ()=>{
    setShowFirstSelected(false)
    // setShowWinners(true)
    setIsSecondSpinnerVisible(true)
    setShowSecondSelected(true)
    setIsShowing(false)
   
    

  }

  return (
    <div className="grandpage">
       <div className="nav-buttons-container">
        <Link to={"/"} >
        <button className="home-button medium-home-button">Home</button>
        </Link>
        </div>
      <div className="grandPrize">
        <img src="/pics/creatives/grand-winner-up.gif" className="grandprize-image" alt="" />
      </div>
      <div className="grandprize-down-portion">
         <img className="grand-down-image" src="/pics/creatives/grand-winner-down.gif" alt="" />
      <div className="items-container">
        {isCardVisible && (
          <div className="grand-page-card-container">
            <div className="card" onClick={handleCardClick}>
              <div className="card-image-container">
                <img src="/pics/grand-card.gif" className="card-image" alt="" />
              </div>
            </div>
          </div>
        )}
        {isSpinnerVisible && (
          <div>
            <Spinner
              isSpinnerVisible={isSpinnerVisible}
              setIsSpinnerVisible={setIsSpinnerVisible}
              showFirstSelected= {showFirstSelected}
              setShowFirstSelected={setShowFirstSelected}
              setIsShowing={setIsShowing}
              announceWinner={announceWinner}
              setAnnounceWinner={setAnnounceWinner}
              
           
            />
          </div>
        )}
        {
            showFirstSelected && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} onClick={handleAnnounceImage}>
                    <img src="/pics/first-grand-winner-selected.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }
        {isSecondSpinnerVisible && (
          <div>
            <Spinner2
              isSecondSpinnerVisible={isSecondSpinnerVisible}
              setIsSecondSpinnerVisible={setIsSecondSpinnerVisible}
              showSecondSelected= {showSecondSelected}
              setShowSecondSelected={setShowSecondSelected}
              setIsShowing={setIsShowing}
             
           
            />
          </div>
        )}

{
            showSecondSelected && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                    <img src="/pics/second-grand-winner-selected.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }




        {/* {
            showWinners && (
                <div className={` ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}



      </div>
      </div>
    </div>
  );
}

export default GrandPrize;
