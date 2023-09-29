import React, { useState } from 'react';
import './Background.css';

const generateStar = () => {
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: 5 + Math.random() * 10
    };
};

const Background: React.FC = () => {
    const numStars = 50;
    const [stars, setStars] = useState<{ x: number, y: number, duration: number }[]>(Array.from({ length: numStars }).map(generateStar));

    return (
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
    );
}

export default Background;
