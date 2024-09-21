import React, { useState } from 'react';
import { MapPin, Wind, Waves, Droplet } from 'lucide-react';
import '../css/Navbar.css'

const Header = () => (
  <header>
    <img src="/logo.png" alt="ESSO Logo" className="logo" />
    <h1 className="header-text">ESSO - Indian National Centre for Ocean Information Services</h1>
    <div className="header-links">
      <a href="#">Hindi</a> | <a href="#">Home</a> | <a href="#">Annual Reports</a> | <a href="#">Vacancies</a> | 
      <a href="#">Tenders</a> | <a href="#">Library</a> | <a href="#">Feedback</a> | <a href="#">Sitemap</a> | <a href="#">Contact Us</a>
    </div>
  </header>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><a href="#">Organisation</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Data & Information</a></li>
      <li><a href="#">Ocean Observations</a></li>
      <li><a href="#">Modelling & Research</a></li>
      <li><a href="#">Satellite Oceanography</a></li>
      <li><a href="#">ITCOcean</a></li>
    </ul>
  </nav>
);

const Sidebar = () => (
  <aside className="sidebar">
    <h3>Navigation Ports</h3>
    <ul>
      <li>Resting Ports</li>
      <li>Resting Ports</li>
      <li>Resting Ports</li>
      <li>Resting Ports</li>
      <li>Resting Ports</li>
    </ul>
  </aside>
);

const MapComponent = () => (
  <div className="map-container">
    <img src="/map.jpg" alt="Ocean Map" className="map-image" />
  </div>
);

const ControlPanel = () => {
  const [factor, setFactor] = useState('All');

  return (
    <div className="form-container">
      <select>
        <option>Starting Port</option>
      </select>
      <select>
        <option>Destination Port</option>
      </select>
      <span>Factors: </span>
      <button onClick={() => setFactor('Winds')} className={factor === 'Winds' ? 'active' : ''}>
        <Wind size={16} /> Winds
      </button>
      <button onClick={() => setFactor('Waves')} className={factor === 'Waves' ? 'active' : ''}>
        <Waves size={16} /> Waves
      </button>
      <button onClick={() => setFactor('Cyclone')} className={factor === 'Cyclone' ? 'active' : ''}>
        <Waves size={16} /> Cyclone
      </button>
      <button onClick={() => setFactor('Find')} className={factor === 'Find' ? 'active' : ''}>
        <MapPin size={16} /> Find
      </button>
      <button onClick={() => setFactor('All')} className={factor === 'All' ? 'active' : ''}>
        <Droplet size={16} /> All
      </button>
    </div>
  );
};

const App = () => (
  <div className="app">
    <Header />
    <Navigation />
    <div className="main-content">
      <Sidebar />
      <main className="content">
        <h2>Navigation Ports</h2>
        <ControlPanel />
        <MapComponent />
      </main>
    </div>
  </div>
);

export default App;
