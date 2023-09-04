import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Spinner2 from "./Spinner2";
import { ShowNewGrandPageContext } from "./GrandPageContext";

function GrandPrize() {
  const [isCardVisible, setIsCardVisible] = useState(
    JSON.parse(localStorage.getItem("cardVisible")) === false
      ? JSON.parse(localStorage.getItem("cardVisible"))
      : true
  );

  {
    console.log(JSON.parse(localStorage.getItem("showItemsContainer")));
  }

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(
    JSON.parse(localStorage.getItem("isSpinnerVisible")) === true
      ? JSON.parse(localStorage.getItem("isSpinnerVisible"))
      : false
  );
  const [showFirstSelected, setShowFirstSelected] = useState(
    JSON.parse(localStorage.getItem("setShowFirstSelected")) === true
      ? JSON.parse(localStorage.getItem("setShowFirstSelected"))
      : false
  );
  const [showWinners, setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState( JSON.parse(localStorage.getItem("isShowing")) === true
  ? JSON.parse(localStorage.getItem("isShowing"))
  : false);
  const [showSecondSelected, setShowSecondSelected] = useState(
    JSON.parse(localStorage.getItem("setShowSecondSelected")) === true
      ? JSON.parse(localStorage.getItem("setShowSecondSelected"))
      : false
  );
  const [isSecondSpinnerVisible, setIsSecondSpinnerVisible] = useState(
    JSON.parse(localStorage.getItem("isSecondSpinnerVisible")) === true
      ? JSON.parse(localStorage.getItem("isSecondSpinnerVisible"))
      : false
  );
  const [announceWinner, setAnnounceWinner] = useState(false);
  const [showItemsContainer, setShowItemsContainer] = useState(
    JSON.parse(localStorage.getItem("showItemsContainer")) === false
      ? JSON.parse(localStorage.getItem("showItemsContainer"))
      : true
  );

  {
    console.log(JSON.parse(localStorage.getItem("showItemsContainer")));
  }


  const [showSecondGrandPage, setShowSecondGrandPage] = useContext(
    ShowNewGrandPageContext
  );

  const toggleElement = () => {
    setIsShowing(true);
  };

  const handleCardClick = () => {
    localStorage.setItem("showItemsContainer", "false");
    localStorage.setItem("cardVisible", "false");
    localStorage.setItem("isSpinnerVisible", "true");
    localStorage.setItem("isSecondSpinnerVisible", "true");
    setShowItemsContainer(false);
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
    setIsSecondSpinnerVisible(true);

  };

  // const handleAnnounceImage = ()=>{
  //   setShowFirstSelected(false)
  //   // setShowWinners(true)

  //   setIsShowing(false)

  // }

  const resetAllStateValues = () => {

   const response  = window.confirm("Are you sure you want to Reset ? This will clear all your progress.")
   if(response){
    setShowSecondGrandPage(false);
    localStorage.removeItem("showItemsContainer");
    localStorage.removeItem("cardVisible");
    localStorage.removeItem("isSpinnerVisible");
    localStorage.removeItem("isSecondSpinnerVisible");
    localStorage.removeItem("setShowFirstSelected");
    localStorage.removeItem("setShowSecondSelected");
    localStorage.removeItem("isShowing");
    
   }
    

  };

  return (
    <div className="grandpage">
      <div className="nav-buttons-container">
        <Link to={"/"}>
          <button className="home-button medium-home-button">Home</button>
        </Link>
        <Link to={"/"}>
          <button
            className="home-button medium-home-button"
            onClick={resetAllStateValues}
          >
            Reset
          </button>
        </Link>
      </div>
      <div className="grandPrize">
        <img
          src="/requirements/backgrounds/grand-winner-up.gif"
          className="grandprize-image"
          alt=""
        />
      </div>
      <div className="grandprize-down-portion">
        <img
          className="grand-down-image"
          src="/requirements/backgrounds/grand-winner-down.gif"
          alt=""
        />
        {showItemsContainer && (
          <div className="items-container">
            {isCardVisible && (
              <div className="grand-page-card-container">
                <div className="card" onClick={handleCardClick}>
                  <div className="card-image-container ">
                    <img
                      src="/requirements/cards/1.gif"
                      className="card-image "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}

            {isSpinnerVisible && (
              <Spinner
                isSpinnerVisible={isSpinnerVisible}
                setIsSpinnerVisible={setIsSpinnerVisible}
                showFirstSelected={showFirstSelected}
                setShowFirstSelected={setShowFirstSelected}
                setIsShowing={setIsShowing}
                announceWinner={announceWinner}
                setAnnounceWinner={setAnnounceWinner}
              />
              // <img className="spin-card spinner-spin " src="requirements/cards/1.gif" alt="" />
            )}
            {showFirstSelected && (
              <div className={`transition-element ${isShowing ? "show" : ""}`}>
                <img
                  src="/pics/first-grand-winner-selected.gif"
                  className="announce-prize-image"
                  alt="grand-prize-announcement"
                />
              </div>
            )}
            {isSecondSpinnerVisible && (
              <div>
                <Spinner2
                  isSecondSpinnerVisible={isSecondSpinnerVisible}
                  setIsSecondSpinnerVisible={setIsSecondSpinnerVisible}
                  showSecondSelected={showSecondSelected}
                  setShowSecondSelected={setShowSecondSelected}
                  setIsShowing={setIsShowing}
                />
              </div>
            )}

            {showSecondSelected && (
              <div className={`transition-element ${isShowing ? "show" : ""}`}>
                <img
                  src="/pics/second-grand-winner-selected.gif"
                  className="announce-prize-image"
                  alt="grand-prize-announcement"
                />
              </div>
            )}

            {/* {
            showWinners && (
                <div className={` ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}
          </div>
        )}

        <div className="first-absolute-container">
          {isSpinnerVisible && (
            <Spinner
              isSpinnerVisible={isSpinnerVisible}
              setIsSpinnerVisible={setIsSpinnerVisible}
              showFirstSelected={showFirstSelected}
              setShowFirstSelected={setShowFirstSelected}
              setIsShowing={setIsShowing}
              announceWinner={announceWinner}
              setAnnounceWinner={setAnnounceWinner}
            />
            // <img className="spin-card spinner-spin " src="requirements/cards/1.gif" alt="" />
          )}
          {showFirstSelected && (
            <div className={`transition-element ${isShowing ? "show" : ""}`}>
              <img
                src="/requirements/winners/first-grand-winner-selected.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
              />
            </div>
          )}
        </div>
        <div className="second-absolute-container">
          {isSecondSpinnerVisible && (
            <div>
              <Spinner2
                isSecondSpinnerVisible={isSecondSpinnerVisible}
                setIsSecondSpinnerVisible={setIsSecondSpinnerVisible}
                showSecondSelected={showSecondSelected}
                setShowSecondSelected={setShowSecondSelected}
                setIsShowing={setIsShowing}
              />
            </div>
          )}
          {showSecondSelected && (
            <div className={`transition-element ${isShowing ? "show" : ""}`}>
              <img
                src="/requirements/winners/second-grand-winner-selected.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GrandPrize;
