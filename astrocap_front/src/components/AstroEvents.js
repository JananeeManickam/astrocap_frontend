import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AstroEvents() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pictures/events/")
      .then((res) => {
        setPictures(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching astro events data:", err);
        setLoading(false);
      });
  }, []);

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
}
