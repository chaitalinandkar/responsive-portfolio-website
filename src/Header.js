import React from "react";
import "./Header.css"
import ganesha from "./Images/ganesha.jpg";

export default function Header() {
  return (
      <div className="row">
        <div className='col'>
          <img src={ganesha} className='header-image img-fluid' alt='ganesha idol'></img>
        </div>
        <div className="col">
          <div className="header-details">
            <h1>Hi, I am </h1>
            <h2>Master Aditya Varmaji</h2>
            <p>The Best Indian Astrologer</p>
          </div>
          
        </div>
      </div>
  );
}