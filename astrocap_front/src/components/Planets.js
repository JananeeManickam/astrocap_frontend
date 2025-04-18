/* src/components/PlanetBrowser.js */
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [images, setImages] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);
  const [error, setError] = useState(null);

  // Fetch available planets
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pictures/planets/")
      .then((res) => {
        setPlanets(res.data.planets || []);
      })
      .catch((err) => {
        console.error("Error fetching planets:", err);
        setError("Failed to load planets.");
      })
      .finally(() => {
        setLoadingList(false);
      });
  }, []);

  // Handle planet card click
  const handlePlanetClick = (name) => {
    setSelectedPlanet(name);
    setImages([]);
    setLoadingImages(true);
    axios
      .get(`http://localhost:8000/api/planets/${name}/`)
      .then((res) => {
        setImages(res.data.images || []);
      })
      .catch((err) => {
        console.error(`Error fetching ${name} images:`, err);
        setError(`Failed to load ${name} images.`);
      })
      .finally(() => {
        setLoadingImages(false);
      });
  };

  // Back to planet list
  const handleBack = () => {
    setSelectedPlanet(null);
    setImages([]);
    setError(null);
  };

  if (loadingList) return <div className="text-center p-4">Loading planets...</div>;
  if (error) return <div className="text-center text-danger p-4">{error}</div>;

  // Show planet cards
  if (!selectedPlanet) {
    return (
      <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
        {planets.map((planet) => (
          <div
            key={planet}
            className="card text-center shadow hover-effect"
            style={{ width: "12rem", cursor: "pointer" }}
            onClick={() => handlePlanetClick(planet)}
          >
            <div className="card-body">
              <h5 className="card-title text-capitalize">{planet}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Show selected planet images
  return (
    <div className="p-4">
      <button className="btn btn-outline-primary mb-4" onClick={handleBack}>
        &larr; Back to Planets
      </button>
      <h2 className="mb-4 text-capitalize">{selectedPlanet}</h2>
      {loadingImages ? (
        <div className="text-center">Loading images...</div>
      ) : images.length === 0 ? (
        <div className="text-center text-muted">No images found for {selectedPlanet}.</div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {images.map((img) => (
            <div key={img.id} className="card" style={{ width: "12rem" }}>
              <img src={img.img_src} className="card-img-top" alt={`img-${img.id}`} />
              <div className="card-body">
                <p className="card-text small">{img.camera.full_name}</p>
                <p className="card-text small text-muted">{img.earth_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
