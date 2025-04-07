import React from "react";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import ContentSection from "./components/ContentSection";
import MoonParticles from "./components/MoonParticles";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <MoonParticles />

      <main style={{ flex: 1, paddingTop: "20px" }}>
        <div className="frozen-card">
          <h2>Frozen Card</h2>
          <p>This card has a frosted glass effect with a semi-transparent look.</p>
          <p>This card has a frosted glass effect with a semi-transparent look.</p>
          <p>This card has a frosted glass effect with a semi-transparent look.</p>
          <p>This card has a frosted glass effect with a semi-transparent look.</p>
          <p>This card has a frosted glass effect with a semi-transparent look.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}



export default App;


// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadSlim } from "tsparticles-slim";

// const App = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         background: {
//           image: "url('/moon.png')", // ✅ Static moon background
//           position: "right 100px top 200px",
//           repeat: "no-repeat",
//           size: "contain", // or "cover" for fullscreen
//           color: {
//             value: "#000000", // night sky
//           },
//           size: "12rem",
//         },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onClick: { enable: true, mode: "push" },
//             onHover: { enable: true, mode: "repulse" },
//             resize: true,
//           },
//           modes: {
//             push: { quantity: 2 },
//             repulse: { distance: 150, duration: 0.4 },
//           },
//         },
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               area: 1000,
//             },
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             speed: 0.5,
//             outModes: {
//               default: "out",
//             },
//           },
//           shape: {
//             type: ["circle", "star"],
//             options: {
//               star: {
//                 sides: 5,
//               },
//             },
//           },
//           color: {
//             value: ["#ffffff", "#FFD700"],
//           },
//           size: {
//             value: { min: 0.5, max: 3 },
//             random: true,
//           },
//           opacity: {
//             value: 0.8,
//             random: true,
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default App;
