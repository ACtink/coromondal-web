import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CarouselC from "./CarouselC";
import "../carousal.css";
import { ShowNewGrandPageContext } from "./GrandPageContext";
import { motion } from "framer-motion";

function Home() {
  const [
    showSecondGrandPage,
    setShowSecondGrandPage,
    showGrandPage2,
    setShowgrandPage2,
  ] = useContext(ShowNewGrandPageContext);

  // if(showSecondGrandPage===false){
  //   setShowSecondGrandPage(true)
  // }

  // if(showGrandPage2===false){
  //   setShowgrandPage2(true)
  // }

  if (localStorage.getItem("setShowSecondGrandPage") === true) {
  }

  return (
    <>
      <div className="outer"

       >
        <div className="home">
          <div className="nav-buttons-container">
            <Link to={"/"}>
              <button className="home-button medium-home-button">Home</button>
            </Link>
            {/* <Link to={"/"} >
        <button className="home-button medium-home-button" >Reset</button>
        </Link> */}
          </div>
          <img
            src="/requirements/backgrounds/home-up.gif"
            className="banner-image"
            alt=""
          />
        </div>
        {/* <div className="home-down-portion"> */}

        <div className="card-container">
          <img
            className="home-down-image"
            src="/requirements/backgrounds/home-down.gif"
            alt=""
          />
          <Link
            to={
              showSecondGrandPage || showGrandPage2
                ? "/secondgrandprize"
                : "/grandprize"
            }
            className="button-link"
          >
            <div className="card">
              <div className="card-image-container">
                <img src="1.gif" className="card-image" alt="" />
              </div>
              {/* <Link to="/grandprize" className="button-link"><button class="button">
            <span>Grand Prize</span>
          </button></Link>  */}
            </div>
          </Link>
          <Link to="/firstprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img src="2.gif" className="card-image" alt="" />
              </div>
              {/* <Link to="/1stPrize" className="button-link"><button class="button">
            <span>1st Prize</span>
          </button></Link> */}
            </div>
          </Link>
          <Link to="/secondprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img src="3.gif" className="card-image" alt="" />
              </div>

              {/* <Link to="/2ndPrize" className="button-link"><button class="button">
            <span>2nd Prize</span>
          </button></Link> */}
            </div>
          </Link>
          <Link to="/thirdprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img src="4.gif" className=" card-image" alt="" />
              </div>
              {/* <Link to="/3rdPrize" className="button-link"><button class="button">
            <span>3rd Prize</span>
          </button></Link> */}
            </div>
          </Link>
          {/* <div className="inner-container"> */}
          <Link to="/fourthprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img src="5.gif" className="card-image" alt="" />
              </div>
              {/* <Link to="/4thPrize" className="button-link"><button class="button">
              <span>4rth Prize</span>
            </button></Link> */}
            </div>
          </Link>
          <Link to="/fifthprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img src="6.gif" className=" card-image" alt="" />
              </div>
              {/* <Link to="/5thPrize" className="button-link"><button class="button">
              <span>5th Prize</span>
            </button></Link> */}
            </div>
          </Link>
          {/* </div> */}
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default Home;
