import React from "react";
import logo from "./logo.png";
import "./NavigationBar.css";

export default function NavigationBar() {
  console.log(logo);
  return (
    <div className="NavigationBar">
      <nav>
        <img src={logo} className="logo" alt="Logo"></img>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
      
    </div>
  );
}