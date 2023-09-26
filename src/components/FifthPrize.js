import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SliderContainer from "./SliderContainer";
import Modal from "./Modal";
import { motion } from "framer-motion";

function FifthPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [revealPrize, setRevealPrize] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [announceWinner, setAnnounceWinner] = useState(false);

  const toggleElement = () => {
    setIsShowing(true);
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setAnnounceWinner(!announceWinner);
  };

  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
  };

  const handleAnnounceImage = () => {
    setRevealPrize(false);
    setShowWinners(true);
    setIsShowing(true);
    setAnnounceWinner(false);
    setShowModal(!showModal);
  };

  const winnersList = [
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_1.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_2.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_3.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_4.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_5.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_6.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_7.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_8.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_9.gif", title: "beach" },
    { url: "/coromandel_winner_posters/FIFTH_PRIZE_10.gif", title: "beach" },
  ];

  return (
    <div className="wholepage">
      <div className="nav-buttons-container">
        <Link to={"/"}>
          <button className="home-button medium-home-button">Home</button>
        </Link>
      </div>
      <div className="grandPrize">
        <img
          src="/requirements/backgrounds/fifth-winner-up.gif"
          className="grandprize-image"
          alt=""
        />
      </div>
      <div className="grandprize-down-portion">
        <img
          className="grand-down-image"
          src="/requirements/backgrounds/fifth-winner-down.gif"
          alt=""
        />
        <div className="items-container">
          {isCardVisible && (
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
              transition={{ delay: "0.6" }}
              className="grand-page-card-container"
            >
              <div className="card" onClick={handleCardClick}>
                <div className="card-image-container">
                  <img src="6.gif" className="card-image" alt="" />
                </div>
              </div>
            </motion.div>
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
          {announceWinner && (
            <div
              className={`transition-element ${isShowing ? "show" : ""}`}
              onClick={handleAnnounceImage}
            >
              <img
                src="/images/third_step_image.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
              />
            </div>
          )}

          {/* {
            showWinners && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}
          {/* {
            showWinners && (<SliderContainer/>)
        } */}
        </div>
      </div>
      {showWinners && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          toggleModal={toggleModal}
          winnersList={winnersList}
          revealPrize={revealPrize}
          setRevealPrize={setRevealPrize}
        />
      )}
    </div>
  );
}

export default FifthPrize;
