import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"; 
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

export const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showThumbs={false}>
        <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="Item2" />
            <p className='legend'>Peer-to-Peer Suoport</p>
        </div>
        </Carousel>
    </div>
  )
}

export default Services;