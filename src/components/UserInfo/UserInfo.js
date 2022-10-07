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

export default function UserInfo() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User Details :
        </Typography>
        <Typography variant="h5" component="div">
          Rajesh Gole
        </Typography>
        <Typography variant="body1" component="div">
        Mobile : 8967120236
        </Typography>
        <Typography variant="body1" component="div">
        Email : rajesh.gole@softobiz.com
        </Typography>
      </CardContent>
    </Card>
  );
}
