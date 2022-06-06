import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Paper} from "@mui/material";
import TextField from "@mui/material/TextField";
import {
    Facebook,
    Instagram,
    Telegram,
    Twitter,
    YouTube,
  } from "@mui/icons-material";
  
export default function MapInput() {
  
  const [name, setName] = React.useState("Cat in the Hat");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      sx={{ paddingLeft: "8%",paddingRight: "6%" }}
      pt={{ lg: "50%", md: "65%", sm: "145%", xs: "247%" }}
    >
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ minWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="/img.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Box textAlign="center">
                <Box pt={{ xs: 10, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                  CopyRight &reg:{new Date().getFullYear()} Ltd. all Rights
                  Reserved.
                  <br />
                  Design:Templatemo
                </Box>
              </Box>


        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Paper sx={{background:"blue",color:"white",paddingTop:"20%",paddingLeft:"5%"}}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },

            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name"
              label="Name"
              value={name}
              onChange={handleChange}
              sx={{background:"rgb(09, 241, 211)"}}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Uncontrolled"
              defaultValue="foo"
              sx={{background:"rgb(09, 241, 211)"}}

            />
            <Box sx={{ height:"300px",
        "& > :not(style)": { m: 1, width: "111%",
        padding:"12%",background:"rgb(09, 241, 211)"

    }}}>
                    <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={6}
          defaultValue="llue Field Va"
          variant="standard"
          
          
        />
</Box>
          </Box>
          <Box style={{textAlign:"center",paddingBottom:"10%"}}>
              <Button variant="contained" size="large" color="error">SIGN AP</Button>
          </Box>
          </Paper>
          <Box sx={{textAlign:"center",padding:"10%"}}>
          <Button variant="contained">
                    <Facebook />
                  </Button>

                  <Button variant="contained">
                    <Twitter />
                  </Button>
                  <Button variant="contained">
                    <Instagram />
                  </Button>
                  <Button variant="contained">
                    <Telegram />
                  </Button>
                  <Button variant="contained">
                    <YouTube />
                  </Button>
                  </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
