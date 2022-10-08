import React from "react";
import logo from "./Images/logo_.png";
import "./CSS/NavigationBar.css";
import { Link } from "react-router-dom";


export default function NavigationBar() {
  console.log(logo);
  return (
    <div className="NavigationBar">
      {/* <nav>
        <img src={logo} className="logo" alt="Logo"></img>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav> */}
      <nav className="navbar navbar-expand-lg bg-light fs-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="Logo"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <Link to='/servicePage'>
                <li className="nav-item">
                  <a className="nav-link" href="/">Services</a>
                </li>
              </Link>
              
              <Link to='/contactPage'>
                <li className="nav-item">
                  <a className="nav-link" href="">Contact</a>
                </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
