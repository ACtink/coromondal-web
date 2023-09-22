import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Spinner2 from "./Spinner2";
import { ShowNewGrandPageContext } from "./GrandPageContext";
import Modal from "./Modal";
import { motion } from "framer-motion";

function GrandPrize2() {
  const [showFirstWinner, setShowFirstWinner] = useState(false);
  const [showSecondWinner, setShowSecondWinner] = useState(false);

  const [announceWinners, setAnnounceWinners] = useState(true);
  const [isShowing, setIsShowing] = useState(true);

  const [firstSelected, setFirstSelected] = useState(true);
  const [secondSelected, setSecondSelected] = useState(true);

  const [showGrandPage2, setShowgrandPage2] = useContext(
    ShowNewGrandPageContext
  );

  const toggleElement = () => {
    setIsShowing(true);
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowFirstWinner(false);
    setShowSecondWinner(false);

    setFirstSelected(true);
    setSecondSelected(true);
  };

  const handleFirstWinner = () => {
    setShowFirstWinner(false);

    setShowSecondWinner(true);

    setIsShowing(true);
  };

  const handleAnnounceWinners = () => {
    setAnnounceWinners(false);

    setShowFirstWinner(true);

    setIsShowing(true);
  };

  const showFirstGrandWinner = () => {
    setFirstSelected(false);
    setSecondSelected(false);
    setShowFirstWinner(true);
    setIsShowing(true);
    // setShowgrandPage2(true)
    setShowModal(!showModal);
  };

  const showSecondGrandWinner = () => {
    setSecondSelected(false);
    setFirstSelected(false);
    setShowSecondWinner(true);
    setIsShowing(true);
    // setShowgrandPage2(true)
    setShowModal(!showModal);
  };

  const resetAllStateValues = () => {
    const response = window.confirm(
      "Are you sure you want to Reset ? This will clear all your progress."
    );
    if (response) {
      localStorage.removeItem("showItemsContainer");
      localStorage.removeItem("cardVisible");
      localStorage.removeItem("isSpinnerVisible");
      localStorage.removeItem("isSecondSpinnerVisible");
      localStorage.removeItem("setShowFirstSelected");
      localStorage.removeItem("setShowSecondSelected");
      localStorage.removeItem("isShowing");
      localStorage.removeItem("firstSelected");
      localStorage.removeItem("isShowing");
      localStorage.removeItem("showFirstWinner");
      localStorage.removeItem("secondSelected");
      localStorage.removeItem("isShowing");
      localStorage.removeItem("showSecondWinner");
      setShowgrandPage2(false);
      localStorage.removeItem("setShowSecondGrandPage");
    }
  };

  const firstWinnersList = [
    { url: "/coromandel_winner_posters/grand_prize_1.gif", title: "first" },
  ];
  const secondWinnersList = [
    { url: "/coromandel_winner_posters/grand_prize_2.gif", title: "second" },
  ];

  return (
    <div
      className="grandpage"
      
    >
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

        <div className="first-absolute-container">
          {firstSelected && (
            <div
              className={`transition-element ${isShowing ? "show" : ""}`}
              onClick={showFirstGrandWinner}
            >
              <img
                src="/requirements/winners/first-grand-winner-selected.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
              />
            </div>
          )}
          {/* {
            showFirstWinner && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                    <img src="/winners/grand-winner-1.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        } */}
        </div>
        <div className="second-absolute-container">
          {secondSelected && (
            <div
              className={`transition-element ${isShowing ? "show" : ""}`}
              onClick={showSecondGrandWinner}
            >
              <img
                src="/requirements/winners/second-grand-winner-selected.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
              />
            </div>
          )}

          {/* {
            showSecondWinner && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                    <img src="/winners/grand-winner-2.gif" className="announce-prize-image" alt="grand-prize-announcement" />

                    </div>
            )
        } */}
        </div>
      </div>
      <>
        {showFirstWinner && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            toggleModal={toggleModal}
            winnersList={firstWinnersList}
          />
        )}
      </>
      <>
        {showSecondWinner && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            toggleModal={toggleModal}
            winnersList={secondWinnersList}
          />
        )}
      </>
    </div>
  );
}

export default GrandPrize2;
