import React, { useState } from "react";
import "./SignUp.css";

// icons
import userIcon from "../assets/icons/user.svg";
import emailIcon from "../assets/icons/email.svg";
import lockIcon from "../assets/icons/lock.svg";

// left side image
import signupImg from "../assets/signup-image.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // input change handle
  const handleChange = (e) => {
    console.log("Typing:", e.target.name, "=", e.target.value); //console input
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" Submit button clicked");
    console.log(" Form Data Submitted:", formData);

    // Simple validation logs
    if (formData.password !== formData.confirmPassword) {
      console.error(" Password and Confirm Password do not match!");
    } else if (formData.password.length < 8) {
      console.error(" Password must be at least 8 characters!");
    } else {
      console.log(" All validations passed!");
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side Image */}
      <div className="signup-image">
        <img src={signupImg} alt="signup visual" />
      </div>

      {/* Right Side Form */}
      <div className="signup-form">
        <div className="text-block">
          <h1>Create Account</h1>
          <p className="subtitle">
            Welcome! Enter your details and start creating, collecting and
            selling NFTs.
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <img src={userIcon} alt="user" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <img src={emailIcon} alt="email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <img src={lockIcon} alt="password" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <img src={lockIcon} alt="confirm password" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="create-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
