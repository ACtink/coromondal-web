import React, { useEffect, useState } from "react";
import SliderContainer from "./SliderContainer";

function Modal({ showModal, setShowModal, toggleModal, winnersList }) {


 


  return (
    <>
      {showModal && (
        <div className={`modal ${showModal ? "open" : "" }`}>
          {/* <div className="overlay"></div> */}

          <div className="container-modal">
            {/* {winnersList[0].title==="first" &&  <SliderContainer winnersList={winnersList} />}
          {winnersList[0].title==="second" &&  <SliderContainer winnersList={winnersList} />} */}
            <SliderContainer winnersList={winnersList} />

            <button className="modal-close-button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
