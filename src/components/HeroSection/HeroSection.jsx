import React from "react";
import "./HeroSection.css";
import nftImage from "../../assets/spacewalking.png"; // NFT image
import avatarImage from "../../assets/animakid.png"; // Avatar image
import rocketIcon from "../../assets/rocket-launch.svg"; // Rocket launch icon from figma

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__frame">
        {/* LEFT */}
        <div className="hero__left fadeInLeft">
          <div className="hero__textblock">
            <h1 className="hero__title">
              Discover Digital Art & <br /> Collect NFTs
            </h1>

            <p className="hero__subtitle">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>

          {/* CTA */}
          <button className="hero__cta">
            <img
              src={rocketIcon}
              alt="Rocket Launch"
              className="hero__ctaIcon"
            />
            <span>Get Started</span>
          </button>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__statValue">240k+</div>
              <div className="hero__statLabel">Total Sale</div>
            </div>
            <div className="hero__stat">
              <div className="hero__statValue">100k+</div>
              <div className="hero__statLabel">Auctions</div>
            </div>
            <div className="hero__stat">
              <div className="hero__statValue">240k+</div>
              <div className="hero__statLabel">Artists</div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero__card fadeInRight sway">
          <div className="hero__imageWrap">
            <img className="hero__image" src={nftImage} alt="Space Walking" />
          </div>
          <div className="hero__info">
            <h3 className="hero__nftTitle">Space Walking</h3>
            <div className="hero__artistRow">
              <img className="hero__avatar" src={avatarImage} alt="Animakid" />
              <span className="hero__artistName">Animakid</span>
            </div>

            {/* Total Sale section */}
            <div className="hero__saleRow">
              <span className="hero__saleLabel">Total Sale:</span>
              <span className="hero__saleValue">34.53 ETH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
