import React from "react";
import "./CSS/Services.css";
import blackMagic from "./Images/blackMagic.jpeg";
import negativeEnergy from "./Images/negativeEnergy.jpeg";
import psychicReading from "./Images/psychicReading.jpeg";

export default function Services() {
  return (
    <div className="Services">
      <div className="container">
        
        <h1 className="sub-title">My Services</h1>
        <div className="service-list">
          <div className="service">
            <img src={blackMagic} className="black-magic img-fluid " alt="blackMagic"></img>
            <div className="layer">
              <h3>Black Magic</h3>
              <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div className="service">
            <img src={negativeEnergy} className="img-fluid" alt="negativeEnergy"></img>
            <div className="layer">
              <h3>Negative Energy Removal</h3>
              <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div className="service">
            <img src={psychicReading} className="img-fluid" alt="psychicReading"></img>
            <div className="layer">
              <h3>Psychic Reading</h3>
              <a href="/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
        <a href={"/servicepage"} className="button-see-more">See More</a>
      </div>
    </div>
  );
}
