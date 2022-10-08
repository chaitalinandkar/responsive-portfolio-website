import React from "react";
import "./CSS/Services.css";
import relationProblem from "./Images/relationProblem.jpeg";
import mangalikDoshaProblem from "./Images/mangalikDoshaProblem.jpeg";
import palmReading from "./Images/palmReading.png";

export default function Services() {
  return (
    <div className="Services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="service-list">
          <div className="service">
            <img src={relationProblem} className="img-fluid " alt="relationshipProblem"></img>
            <div className="layer">
              <h3>Relationship Problem Solution</h3>
              <a href="/servicePage"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div className="service">
            <img src={palmReading} className="img-fluid" alt="negativeEnergy"></img>
            <div className="layer">
              <h3>Palm Reading</h3>
              <a href="/servicePage"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div className="service">
            <img src={mangalikDoshaProblem} className="img-fluid" alt="psychicReading"></img>
            <div className="layer">
              <h3>Mangalik Dosha Problem Solution</h3>
              <a href="/servicePage"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

        </div>
        <a href={"/servicepage"} className="button-see-more">See More</a>
      </div>
    </div>
  );
}
