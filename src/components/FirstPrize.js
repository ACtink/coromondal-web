

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SliderContainer from "./SliderContainer";
import Modal from "./Modal";

function FirstPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  const [revealPrize , setRevealPrize] = useState(false);
  const [showWinners , setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(true);
  const [announceWinner , setAnnounceWinner] = useState(false);


  const toggleElement = () => {
    setIsShowing(true);
  };


  const [showModal , setShowModal] = useState(false)

  const toggleModal =()=>{
    setShowModal(!showModal)
    setAnnounceWinner(!announceWinner)
  }



  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
    
  };


  const winnersList = [{ url: "/winners/1st.gif", title: "beach" }]

  const handleAnnounceImage = ()=>{
    
    setShowWinners(true)
    setIsShowing(true)
    setAnnounceWinner(false)

    setShowModal(!showModal)

   
    

  }

  return (
    <div className="grandpage"> 
    <div className="nav-buttons-container">
    <Link to={"/"} >
    <button className="home-button medium-home-button">Home</button>
    </Link>
    </div>
      <div className="grandPrize">
        <img src="/requirements/backgrounds/first-winner-up.gif" className="grandprize-image" alt="" />
      </div>
      <div className="grandprize-down-portion">
         <img className="grand-down-image" src="/requirements/backgrounds/first-winner-down.gif" alt="" />
      <div className="items-container">
        {isCardVisible && (
          <div className="grand-page-card-container">
            <div className="card" onClick={handleCardClick}>
              <div className="card-image-container">
                <img src="2.gif" className="card-image" alt="" />
              </div>
            </div>
          </div>
        )}
        {isSpinnerVisible && (
          
            <Spinner
              isSpinnerVisible={isSpinnerVisible}
              setIsSpinnerVisible={setIsSpinnerVisible}
              announceWinner={announceWinner}
              setAnnounceWinner={setAnnounceWinner}
              setRevealPrize={setRevealPrize}
              setIsShowing={setIsShowing}
           
            />
         
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
        {/* {
            showWinners && (<SliderContainer winnersList={winnersList} />)
        } */}

      </div>
      </div>
      {showWinners && (
          
          
          <Modal showModal={showModal} setShowModal={setShowModal} toggleModal={toggleModal} winnersList={winnersList} revealPrize={revealPrize} setRevealPrize={setRevealPrize} />
        )}
    </div>
  );
}

export default FirstPrize

