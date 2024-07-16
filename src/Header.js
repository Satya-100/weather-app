import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="/" className="home-link">Weather App</a>
        <input
          type="text"
          id="location-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button id="search-btn" onClick={handleSearch}>Search</button>
      </nav>
    </header>
  );
};

export default Header;
