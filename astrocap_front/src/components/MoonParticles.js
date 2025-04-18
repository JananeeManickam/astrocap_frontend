// src/components/MoonParticles.js
import { useCallback } from "react";
// import Particles from "react-particles";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

const MoonParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    image: "url('/moon.png')",
                    position: "right 100px top 200px",
                    repeat: "no-repeat",
                    size: "12rem",
                    color: {
                        value: "#000000",
                    },

                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 2 },
                        repulse: { distance: 150, duration: 0.4 },
                    },
                },
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            area: 1000,
                        },
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        speed: 0.5,
                        outModes: {
                            default: "out",
                        },
                    },
                    shape: {
                        type: ["circle", "star"],
                        options: {
                            star: {
                                sides: 5,
                            },
                        },
                    },
                    color: {
                        value: ["#ffffff", "#FFD700"],
                    },
                    size: {
                        value: { min: 0.5, max: 3 },
                        random: true,
                    },
                    opacity: {
                        value: 0.8,
                        random: true,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default MoonParticles;
