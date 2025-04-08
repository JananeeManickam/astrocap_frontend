// src/components/Menu.js
import React from "react";
import TiltedCard from "./TiltedCard";

export default function Menu() {
    const cardCount = 6;

    return (
        <div
            className="relative w-full d-flex flex-wrap justify-content-center gap-5"
            style={{ padding: "1rem" }}
        >
            {Array.from({ length: cardCount }).map((_, idx) => (
                <TiltedCard key={idx} cardId={idx + 1} navigateTo={`/card/${idx + 1}`} />
            ))}
        </div>
    );
}
