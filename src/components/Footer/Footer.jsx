import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-info">
        {/* Column 1 - Logo + About + Socials */}
        <div className="footer-col">
          <img
            src="/assets/icons/logo.svg"
            alt="NFT Marketplace Logo"
            className="footer-logo"
          />
          <p className="footer-text">
            NFT marketplace UI created with Anima for Figma.
          </p>

          <div className="footer-community">
            <p className="footer-text">Join our community</p>
            <div className="footer-icons">
              <img src="/assets/icons/discord.svg" alt="Discord" />
              <img src="/assets/icons/youtube.svg" alt="YouTube" />
              <img src="/assets/icons/twitter.svg" alt="Twitter" />
              <img src="/assets/icons/instagram.svg" alt="Instagram" />
            </div>
          </div>
        </div>

        {/* Column 2 - Explore */}
        <div className="footer-col">
          <h5 className="footer-title">Explore</h5>
          <ul className="footer-links">
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </div>

        {/* Column 3 - Subscribe */}
        <div className="footer-col">
          <h5 className="footer-title">Join our weekly digest</h5>
          <p className="footer-text">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Enter your email here"
              className="footer-input"
            />
            <button type="submit" className="footer-button">
              {/* <img
                src="/assets/icons/mail-icon.svg"
                alt="Mail"
                className="footer-mail-icon"
              /> */}
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom */}
      <p className="footer-copy">Ⓒ NFT Market. Use this template freely.</p>
    </footer>
  );
};

export default Footer;
