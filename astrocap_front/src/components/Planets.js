import React from 'react';
import OptionCard from './OptionCard';
import ImageMars from '../assets/mars2.png';
import ImageJupt from '../assets/jupiter2.png';

const objects = [
  {
    name: 'Mars',
    type: 'Planet',
    description: 'Mars is the fourth planet from the Sun, known for its reddish appearance due to iron oxide on its surface. Often called the "Red Planet," it has the largest.',
    url: ImageMars,
    path: '/planets/mars' 
  },
  {
    name: 'Jupiter',
    type: 'Planet',
    description: 'Neptune is the eighth and farthest planet from the Sun, known for its deep blue color caused by methane in its atmosphere. Often called the "Ice Giant", it has the strongest winds in the solar system.',
    url: Image
  }
];

function Planets() {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      {objects.map((obj, index) => (
        <OptionCard key={index} object={obj} />
      ))}
    </div>
  );
}

export default Planets;
