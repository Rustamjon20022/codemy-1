import React from 'react';
import {
    Card,
    Container,
    Grid,
    Typography,
    CardContent,
    Button
  } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import MonitorIcon from '@mui/icons-material/Monitor';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Servises = () => {

  

  return (
    <>
      <Container sx={{paddingTop:"5%"}}>
      <Grid container spacing={2}>
        
  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Card sx={{ minWidth: "33%" }}>
      <CardHeader
        avatar={
          <AutoFixHighIcon />
        }
        title="Web Design"
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{paddingLeft:"75%"}} >
        <Button size="large" variant="contained" color="secondary">
          More
        </Button>
      </CardActions>

    </Card>

  </Grid>

  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Card sx={{ minWidth: "33%" }}>
      <CardHeader
        avatar={
          <MonitorIcon />
        }
        title="Site Monitoring"
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{paddingLeft:"75%"}} >
        <Button size="large" variant="contained" color="secondary">
          More
        </Button>
      </CardActions>

    </Card>

  </Grid>

  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Card sx={{ minWidth: "33%" }}>
      <CardHeader
        avatar={
          <SportsSoccerIcon />
        }
        title="Global Reching"
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{paddingLeft:"75%"}} >
        <Button size="large" variant="contained" color="secondary">
          More
        </Button>
      </CardActions>

    </Card>

  </Grid>
</Grid>



      </Container>
    </>
  );
}

export default Servises;
