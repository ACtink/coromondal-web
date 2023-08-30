import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Spinner2 from "./Spinner2";

function GrandPrize2() {
  const [showFirstWinner, setShowFirstWinner] = useState(false);
  const [showSecondWinner, setShowSecondWinner] = useState(false);

 
  const [announceWinners , setAnnounceWinners] = useState(true);
  const [isShowing, setIsShowing] = useState(true);
 


  const toggleElement = () => {
    setIsShowing(true);
  };


  const handleFirstWinner = () => {

    setShowFirstWinner(false)

    setShowSecondWinner(true)

    setIsShowing(true)

  };

  const handleAnnounceWinners = ()=>{
   
    

    setAnnounceWinners(false)

    setShowFirstWinner(true)
    
    
   
    setIsShowing(true)
   
    

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
       
        
        {
            announceWinners && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} onClick={handleAnnounceWinners}>
                    <img src="/pics/second-grand-winner-selected.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }
      {
            showFirstWinner && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} onClick={handleFirstWinner} >
                    <img src="/pics/first-grand-winner.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }

{
            showSecondWinner && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                    <img src="/pics/second-grand-winner.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        }








      </div>
      </div>
    </div>
  );
}

export default GrandPrize2;
