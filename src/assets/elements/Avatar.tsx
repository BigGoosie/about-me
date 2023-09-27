import avatarGif from '../images/avatar.gif';
import Glitch from './Glitch'
import React from 'react';
import './Avatar.css';

const Avatar: React.FC = () => {
  return (
    <div className="avatar-container">
      <img src={avatarGif} className="avatar" />
      <div style={{ height: '20px', width: '100%' }}></div>

      <div className="text-container"><Glitch text="*Goose or*" /></div>
      <div className="text-container"><Glitch text="[Redacted]" /></div>
    </div>
  );
}

export default Avatar;

/*
      <h1 className="display-name">
        <Glitch text="Goose" /> <span className="separator">|</span> <Glitch text="[Redacted]" />
      </h1>
*/