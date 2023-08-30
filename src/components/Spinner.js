import React, { useState } from "react";
import "../spinner.css";

function Spinner({isSpinnerVisible,setIsSpinnerVisible, setAnnounceWinner, setShowFirstSelected , setIsShowing}) {


  const [animationClass, setAnimationClass] = useState("");
  

  // console.log(isFirstSpinnerVisible , setIsFirstSpinnerVisible)

  const handleSpinnerClick = () => {

    setAnimationClass("spinner-spin");


setTimeout(()=>{
    setAnimationClass("")
    setIsSpinnerVisible(false)
    if(setShowFirstSelected){
    setShowFirstSelected(true)
    }
    setIsShowing(true)
    setAnnounceWinner(true)
    


    

},4000)

   // Apply the animation class
    console.log(animationClass)
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

export default Spinner;
