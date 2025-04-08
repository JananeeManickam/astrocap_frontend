import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoonParticles from "./components/MoonParticles";
import CardDetailPage from "./components/CardDetailsPage";
import Menu from "./components/Menu";
import Home from "./components/Home";
// Layout that wraps all routes with shared components
function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <MoonParticles />
      <main style={{ flex: 1, paddingTop: "20px", zIndex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/explore"
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />
        <Route
          path="/card/:id"
          element={
            <Layout>
              <CardDetailPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
