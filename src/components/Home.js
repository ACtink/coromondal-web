import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <img src="home-banner.gif" className="banner-image" alt="" />
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-image-container">
            <img src="1.gif"  className="card-image" alt="" />
          </div>
          <Link to="/grandprize" className="button-link"><button class="button">
            <span>Grand Prize</span>
          </button></Link> 
          
        </div>
        <div className="card">
          <div className="card-image-container">
          <img src="2.gif" className="card-image" alt="" />
          </div>
          <Link to="/1stPrize" className="button-link"><button class="button">
            <span>1st Prize</span>
          </button></Link>
        </div>
        <div className="card">
          <div className="card-image-container">
          <img src="3.gif" className="card-image" alt="" />
          </div>
        
          <Link to="/2ndPrize" className="button-link"><button class="button">
            <span>2nd Prize</span>
          </button></Link>
        </div>
        <div className="card">
          <div className="card-image-container">
          <img src="4.gif" className=" card-image" alt="" />
          </div>
          <Link to="/3rdPrize" className="button-link"><button class="button">
            <span>3rd Prize</span>
          </button></Link>
        </div>
        <div className="inner-container">
          <div className="card">
            <div className="card-image-container">
            <img src="5.gif" className="card-image" alt="" />
            </div>
            <Link to="/4thPrize" className="button-link"><button class="button">
              <span>4rth Prize</span>
            </button></Link>
          </div>
          <div className="card">
            <div className="card-image-container">
            <img src="6.gif" className=" card-image" alt="" />
            </div>
            <Link to="/5thPrize" className="button-link"><button class="button">
              <span>5th Prize</span>
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
