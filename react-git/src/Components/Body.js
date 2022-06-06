import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
export default function Body() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{position:"absolute",marginTop:"130px",paddingLeft:"8%"}}>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6}sm={9}xs={12}>
        
        <Typography variant="h3" color="white" sx={{ width: "100%" }}>
          Art Factory is Free
        </Typography>
        <br />
        <Typography variant="h3" color="white">
          for YOU
        </Typography>
        <Typography variant="h5" sx={{ color: "white" }}>
          Suspendisse eu lorem massa Integer Sit amet posuere tellus,<br />
          Download,modly and use this for you bussines website
        </Typography>

        <CardActions>
          <Button size="large" variant="contained" color="error" sx={{borderRadius:"20px"}}>
            Dicover More
          </Button>
        </CardActions>
        </Grid>
        <Grid item lg={5} md={6}sm={6}xs={12}>
        <CardMedia
          component="img"
          height="350px"
          minwidth="30%"
          image="/images/slider-icon.png"
          alt="green iguana"
        />

        </Grid>
        </Grid>
        </Box>
      <Box>
        <CardMedia
          component="img"
          height="600px"
          width="100%"
          image="/images/banner-bg.png"
          alt="green iguana"
        />
      </Box>
    </Box>
  );
}
