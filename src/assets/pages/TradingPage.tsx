import React from 'react';

const demoItems = [
  {
    name: "Item 1",
    description: "Description for Item 1.",
    image: "path/to/image1.jpg"  // Replace with actual image path
  },
  {
    name: "Item 2",
    description: "Description for Item 2.",
    image: "path/to/image2.jpg"  // Replace with actual image path
  },
  // Add more items as needed
];

const TradingPage: React.FC = () => {
  return (
    <div className="trading-page">
      <h1>My Team Fortress 2 Trading</h1>
      <div className="trading-items-grid">
        {demoItems.map((item, index) => (
          <div key={index} className="trading-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradingPage;