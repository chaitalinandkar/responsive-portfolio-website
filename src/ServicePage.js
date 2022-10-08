import React from "react";
import "./CSS/ServicePage.css"
import NavigationBar from "./NavigationBar";
import relationProblem from "./Images/relationProblem.jpeg";
import mangalikDoshaProblem from "./Images/mangalikDoshaProblem.jpeg";
import palmReading from "./Images/palmReading.png";
import astrology from "./Images/astrology.webp";
import businessInvestment from "./Images/businessInvestment.jpeg";
import businessProblem from "./Images/businessProblem.jpeg";
import careerProblem from "./Images/careerProblem.jpeg";
import childlessProblemSolution from "./Images/childlessProblemSolution.jpeg";
import courtCase from "./Images/courtCase.jpeg";
import blackMagic from "./Images/blackMagic.jpeg";
import divorce from "./Images/divorce.jpeg";
import drinkAndDrugsProblem from "./Images/drinkAndDrugsProblem.webp";
import enemyProblem from "./Images/enemyProblem.jpeg";
import financialProblem from "./Images/financialProblem.jpeg";
import getExBack from "./Images/getExBack.jpeg";
import healthIssue from "./Images/healthIssue.webp";
import husbandWifeDispute from "./Images/husbandWifeDispute.jpeg";
import lawSuits from "./Images/lawSuits.jpeg";
import lovePsychic from "./Images/lovePsychic.jpeg";
import psychicReading from "./Images/psychicReading.jpeg";
import negativeEnergy from "./Images/negativeEnergy.jpeg";
import sexualProblem from "./Images/sexualProblem.jpeg";
import spiritualHealing from "./Images/spiritualHealing.jpeg";
import bringLoveBackinRealtion from "./Images/bringLoveBackinRealtion.jpeg";

export default function ServicePage() {
  return (
    <div className="servicePage">
      <NavigationBar />
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="service-list">
          <div className="service--container">
            <div className="row mt-5">
              <div className="col-sm mt-5">
                <div className="service">
                  <img src={relationProblem} className="img-fluid relationshipProblemImage" alt="relationshipProblem"></img>
                  <div className="layer">
                    <h3>Relationship Problem Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm mt-5">
                <div className="service">
                  <img src={palmReading} className="img-fluid" alt="negativeEnergy"></img>
                  <div className="layer">
                    <h3>Palm Reading</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm mt-5">
                <div className="service">
                  <img src={mangalikDoshaProblem} className="img-fluid" alt="psychicReading"></img>
                  <div className="layer">
                    <h3>Mangalik Dosha Problem Solution</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="service">
                  <img src={astrology} className="img-fluid " alt="astrology"></img>
                  <div className="layer">
                    <h3>Astrology and Horoscope</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={businessInvestment} className="img-fluid" alt="businessInvestment"></img>
                  <div className="layer">
                    <h3>Business Investment Guidance</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={businessProblem} className="img-fluid" alt="businessProblem"></img>
                  <div className="layer">
                    <h3>Financial Problem Solution</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="service">
                  <img src={careerProblem} className="img-fluid " alt="careerProblem"></img>
                  <div className="layer">
                    <h3>Career Problem Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={childlessProblemSolution} className="img-fluid" alt="childlessProblemSolution"></img>
                  <div className="layer">
                    <h3>Childless Problem Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={courtCase} className="img-fluid" alt="courtCase"></img>
                  <div className="layer">
                    <h3>Court Case Problem Solution</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="service">
                  <img src={blackMagic} className="img-fluid " alt="blackMagic"></img>
                  <div className="layer">
                    <h3>Black Magic Removal Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={divorce} className="img-fluid" alt="divorce"></img>
                  <div className="layer">
                    <h3>Divorce Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={drinkAndDrugsProblem} className="img-fluid" alt="drinkAndDrugsProblem"></img>
                  <div className="layer">
                    <h3>Drink & Drugs Problem Solution</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="service">
                  <img src={enemyProblem} className="img-fluid " alt="enemyProblem"></img>
                  <div className="layer">
                    <h3>Enemy Problem Solutiom</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={financialProblem} className="img-fluid" alt="financialProblem"></img>
                  <div className="layer">
                    <h3>Financial Problem Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={getExBack} className="img-fluid" alt="getExBack"></img>
                  <div className="layer">
                    <h3>Get Your Ex Back</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="service">
                  <img src={healthIssue} className="img-fluid " alt="healthIssue"></img>
                  <div className="layer">
                    <h3>Health Issue Problem Solutiom</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={husbandWifeDispute} className="img-fluid" alt="husbandWifeDispute"></img>
                  <div className="layer">
                    <h3>Husband-Wife Disputes Problem Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={lawSuits} className="img-fluid" alt="lawSuits"></img>
                  <div className="layer">
                    <h3>Law Suits Problem</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="service">
                  <img src={lovePsychic} className="img-fluid " alt="lovePsychic"></img>
                  <div className="layer">
                    <h3>Love Psychic</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={psychicReading} className="img-fluid" alt="psychicReading"></img>
                  <div className="layer">
                    <h3>Psychic Reading</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={negativeEnergy} className="img-fluid" alt="negativeEnergy"></img>
                  <div className="layer">
                    <h3>Negative Energy Problem</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="service">
                  <img src={sexualProblem} className="img-fluid " alt="sexualProblem"></img>
                  <div className="layer">
                    <h3>Sexual Problem Solution</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={spiritualHealing} className="img-fluid" alt="spiritualHealing"></img>
                  <div className="layer">
                    <h3>Spiritual Healing</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="service">
                  <img src={bringLoveBackinRealtion} className="img-fluid" alt="bringLoveBackinRealtion"></img>
                  <div className="layer">
                    <h3>Bring Love Back in Relationship</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          

          

          

          {/* <div className="service">
            <img src={astrologyAndHoroscope} className="img-fluid" alt="astrologyAndHoroscope"></img>
            <div className="layer">
              <h3>Mangalik Dosha Problem Solution</h3>
            </div>
          </div> 
          */}
        </div>
      </div>
    </div>
  );
}