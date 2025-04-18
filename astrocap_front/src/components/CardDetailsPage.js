// src/components/CardDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiEndpoints = {
  1: "http://localhost:8000/api/pictures/stellarium/",
  2: "http://localhost:8000/api/pictures/telescopes/",
  3: "http://localhost:8000/api/pictures/planets/",
  4: "http://localhost:8000/api/pictures/constellations/",
  5: "http://localhost:8000/api/pictures/satellites/",
  6: "http://localhost:8000/api/pictures/events/",
};

const CardDetailPage = () => {
  const { id } = useParams();
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = apiEndpoints[id];

    if (!apiUrl) return;

    axios
      .get(apiUrl)
      .then((res) => {
        const data = res.data;
        // Ensure the response is an array before setting
        setPictures(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {pictures.length === 0 ? (
        <div className="text-gray-500 col-span-full text-center">No pictures found.</div>
      ) : (
        pictures.map((pic, index) => (
          <div key={index} className="border rounded-xl shadow-md p-3">
            <img
              src={pic.image_url}
              alt={pic.title || `Image ${index + 1}`}
              className="w-full h-auto rounded-md"
            />
            <div className="mt-2 text-center font-semibold">
              {pic.title || `Image ${index + 1}`}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardDetailPage;
