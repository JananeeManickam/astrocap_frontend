import React from 'react';
import OptionCard from './OptionCard'; 
import WebbImg from '../assets/webb.png';
import HubbleImg from '../assets/hubble.png';

const telescopes = [
  {
    name: 'Webb',
    type: 'Space Telescope',
    description: 'The James Webb Space Telescope observes the universe in infrared, enabling deep-space exploration.',
    url: 'https://spacetelescopelive.org/webb',
    image: WebbImg
  },
  {
    name: 'Hubble',
    type: 'Space Telescope',
    description: 'The Hubble Space Telescope has provided groundbreaking visible and ultraviolet observations of the cosmos.',
    url: 'https://spacetelescopelive.org/hubble',
    image: HubbleImg
  }
];

export default function SpaceTelescopes() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
      {telescopes.map((telescope) => (
        <OptionCard
          key={telescope.name}
          name={telescope.name}
          type={telescope.type}
          description={telescope.description}
          url={telescope.url}
          image={telescope.image}
        />
      ))}
    </div>
  );
}
