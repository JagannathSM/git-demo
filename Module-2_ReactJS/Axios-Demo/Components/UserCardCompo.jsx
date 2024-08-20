import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function UserCardCompo({ title, value }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserCardCompo;
