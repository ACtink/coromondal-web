import React, { useState } from "react";
import "../spinner.css";

function Spinner({isSpinnerVisible,setIsSpinnerVisible, revealPrize , setRevealPrize , setIsShowing}) {


  const [animationClass, setAnimationClass] = useState("");
  

  console.log(isSpinnerVisible , setIsSpinnerVisible)

  const handleSpinnerClick = () => {

    setAnimationClass("spinner-spin");


setTimeout(()=>{
    setAnimationClass("")
    setIsSpinnerVisible(false)
    setRevealPrize(true)
    setIsShowing(true)
    


    

},10000)

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
