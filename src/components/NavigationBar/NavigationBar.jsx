import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.svg"; // Figma exported user icon

const NavigationBar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Left - Logo */}
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand">NFT Marketplace</span>
        </div>

        {/* Right - Menu + Button */}
        <div className="nav-right">
          <div className="menu">
            <a href="#" className="menu-item">
              Marketplace
            </a>
            <a href="#" className="menu-item">
              Rankings
            </a>
            <a href="#" className="menu-item">
              Connect a wallet
            </a>
          </div>
          <a href="#" className="cta">
            <img src={userIcon} alt="User" className="user-icon" />
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
