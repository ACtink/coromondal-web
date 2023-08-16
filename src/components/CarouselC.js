import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselC() {
    return (
       
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="1.gif" alt="" />
                </div>
                <div>
                    <img src="2.gif" alt="" />
                </div>
                <div>
                    <img src="3.gif" alt="" />
                </div>
            </Carousel>
        </div>
    );
}