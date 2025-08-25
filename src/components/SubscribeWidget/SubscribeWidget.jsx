import React from "react";
import "./SubscribeWidget.css";

const SubscribeWidget = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-card">
        {/* Left Image */}
        <div className="subscribe-image">
          <img src="/assets/subscribe/astronaut.png" alt="Astronaut" />
        </div>

        {/* Right Content */}
        <div className="subscribe-content">
          <div className="subscribe-text">
            <h3 className="subscribe-title">Join our weekly digest</h3>
            <p className="subscribe-subtitle">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email here"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              <img
                src="/assets/icons/mail-icon.svg"
                alt="Mail Icon"
                className="subscribe-icon"
              />
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeWidget;
