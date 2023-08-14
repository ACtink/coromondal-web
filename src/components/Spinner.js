import React, { useState } from "react";
import "../spinner.css";

function Spinner({isSpinnerVisible,setIsSpinnerVisible, revealPrize , setRevealPrize}) {


  const [animationClass, setAnimationClass] = useState("");
  

  console.log(isSpinnerVisible , setIsSpinnerVisible)

  const handleSpinnerClick = () => {

    setAnimationClass("spinner-spin");


setTimeout(()=>{
    setAnimationClass("")
    setIsSpinnerVisible(false)
    setRevealPrize(true)


    

},7000)

   // Apply the animation class
    console.log(animationClass)
  };
  return (
    //     <div className='container-body'>
    //         <div class="container">
    //     <div class="wheel-section one">Prize 1</div>
    //     <div class="wheel-section two">Prize 2</div>
    //     <div class="wheel-section three">Prize 3</div>
    //     <div class="wheel-section four">Prize 4</div>
    //     <div class="wheel-section five">Prize 5</div>
    //     <div class="wheel-section six">Prize 6</div>
    //     <div class="wheel-section seven">Prize 7</div>
    //     <div class="wheel-section eight">Prize 8</div>
    //     <div class="arrow"></div>
    //     <button id="spin" onclick="spinWheel()">Spin</button>
    //   </div>

    //   </div>
    <>
      <div onClick={handleSpinnerClick}>
    
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
