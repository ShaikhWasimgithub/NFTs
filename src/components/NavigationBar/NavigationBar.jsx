import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //  Router Link import
import "./Navigation.css";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.svg";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Left (Logo + Brand) */}
        <div className="brand-wrap">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand">NFT Marketplace</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <ul className="menu">
            <li>
              <Link to="/marketplace" className="menu-item">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/rankings" className="menu-item">
                Rankings
              </Link>
            </li>
            <li>
              <Link to="/wallet" className="menu-item">
                Connect a wallet
              </Link>
            </li>
          </ul>
          {/*  SignUp linked */}
          <Link to="/signup" className="cta">
            <img src={userIcon} alt="User" className="user-icon" />
            Sign Up
          </Link>
        </div>

        {/* Hamburger (Mobile Right) */}
        <button
          className="hamburger-btn"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer ${open ? "open" : ""}`}>
        <button className="drawer-close" onClick={() => setOpen(false)}>
          ✕
        </button>
        <Link
          to="/marketplace"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Marketplace
        </Link>
        <Link
          to="/rankings"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Rankings
        </Link>
        <Link
          to="/wallet"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Connect a wallet
        </Link>
        {/*  SignUp linked in drawer too */}
        <Link
          to="/signup"
          className="cta drawer-cta"
          onClick={() => setOpen(false)}
        >
          <img src={userIcon} alt="User" className="user-icon" />
          Sign Up
        </Link>
      </aside>
    </nav>
  );
};

export default NavigationBar;
