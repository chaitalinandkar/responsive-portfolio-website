import React from "react";
import "./CSS/Header.css";
import ganesha from "./Images/ganesha.jpeg";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className='col-4'>
          <img src={ganesha} className='header-image img-fluid' alt='ganesha idol'></img>
        </div>
        <div className="col-8">
          <div className="header-details">
            <h1>Hi, I am </h1>
            <h2>Master Aditya Varmaji</h2>
            <p>The Best Indian Astrologer</p>
          </div>
          
        </div>
      </div>
    </div>
      
  );
}