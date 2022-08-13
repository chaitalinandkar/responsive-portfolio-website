import React from "react";
import "./CSS/Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="container">

        <div className="row">
          <div className="col contact-left">
            <h1 className="fw-bold mb-4">Contact Me</h1>
            <p><i class="fa-solid fa-envelope"></i><span>astrologeradityavarma@gmail.com</span></p>
            <p><i class="fa-solid fa-phone"></i><span> +1 (408) 549-5475</span></p>
            <p><i class="fa-solid fa-location-dot"></i><span>Location</span></p>
          </div>

          <div className="col contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required ></input>
              <input type="email" name="Email" placeholder="Your Email" required></input>
              <textarea name="message" rows={6} placeholder="Your Mesasge"></textarea>
              <button type="submit" className="button-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}