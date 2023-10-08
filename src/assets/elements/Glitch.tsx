import React, { useEffect, useState } from 'react';
import './Glitch.css';

const Glitch: React.FC = () => {
  const [glitchText, setGlitchText] = useState('Goose');
    
  useEffect(() => {
      const interval = Math.random() * 3000 + 2000;
      
      const toggleText = setTimeout(() => {
          setGlitchText(prevText => prevText === 'Goose' ? '[REDACTED]' : 'Goose');
      }, interval);
      
      return () => clearTimeout(toggleText);
  }, [glitchText]);

  return (
      <span className="glitch">{glitchText}</span>
  );
}

export default Glitch;
