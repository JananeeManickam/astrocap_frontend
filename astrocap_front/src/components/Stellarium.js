import React, { useCallback, useState } from "react";

export default function Stellarium() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLaunch = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/pictures/stellarium/");
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      // Assuming data returns an array of pictures; if you need a URL, adjust accordingly.
      window.open(data[0].stellariumUrl || "", "_blank");
    } catch (err) {
      console.error(err);
      setError("Failed to launch Stellarium.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="p-4 text-center">
      <button onClick={handleLaunch} disabled={loading} className="btn btn-primary">
        {loading ? "Loading…" : "Launch Stellarium"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

