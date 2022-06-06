import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, } from '@mui/material';
import "./Header.css"

const Header = () => {
  return (
    <>
    <Box sx={{position:"relative"}}>
        <Box sx={{position:"absolute",marginTop:"25px",paddingLeft:"40%"}}>
          <Typography  variant="h4"color="white">
            Pink <span className="Bu">Bussines</span>
          </Typography>
          <Typography  color="white">
            Free css template for everyOne
          </Typography>
          </Box>
          <Box>

          <Card sx={{ minWidth: 345 }}>
        <CardMedia
          component="img"
          height="100"
          image="/images/templatemo-header.jpg"
          alt="green iguana"
        />
    </Card>
    </Box>

    </Box>
    </>
  );
}

export default Header;
