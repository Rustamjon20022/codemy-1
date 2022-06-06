import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid, IconButton } from "@mui/material";
import { VscSearch } from "react-icons/vsc";
import { MdDataSaverOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";

export default function Banner() {
  return (
    <Box sx={{ position: "relative"}}
    pt={{lg:"40%",md:"45%",sm:"205%",xs:"290%"}}

    >
      <Box sx={{position:"absolute",paddingLeft:"8%"}}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6}sm={12}xs={12}>
        
        <Typography variant="h4"  >
          Cardboard allequen aget tables id porta
        </Typography>
        <br />
        <Typography sx={{color:"rgb(94, 94, 191)"}} >
          Suspendisse eu lorem massa Integer Sit amet <br /> posuere tellus,
        </Typography><br />
        <Typography variant="h6">
          <IconButton sx={{fontSize:"40px",color:"blue"}} >
         <VscSearch  /> 
          </IconButton>
         Nulla untrices risus aget tables 
        </Typography>
        <Typography sx={{paddingLeft:"10%",color:"rgb(94, 94, 191)"}} >
          Suspendisse eu lorem massa Integer Sit amet posuere tellus,<br />
          Download,modly and
        </Typography>

        <Typography variant="h6">
        <IconButton sx={{fontSize:"40px",color:"blue"}} >

          <MdDataSaverOn />
          </IconButton>
          Nulla untrices risus aget tables 

        </Typography>

        <Typography sx={{paddingLeft:"10%",color:"rgb(94, 94, 191)"}} >
          Suspendisse eu lorem massa Integer Sit amet posuere tellus,<br />
          Download,modly and
        </Typography>
        <Typography variant="h6">
        <IconButton sx={{fontSize:"40px",color:"blue"}}>

        <AiFillMail />
        </IconButton>
          Nulla untrices risus aget tables 
        </Typography>
        <Typography sx={{paddingLeft:"10%",color:"rgb(94, 94, 191)"}} >
          Suspendisse eu lorem massa Integer Sit amet posuere tellus,<br />
          Download,modly and
        </Typography>

        </Grid>
        <Grid item lg={6} md={6}sm={12}xs={12}>
          <Box sx={{paddingTop:"10%",paddingBottom:"30%"}} >
        <CardMedia
          component="img"
          height="350px"
          width="30%"
          image="/images/right-image.png"
          alt="green iguana"
        />
        </Box>

        </Grid>
        </Grid>
        </Box>
    </Box>
  );
}
