import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function History() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User History :
        </Typography>
        {/* <Typography variant="h5" component="div">
          Rajesh Gole
        </Typography> */}
        <Typography variant="body1" component="div">
        Created On : 7/10/2022 6:51:34 PM
        </Typography>
      </CardContent>
    </Card>
  );
}
