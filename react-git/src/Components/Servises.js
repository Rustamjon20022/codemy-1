import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";


export default function Servises() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{position:"absolute",paddingLeft:"8%"}}
      mt={{lg:"5%",md:"5%",sm:"36%",xs:"50%"}}
      >
        <Grid container spacing={2}>
        <Grid item lg={6} md={6}sm={12}xs={12}>
          <Box sx={{paddingTop:"10%",paddingBottom:"30%"}} >
        <CardMedia
          component="img"
          height="350px"
          width="30%"
          image="/images/left-image.png"
          alt="green iguana"
        />
        </Box>

        </Grid>

          <Grid item lg={6} md={6}sm={12}xs={12}>
        
        <Typography variant="h4"  >
          Cardboard allequen aget tables id porta
        </Typography>
        <br />
        <Typography sx={{color:"rgb(94, 94, 151)"}} >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele        </Typography><br />
        <Typography sx={{color:"rgb(94, 94, 151)"}} >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ele
        </Typography><br />
        <Button size="large" variant="contained" sx={{borderRadius:"20px"}}>
            Dicover More
          </Button>

        </Grid>
        </Grid>
        </Box>
    </Box>
  );
}
