import React from "react";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import ContentSection from "./components/ContentSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hhn.jpg)` }}
      >
        <Navbar />
        <FloatingButtons />
      </div>
      <ContentSection />
    </div>
  );
}

export default App;