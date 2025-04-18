import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./frozencard.css";
import { color } from "framer-motion";

function Profile({ user }) {
  return (
    <div className="frozen-card d-flex flex-column justify-content-center align-items-center text-center py-5 px-3">
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#cbd5e1",
        }}
      >
        Welcome back,
        <span
          style={{
            background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            marginLeft: "0.5rem",
          }}
        >
          {user?.name || "Mary Jane"}!
          <hr
  style={{
    height: "2px",
    border: "none",
    marginTop: "1rem",
    background: "linear-gradient(90deg, silver, #e5e7eb, silver)",
    boxShadow: "0 0 10px silver, 0 0 20px #f8fafc",
  }}
/>
        </span>
      </h2>
         
      <div
        className="card mt-4 p-4 shadow-lg border-0"
        style={{
          maxWidth: "850px",
          width: "100%",
          height: "600px",
          background:
            "linear-gradient(135deg, rgb(163, 164, 240), rgb(123, 194, 245))",
          borderRadius: "2rem",
        }}
      >
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={
                user?.avatar ||
                "https://a.storyblok.com/f/191576/1176x882/9bdc5d8400/round_profile_picture_hero_before.webp"
              }
              alt="User"
              className="rounded-circle shadow"
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                border: "5px solid rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>

          <div className="col-md-8 text-start">
            <h4 className="fw-bold mb-2" style={{ color: "#1e293b" }}>
              {user?.name || "Mary Jane"}
            </h4>
            <br />
            <p className="mb-1" style={{ color: "#334155" }}>
              <strong>Email:</strong> {user?.email || "maryjane0709@gmail.com"}
            </p>
            <p className="mb-1" style={{ color: "#334155" }}>
              <strong>Location:</strong> {user?.location || "Mumbai, India"}
            </p>
            <p className="mt-2" style={{ color: "#334155" }}>
              <strong>Interests:</strong>{" "}
              {user?.interests?.join(", ") ||
                "Exploring constellations, planetary motion, and celestial events."}
            </p>
          </div>
        </div>

        {/* Optional: Recent activity / saved items */}
        <div className="mt-5 mb-3 text-start">
          <h5 style={{ color: "#1e293b" }}>Recent Activity</h5>
          <ul className="list-group mt-2">
            {user?.recentActivity?.length ? (
              user.recentActivity.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    border: "none",
                    marginBottom: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="list-group-item bg-transparent border-0 text-muted">
                ✨ Stellarium,<t></t>07:08pm 18/04/2025 <br />
                🔎 Searched <i>'curisoity rover'</i>,<t></t>07:08pm 18/04/2025 <br />
                🌍 Mars Images,<t></t>07:08pm 18/04/2025 <br />
                🔭 Webb view,<t></t>07:08pm 18/04/2025 <br />
                🔭 JWT view,<t></t>07:08pm 18/04/2025 <br />
                📡 Satellite view,<t></t>07:08pm 18/04/2025 <br />
                <a style={{color:"blue"}}><u><i>see more..</i></u></a>
              </li>
            )}
          </ul>
        </div>

          <hr/>
        {/* Optional: Recent activity / saved items */}
        <div className="mt-3 text-start">
          <h5 style={{ color: "#1e293b" }}>Communities</h5>
          <ul className="list-group mt-2">
            {user?.recentActivity?.length ? (
              user.recentActivity.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    border: "none",
                    marginBottom: "0.5rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="list-group-item bg-transparent border-0 text-muted text-center">
                Oops! This part is still under developement!
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
