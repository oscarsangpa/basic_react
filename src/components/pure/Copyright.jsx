import React from 'react';

// import Material UI Components
import Link from "@mui/material/Link";
import { Typography } from '@mui/material';


const Copyright = () => {

  const fullYear = new Date().getFullYear();
  return (
    <Typography variant="body2" color="GrayText" align="center">
      { 'Copyright (C)' }
      <Link color="inherit" href="https://campus.open-bootcamp.com/"> Open Bootcamp </Link>
      {` ${fullYear}`}
    
    </Typography>
  )
}

export default Copyright;