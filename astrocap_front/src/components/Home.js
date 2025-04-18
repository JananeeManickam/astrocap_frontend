import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./frozencard.css";

function Home() {
  return (
    <div className="frozen-card d-flex flex-column justify-content-center align-items-center text-center">
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#cbd5e1",
        }}
      >
        I am{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          ASTROCAP!
        </span>
      </h2>

      <h4
        style={{
          fontSize: "1.75rem",
          fontWeight: "600",
          marginTop: "1rem",
          color: "#f1f5f9",
        }}
      >
        your{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          cosmic companion
        </span>
      </h4>

      <p
        style={{
          maxWidth: "700px",
          textAlign: "center",
          marginTop: "1.5rem",
          fontSize: "1rem",
          color: "#94a3b8",
          lineHeight: "1.7",
        }}
      >
        Track planets, stars, and celestial events in real-time. ASTROCAP
        provides a seamless, interactive skywatching experience with live data,
        stargazing tools, and alerts for upcoming astronomical events —
        empowering space lovers, students, and educators to stay connected with
        the universe.
      </p>

      {/* Why Astrocap */}
      <section className="mt-5">
        <h3 className="text-white mb-4">
          Why{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            astrocap ?
          </span>
        </h3>

        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-70 shadow-sm" style={{
                background: "linear-gradient(135deg,rgb(163, 164, 240),rgb(148, 208, 250))",
                color: "#111",
              }}>
              <img
                src="https://img.freepik.com/free-vector/astronomy-concept-with-retro-science-cartoon-icons-set_1284-7503.jpg?ga=GA1.1.721902390.1744877971&semt=ais_hybrid&w=740"
                height="250px"
                className="card-img-top"
                alt="feature"
              />
              <div className="card-body text-start">
                <h5 className="card-title">Accurate Sky Forecasting</h5>
                <p className="card-text">
                  It empowers enthusiasts and researchers to plan observations
                  or events with precision.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4" >
            <div className="card h-70 shadow-sm" style={{
                background: "linear-gradient(135deg,rgb(190, 191, 255),rgb(148, 208, 250))",
                color: "#111",
              }}>
              <div className="card-body text-start">
                <h5 className="card-title">Live Cosmic Connections</h5>
                <p className="card-text">
                  It connects space enthusiasts with constellations, celestial
                  bodies, and events using real-time APIs.
                </p>
              </div>
              <img
                src="https://img.freepik.com/premium-vector/astronomy-science-explorer-people-studying-mysterious-constellation-watching-space-telescope-explore-universe-planets-recent-vector-scene-astronomy-education-galaxy-illustration_543062-7766.jpg?ga=GA1.1.721902390.1744877971&semt=ais_hybrid&w=740"
                height="250px"
                className="card-img-bottom"
                alt="feature"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-70 shadow-sm" style={{
                background: "linear-gradient(135deg,rgb(163, 164, 240),rgb(148, 208, 250))",
                color: "#111",
              }}>
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-ai-generating-illustration_52683-155538.jpg?ga=GA1.1.721902390.1744877971&semt=ais_hybrid&w=740"
                height="250px"
                className="card-img-top"
                alt="feature"
              />
              <div className="card-body text-start">
                <h5 className="card-title">AI-Powered Assistance</h5>
                <p className="card-text">
                  Uses AI to instantly answer astronomy questions and make
                  learning clear and engaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Sources */}
      <section className="mt-5">
        <h3 className="text-white mb-4">
          Trusted {" "} 
          <span
            style={{
              background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Data
          </span> from
        </h3>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/NASA-Emblem.jpg"
            alt="NASA"
            style={{ height: "100px" }}
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/125/658/original/esa-logo-esa-letter-esa-letter-logo-design-initials-esa-logo-linked-with-circle-and-uppercase-monogram-logo-esa-typography-for-technology-business-and-real-estate-brand-vector.jpg"
            alt="ESA"
            style={{ height: "100px" }}
          />
          <img
            src="https://res.cloudinary.com/teepublic/image/private/s--03CjQiaX--/t_Preview/b_rgb:000000,c_lpad,f_jpg,h_630,q_90,w_1200/v1545581975/production/designs/3810271_0.jpg"
            alt="ISRO"
            style={{ height: "100px" }}
          />
        </div>
      </section>

      {/* What Users Say */}
      <section className="mt-5">
        <h3 className="text-white mb-4">
          What our {" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Users
          </span>{" "}
          Say
        </h3>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div
              className="card text-center shadow"
              style={{
                background: "linear-gradient(135deg,rgb(123, 124, 210),rgb(116, 195, 252))",
                color: "#111",
              }}
            >
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.F2zVdBsz1sTUs0caUel4nAHaE8&pid=Api&P=0&h=180"
                className="rounded-circle mx-auto mt-3"
                alt="user"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">User 1</h5>
                <h6 className="card-subtitle mb-2 text-muted">Stargazer</h6>
                <p className="card-text">
                  "ASTROCAP transformed how I experience the night sky. It's
                  magical!"
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card text-center shadow"
              style={{
                background: "linear-gradient(135deg,rgb(154, 156, 233),rgb(135, 202, 249))",
                color: "#111",
              }}
            >
              <img
                src="https://i.timesnowhindi.com/story/teachers.jpg"
                className="rounded-circle mx-auto mt-3"
                alt="user"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">User 2</h5>
                <h6 className="card-subtitle mb-2 text-muted">Stargazer</h6>
                <p className="card-text">
                  "ASTROCAP transformed how I experience the night sky. It's
                  magical!"
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card text-center shadow"
              style={{
                background: "linear-gradient(135deg,rgb(123, 124, 210),rgb(116, 195, 252))",
                color: "#111",
              }}
            >
              <img
                src="https://img.freepik.com/premium-photo/confident-indian-teacher-standing-near-blackboard_392895-113887.jpg"
                className="rounded-circle mx-auto mt-3"
                alt="user"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">User 3</h5>
                <h6 className="card-subtitle mb-2 text-muted">Stargazer</h6>
                <p className="card-text">
                  "ASTROCAP transformed how I experience the night sky. It's
                  magical!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
