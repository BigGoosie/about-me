import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React, { useState } from 'react'

import { MainPage, ProjectsPage, LinksPage, TradingPage } from './assets/pages'
import "./main.css"

type BackgroundProps = { children?: React.ReactNode; }
const Background: React.FC<BackgroundProps> = ({ children }) => {
  const numStars = 50;
  const generateStar = () => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 5 + Math.random() * 10
    };
  };

  const [stars] = useState<{ x: number, y: number, duration: number }[]>(Array.from({ length: numStars }).map(generateStar));

  return (
    <div className="background">
      <div className="background-container">
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="star"
            style={{
              left: star.x,
              top: star.y,
              animationDuration: `${star.duration}s`
            }}
          ></div>
        ))}
      </div>
      {children}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Background>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/trading" element={<TradingPage />} />
        </Routes>
      </Router>
    </Background>
  </React.StrictMode>,
)