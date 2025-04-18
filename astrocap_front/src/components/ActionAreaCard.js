// ActionAreaCard.js
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({ image }) {
  const { img_src, earth_date, camera, rover } = image;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img_src}
          alt={camera.full_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {camera.full_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {earth_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rover: {rover.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: rover.status === 'active' ? 'green' : 'red' }}
          >
            Status: {rover.status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
