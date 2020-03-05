import React from "react";
import "./Contact.css";

const contact = props => {
  return (
    <div className="contact">
      <div className="map"></div>

      <div className="form">
        <form name="contact" method="POST" data-netlify="true">
          <p className="yourname">
            <label>
              <input type="text" name="name" placeholder="Your Name:" />
            </label>
          </p>
          <p className="youremail">
            <label>
              <input type="email" name="email" placeholder="Your Email:" />
            </label>
          </p>

          <p>
            <label>
              <textarea name="message" placeholder="Message..."></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default contact;
