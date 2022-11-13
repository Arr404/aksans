import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <video src="hero.mp4" autoPlay muted loop />
        <div className="hero-content">
          {/* <img src="LogoPAN.png" alt="hero-logo" /> */}
          <img src="logoWhite.png"></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
