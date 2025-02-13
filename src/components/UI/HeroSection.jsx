import React from "react";

import world from "../../assets/world.png";

const HeroSection = () => {
  return (
    <>
      <div className="selfContainer">
        <div className="left">
          <div className="heading">Explore the World!!!!</div>
          <div className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            consequuntur nobis temporibus! Quaerat culpa ab architecto
            cupiditate? Praesentium impedit exercitationem non atque nihil
            aliquam quis.
          </div>
          <button className="btn btn-primary">Start Exploring!</button>
        </div>
        <div className="right">
          <img src={world} alt="World Image" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
