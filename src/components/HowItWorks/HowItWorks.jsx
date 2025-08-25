import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Setup Your wallet",
    desc: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
    img: "/assets/icons/wallet.png",
  },
  {
    id: 2,
    title: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    img: "/assets/icons/collection.png",
  },
  {
    id: 3,
    title: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs.",
    img: "/assets/icons/earn.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-header">
        <h3>How It Works</h3>
        <p>Find Out How To Get Started</p>
      </div>

      <div className="how-cards">
        {steps.map((step) => (
          <div className="how-card" key={step.id}>
            <img src={step.img} alt={step.title} className="how-icon" />
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
