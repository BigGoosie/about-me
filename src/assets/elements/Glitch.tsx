import React from 'react';
import './Glitch.css';

interface GlitchProps {
    text: string;
}

const Glitch: React.FC<GlitchProps> = ({text}) => {
  return (
    <span className="glitch">{text}</span>
  );
}

export default Glitch;
