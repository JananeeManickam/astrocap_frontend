/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoonParticles from "./components/MoonParticles";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ChatBotLauncher from "./components/ChatBotLauncher";

import Telescopes from "./components/Telescopes";
import Planets from "./components/Planets";
import Constellations from "./components/Constellations";
import Satellites from "./components/Satellites";
import AstroEvents from "./components/AstroEvents";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <MoonParticles />
      <main style={{ flex: 1, paddingTop: "20px", zIndex: 1 }}>{children}</main>
      <ChatBotLauncher />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/explore" element={<Layout><Menu /></Layout>} />
        {/* Stellarium is now external, no internal route needed */}
        <Route path="/telescopes" element={<Layout><Telescopes /></Layout>} />
        <Route path="/planets" element={<Layout><Planets /></Layout>} />
        <Route path="/constellations" element={<Layout><Constellations /></Layout>} />
        <Route path="/satellites" element={<Layout><Satellites /></Layout>} />
        <Route path="/astro-events" element={<Layout><AstroEvents /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
