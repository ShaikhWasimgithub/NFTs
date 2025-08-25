import React from "react";
import "./TopCreators.css";

// Avatars
import Avatar1 from "../../assets/creators/creator1.png";
import Avatar2 from "../../assets/creators/creator2.png";
import Avatar3 from "../../assets/creators/creator3.png";
import Avatar4 from "../../assets/creators/creator4.png";
import Avatar5 from "../../assets/creators/creator5.png";
import Avatar6 from "../../assets/creators/creator6.png";
import Avatar7 from "../../assets/creators/creator7.png";
import Avatar8 from "../../assets/creators/creator8.png";
import Avatar9 from "../../assets/creators/creator9.png";
import Avatar10 from "../../assets/creators/creator10.png";
import Avatar11 from "../../assets/creators/creator11.png";
import Avatar12 from "../../assets/creators/creator12.png";

// Rocket icon (Figma export SVG)
import { Rocket } from "lucide-react";

const creators = [
  { id: 1, name: "Keepitreal", sales: "34.53 ETH", avatar: Avatar1 },
  { id: 2, name: "Digilab", sales: "34.53 ETH", avatar: Avatar2 },
  { id: 3, name: "Gravityone", sales: "34.53 ETH", avatar: Avatar3 },
  { id: 4, name: "Juaine", sales: "34.53 ETH", avatar: Avatar4 },
  { id: 5, name: "Bluewhale", sales: "34.53 ETH", avatar: Avatar5 },
  { id: 6, name: "Mr Fox", sales: "34.53 ETH", avatar: Avatar6 },
  { id: 7, name: "Shroomie", sales: "34.53 ETH", avatar: Avatar7 },
  { id: 8, name: "Robotica", sales: "34.53 ETH", avatar: Avatar8 },
  { id: 9, name: "RustyRobot", sales: "34.53 ETH", avatar: Avatar9 },
  { id: 10, name: "Animakid", sales: "34.53 ETH", avatar: Avatar10 },
  { id: 11, name: "Dotgu", sales: "34.53 ETH", avatar: Avatar11 },
  { id: 12, name: "IceApes", sales: "34.53 ETH", avatar: Avatar12 },
];

export default function TopCreators() {
  return (
    <div className="top-creators-section">
      <div className="top-header">
        <div>
          <h2>Top Creators</h2>
          <p>Checkout Top Rated Creators On The Nft Marketplace</p>
        </div>
        <button className="ranking-btn">
          <Rocket size={18} className="rocket-icon" />
          View Rankings
        </button>
      </div>

      <div className="creators-grid">
        {creators.map((creator, index) => (
          <div key={creator.id} className="creator-card">
            <span className="creator-rank">{index + 1}</span>
            <img
              src={creator.avatar}
              alt={creator.name}
              className="creator-img"
            />
            <h3>{creator.name}</h3>
            <p>
              Total Sales: <strong>{creator.sales}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
