/* src/components/Menu.js */
import React from "react";
import TiltedCard from "./TiltedCard";
import astroEventImg from "../assets/event.png";

const cards = [
  {
    title: "Stellarium",
    img: "https://cdn.pixabay.com/photo/2020/11/08/18/57/stars-5724700_1280.jpg",
    path: "https://stellarium-web.org/",
  },
  {
    title: "Telescopes",
    img: "https://cdn.pixabay.com/photo/2016/04/23/14/08/hubble-telescope-1347645_1280.jpg",
    path: "/telescopes",
  },
  {
    title: "Planets",
    img: "https://cdn.pixabay.com/photo/2015/02/26/04/06/planet-649863_1280.jpg",
    path: "/planets",
  },
  {
    title: "Constellations",
    img: "https://starrynova.com/wp-content/uploads/2022/12/Winter-Constellations-1024x498.jpg",
    path: "/constellations",
  },
  {
    title: "Satellites",
    img: "https://cdn.pixabay.com/photo/2015/03/26/18/36/spacex-693229_1280.jpg",
    path: "/satellites",
  },
  {
    title: "Astro Events",
    img: astroEventImg,
    path: "/astro-events",
  },
];

export default function Menu() {
  return (
    <div className="relative w-full d-flex flex-wrap justify-content-center gap-5" style={{ padding: "1rem" }}>
      {cards.map((card, idx) => (
        <TiltedCard
          key={idx}
          titleCard={card.title}
          imageSrc={card.img}
          altText={`Astro Image ${idx + 1}`}
          navigateTo={card.path}
        />
      ))}
    </div>
  );
}
