import React from "react";
import profilePicture from "./Images/profilePicture.png"
import "./CSS/About.css"

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="">About Me</h1>
        <div className="row about-section">
          <div className="col-sm-7 about-desc">
            
            <p>I'm Master Aditya Varmaji and I'm a Best Indian Astrologer in California Psychic reader, spiritual healer.
              I provide services to the people of United States (USA) and Canada. I have more than 68 years of experience in this vedic field.
              With my assistance more than lakhs of people has benefited. I help individuals in resolving both personal and professional problems.
              I do havan prayers in homes like Durga Matha Puja, Siva Subramaniya Puja, Hanuman Puja, Lakshmi Puja and many more which clears Negative Energy, Evil Eye and Destroys Bad Spirits in your Family and Home.</p>
          </div>
          <div className="col-sm-4 about-picture">
            <img src={profilePicture} alt="profile"></img>
          </div>
        </div>
      </div>
    </div>
  );
}