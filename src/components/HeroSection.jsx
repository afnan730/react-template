import React, { useState, useEffect } from 'react';
import heroImage1 from '../assets/hero.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/hero3.jpg';
import SearchBar from './SearchBar';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(heroImage1); // Default image
  const images = [heroImage1, heroImage2, heroImage3]; // Array of images
  const intervalTime = 2000; // Time in milliseconds for background change

  useEffect(() => {
    let currentIndex = 0;

    const changeBackground = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; 
      setCurrentImage(images[currentIndex]);
    }, intervalTime);

    return () => clearInterval(changeBackground); 
  }, [images]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${currentImage})`,
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        transition: 'background-image 1s ease-in-out', 
      }}
    >
      <div className="hero-content" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px',
        borderRadius: '4px',
      }}>
        <h1>Welcome to  Eskici </h1>
        <h2>Second-Hand Marketplace</h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
