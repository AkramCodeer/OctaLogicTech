import React from 'react';
import './HeroPage.css'; // Import CSS file for styling

function HeroPage() {
  return (
    <div className="hero-container">
      {/* Main hero image */}
      <img className="main-car" src="main-car.png" alt="Main Car" />

      {/* Background images */}
      <img className="hero-bg" src="hero-bg.png" alt="Hero Background" />
      

      {/* Text content */}
      <div className="text-content">
        <h3>Plan your trip now</h3>
        <h1>Save big with our car rental</h1>
        <p>Rent the car of your dreams.<br/>
         Unbeatable prices, unlimited miles,
         <br/> flexible pick-up options and much more.</p>
      </div>
    </div>
  );
}

export default HeroPage;
