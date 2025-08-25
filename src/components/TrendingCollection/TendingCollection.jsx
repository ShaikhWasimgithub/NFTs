import "./TrendingCollection.css";

const collections = [
  {
    id: 1,
    title: "DSGN Animals",
    author: "MrFox",
    avatar: "../../assets/avatars/fox.png",
    primary: "/assets/nfts/animal-1.png",
    secondary: ["/assets/nfts/animal-2.png", "/assets/nfts/animal-3.png"],
    count: "1025+",
  },
  {
    id: 2,
    title: "Magic Mushrooms",
    author: "Shroomie",
    avatar: "/assets/avatars/shroomie.png",
    primary: "/assets/nfts/mushroom-1.png",
    secondary: ["/assets/nfts/mushroom-2.png", "/assets/nfts/mushroom-3.png"],
    count: "1025+",
  },
  {
    id: 3,
    title: "Disco Machines",
    author: "BeKind2Robots",
    avatar: "/assets/avatars/robot.png",
    primary: "/assets/nfts/robot-1.png",
    secondary: ["/assets/nfts/robot-2.png", "/assets/nfts/robot-3.png"],
    count: "1025+",
  },
];

export default function TrendingCollection() {
  return (
    <section className="trending">
      <div className="trending-headline">
        <h3 className="trending-title">Trending Collection</h3>
        <p className="trending-sub">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="collection-row">
        {collections.map((col) => (
          <div key={col.id} className="collection-card">
            <div className="photos">
              <img src={col.primary} alt={col.title} className="primary" />
              <div className="secondary-row">
                <img src={col.secondary[0]} alt="secondary" />
                <img src={col.secondary[1]} alt="secondary" />
                <div className="count">{col.count}</div>
              </div>
            </div>

            <div className="info">
              <h5>{col.title}</h5>
              <div className="artist">
                <img src={col.avatar} alt={col.author} />
                <span>{col.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
