// Planet.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActionAreaCard from './ActionAreaCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Planet = () => {
  const { planetName } = useParams(); // Get planetName from URL
  const [images, setImages] = useState([]);
  const [planet, setPlanet] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the planetName from URL in the API request
    fetch(`http://localhost:8000/api/pictures/planets/${planetName}/`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${planetName} data`);
        return res.json();
      })
      .then((data) => {
        setImages(data.images);
        setPlanet(data.planet);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [planetName]); // Add planetName as dependency so it refetches when the URL changes

  if (loading) return <p>Loading {planetName} pictures...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container sx={{ py: 4 }} maxWidth="lg">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {planet} Rover Photos
      </Typography>
      <Grid container spacing={4}>
        {images.map((img) => (
          <Grid item key={img.id} xs={12} sm={6} md={4}>
            <ActionAreaCard image={img} />
          </Grid>
        ))}
      </Grid>
    </Container>  
  );
};

export default Planet;