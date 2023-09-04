import React, { useState } from "react";
import "../spinner.css";

function Spinner({isSpinnerVisible,setIsSpinnerVisible, setAnnounceWinner, setShowFirstSelected , setIsShowing}) {


  const [animationClass, setAnimationClass] = useState("");
  

  // console.log(isFirstSpinnerVisible , setIsFirstSpinnerVisible)

  const handleSpinnerClick = () => {

    setAnimationClass("spinner-spin");

    console.log("hello clicked on spinner image")


setTimeout(()=>{
    setAnimationClass("")
    localStorage.setItem("setShowFirstSelected", "true");
    localStorage.setItem("isSpinnerVisible", "false");
    localStorage.setItem("isShowing", "true");
    


    
    setIsSpinnerVisible(false)
    if(setShowFirstSelected){
    setShowFirstSelected(true)
    }
    setIsShowing(true)
    setAnnounceWinner(true)
    


    

},7000)

   // Apply the animation class
    console.log(animationClass)
  };
  return (
    
    <>
      {/* <div className="spinner-container" onClick={handleSpinnerClick}> */}
    
        <img
          src="spinphoto.png"
          className={`spinner ${animationClass}`}
          alt="spin"
          onClick={handleSpinnerClick}
    
        
        />
      {/* </div> */}
    </>
  );
}

export default Spinner;
