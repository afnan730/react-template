import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
// import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
    
      <div className="main-content">
        <HeroSection />
        <ProductGrid />
      </div>
    </div>
  );
};

export default App;
