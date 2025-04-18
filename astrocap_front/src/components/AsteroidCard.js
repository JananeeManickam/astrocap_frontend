// AsteroidCard.js
import React from 'react';
import styled from 'styled-components';

const AsteroidCard = ({ asteroid }) => {
  return (
    <StyledWrapper>
      <div className="package">
        <div className="package2">
          <p
            className="text"
            style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'underline' }}
          >
            {asteroid.name.replace(/[()]/g, '')}
          </p>

          <p className="text">
            <strong>Diameter (km):</strong> {asteroid.estimated_diameter_km.min.toFixed(3)} - {asteroid.estimated_diameter_km.max.toFixed(3)}
          </p>
          <p className="text">
            <strong>Threat Level:</strong>{' '}
            <span style={{ color: asteroid.is_potentially_hazardous ? 'red' : 'limegreen', fontWeight: 'bold' }}>
              {asteroid.is_potentially_hazardous ? 'Hazardous' : 'Non-Hazardous'}
            </span>
          </p>

          <p className="text"><strong>Close Approach Date:</strong> {asteroid.close_approach_date}</p>
          <p className="text"><strong>Velocity (kph):</strong> {parseFloat(asteroid.relative_velocity_kph).toLocaleString()}</p>
          <p className="text"><strong>Orbiting Body:</strong> {asteroid.orbiting_body}</p>
          <p className="text">
            <a
              href={asteroid.nasa_jpl_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#93c5fd' }}
            >
              🔗 Learn more
            </a>
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .package {
    width: 100%;
    background-image: linear-gradient(163deg, #3b82f6 0%, #93c5fd 100%);
    border-radius: 20px;
    text-align: center;
    transition: all 0.25s cubic-bezier(0, 0, 0, 1);
  }

  .package:hover {
    box-shadow: 0px 0px 30px 1px rgb(70, 82, 254);
  }

  .package2 {
    background-color: rgba(24, 23, 36, 0.87);
    border-radius: 10px;
    transition: all 0.25s cubic-bezier(0, 0, 0, 1);
    padding: 15px;
    height: 100%;
    cursor: pointer;
  }

  .package2:hover {
    transform: scale(0.98);
    border-radius: 18px;
  }

  .text {
    color: white;
    font-size: 17px;
    margin-bottom: 8px;
  }
`;

export default AsteroidCard;
