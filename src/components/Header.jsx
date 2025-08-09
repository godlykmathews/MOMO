import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <span className="buffalo-emoji" role="img" aria-label="Buffalo">🐃</span>
          <div className="title">
            <span className="title-main">MOMOs</span>
            <span className="title-sub">Human-Buffalo Nexus</span>
          </div>
        </div>
        <div className="header-tagline">
          <p>
            <strong>"Pothe... Potha Potha Potha..."</strong>
          </p>
          <p className="english-translation">
            (The pinnacle of inter-species communication technology)
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
