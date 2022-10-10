import React from "react";
import "./CSS/Header.css";
import ganesha from "./Images/ganesha.jpeg";
import spiritualHealing from "./Images/spiritualHealing.jpeg"
import childlessProblemSolution from "./Images/childlessProblemSolution.jpeg"
import businessInvestment from "./Images/businessInvestment.jpeg"

export default function Header() {
  return (
    <div className="Header">

      <div className="carousel-container d-none d-lg-block ">
        <div id="carouselExampleDark" class="carousel slide carousel-dark" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active home-page-slider" data-bs-interval="10000">
              <img src={childlessProblemSolution} class="d-block w-100" alt="childlessProblemSolution"/>
              <div class="carousel-caption d-none d-md-block">
                <div className="slider-text">
                  <h5 className="">Childless Problem Solution</h5>
                </div>

              </div>
            </div>
            <div class="carousel-item home-page-slider" data-bs-interval="2000">
              <img src={businessInvestment} class="d-block w-100" alt="businessInvestment"/>
              <div class="carousel-caption d-none d-md-block">
                <div className="slider-text text-center">
                  <h5>Business Investment Guidance</h5>
                </div>
              </div>
            </div>
            <div class="carousel-item home-page-slider">
              <img src={spiritualHealing} class="d-block w-100" alt="spiritualHealing"/>
              <div class="carousel-caption d-none d-md-block">
                <div className="slider-text">
                  <h5>Spiritual Healing Solution</h5>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
      <div className="header-container">
        {/* <div className="row"> */}
          <div className=''>
            <img src={ganesha} className='header-image' alt='ganesha idol'></img>
          </div>
          <div className="">
            <div className="header-details">
              <h2>Welcome to The Best Indian Astrologer</h2>
              <p>Master Aditya Varma</p>
            </div>
          {/* </div> */}
      </div>
      
      {/* <div class="top-section bg-light d-none d-lg-block">
        <p class="text-center">Welcome to The Best Indian Astrologer</p>
        <h3 class="text-center">Master Aditya Varma</h3>
      </div> */}
        
      </div>
      
    </div>
      
  );
}