import React, { useContext, useState } from "react";
import "../spinner.css";
import { ShowNewGrandPageContext } from "./GrandPageContext";

function Spinner2({
  isSecondSpinnerVisible,
  setIsSecondSpinnerVisible,
  showSecondSelected,
  setShowSecondSelected,
  setIsShowing,
}) {
  const [showSecondGrandPage, setShowSecondGrandPage] = useContext(
    ShowNewGrandPageContext
  );

  const [animationClass, setAnimationClass] = useState("");

  console.log(isSecondSpinnerVisible, setIsSecondSpinnerVisible);

  const handleSpinnerClick = () => {
    setAnimationClass("spinner-spin");

    setTimeout(() => {
      setAnimationClass("");
      setIsSecondSpinnerVisible(false);
      setShowSecondSelected(true);
      setIsShowing(true);
      setShowSecondGrandPage(true);
    }, 10000);

    // Apply the animation class
    console.log(animationClass);
  };
  return (
    <>
      <div className="spinner-container" onClick={handleSpinnerClick}>
        <img
          src="spinphoto.png"
          className={`spinner ${animationClass}`}
          alt="spin"
        />
      </div>
    </>
  );
}

export default Spinner2;
