import React from "react";
import "./CSS/ServiceSatisfaction.css";
import availability from "./Images/availability.jpeg";
import trustedClients from "./Images/trustedClients.jpeg";
import privacyGuaranteed from "./Images/privacyGuaranteed.webp";
import predictionExpert from "./Images/predictionExpert.jpeg";
import satisfaction from "./Images/satisfaction.png"

export default function ServiceSatisfaction() {
  return (
    <div className="ServiceSatisfaction">
      <div className="container">
        <h1 className="sub-title">Why to choose Master Aditya Varmaji ?</h1>
        <div className="satisfaction-list-1">
          <div className="satisfaction-1">
            <img src={availability} className="img-fluid" alt='availability'></img>
          </div>

          <div className="satisfaction-1">
            <img src={trustedClients} className="img-fluid" alt='trusted clients'></img>
          </div>

          <div className="satisfaction-1">
            <img src={privacyGuaranteed} className="img-fluid" alt='guarenteed privacy'></img>
          </div>

          <div className="satisfaction-1">
            <img src={predictionExpert} className="img-fluid" alt='prediction expert'></img>
          </div>
          
        </div>
        <div className="satisfaction-list-2">
          <div className="satisfaction-2">
            <img src={satisfaction} className="img-fluid" alt='availability'></img>
          </div>
        </div>

      </div>
    </div>
  );
}