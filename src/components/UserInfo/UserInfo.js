import * as React from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
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
 const params = useParams();
 const users = useSelector((state) => state.usersReducer.users);
 const userDetails = users.filter((user) => {
  return user.id == params.id
 })
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      {userDetails &&
              userDetails.map((user) => (
        <><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  User Details :
                </Typography><Typography variant="h5" component="div">
                    {/* Rajesh Gole */}
                    {user.name}
                  </Typography><Typography variant="body1" component="div">
                    {/* Mobile : 8967120236 */}
                    {user.phone}
                  </Typography><Typography variant="body1" component="div">
                    {/* Email : rajesh.gole@softobiz.com */}
                    {user.email}
                  </Typography></>
              ))}
      </CardContent>
    </Card>
  );
}