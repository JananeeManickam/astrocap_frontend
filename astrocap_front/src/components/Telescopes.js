import React from 'react';

const telescopes = [
  { title: 'Webb', url: 'https://spacetelescopelive.org/webb' },
  { title: 'Hubble', url: 'https://spacetelescopelive.org/hubble' },
];

export default function SpaceTelescopesCards() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
      {telescopes.map((telescope) => (
        <div
          key={telescope.title}
          className="card text-center shadow hover-effect"
          style={{ width: '12rem', cursor: 'pointer' }}
          onClick={() => handleClick(telescope.url)}
        >
          <div className="card-body">
            <h5 className="card-title">{telescope.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
