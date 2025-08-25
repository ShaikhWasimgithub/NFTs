import React from "react";
import "./BrowseCategories.css";

const categories = [
  {
    id: 1,
    name: "Art",
    image: "/assets/categories/art.jpg",
    icon: "/assets/icons/art-icon.png",
  },
  {
    id: 2,
    name: "Collectibles",
    image: "/assets/categories/collectibles.jpg",
    icon: "/assets/icons/collectibles-icon.png",
  },
  {
    id: 3,
    name: "Music",
    image: "/assets/categories/music.jpg",
    icon: "/assets/icons/music-icon.png",
  },
  {
    id: 4,
    name: "Photography",
    image: "/assets/categories/photography.jpg",
    icon: "/assets/icons/photography-icon.png",
  },
  {
    id: 5,
    name: "Video",
    image: "/assets/categories/video.jpg",
    icon: "/assets/icons/video-icon.png",
  },
  {
    id: 6,
    name: "Utility",
    image: "/assets/categories/utility.jpg",
    icon: "/assets/icons/utility-icon.png",
  },
  {
    id: 7,
    name: "Sport",
    image: "/assets/categories/sport.jpg",
    icon: "/assets/icons/sport-icon.png",
  },
  {
    id: 8,
    name: "Virtual Worlds",
    image: "/assets/categories/virtual.jpg",
    icon: "/assets/icons/virtual-icon.png",
  },
];

const BrowseCategories = () => {
  return (
    <section className="browse-section">
      <div className="browse-header">
        <h3>Browse Categories</h3>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="overlay">
                <img src={cat.icon} alt={cat.name} className="category-icon" />
              </div>
            </div>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
