import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  MobileStepper,
  Paper,
} from "@mui/material";
import { VscSearch } from "react-icons/vsc";
import { MdDataSaverOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
export default function BlogEntries() {
  const [activeStep, ] = React.useState(0);

  return (
    <>
      <Box
        style={{ textAlign: "center" }}
        pt={{ lg: "50%", md: "65%", sm: "145%", xs: "247%" }}
        elevation={4}
      ></Box>
      <Paper
        sx={{
          background: "blue",
          padding: "42px",
          textAlign: "center",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "5%",
        }}
      >
        <Box style={{ textAlign: "center" }}>
          <br />
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Card sx={{ minWidth: 345 }}>
                <br />
                <CardActionArea>
                  <IconButton sx={{ fontSize: "60px", color: "white",background:"rgb(52, 52, 208)" }}>
                    <VscSearch />
                  </IconButton>
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    High Quolity Design
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <br />
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: "20px" }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Card sx={{ minWidth: 345 }}>
                <br />
                <CardActionArea>
                  <IconButton sx={{ fontSize: "60px", color: "white",background:"rgb(52, 52, 208)" }}>
                    <MdDataSaverOn />
                  </IconButton>
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    High Quolity Design
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <br />
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: "20px" }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Card sx={{ minWidth: 345 }}>
                <br />
                <CardActionArea>
                  <IconButton sx={{ fontSize: "60px", color: "white",background:"rgb(52, 52, 208)" }}>
                    <AiFillMail />
                  </IconButton>
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    High Quolity Design
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <br />
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: "20px" }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box pl={{lg:"48%",md:"48%",sm:"48%",xs:"48%"}}>
      <MobileStepper
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      sx={{ backgroundColor:"blue",color:"white",padding:"15%"}}
    />

    </Box>

        </Box>
      </Paper>
    </>
  );
}
