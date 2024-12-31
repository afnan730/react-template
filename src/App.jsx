import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';
// import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
           
            <Route path="/login" element={<LoginPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
