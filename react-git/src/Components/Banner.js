import {
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  return (
    <>
      <Container sx={{ paddingTop: "0%"}}
        pl={{lg:"3%",md:0,sm:0,xs:0}}
        pr={{lg:"3%",md:0,sm:0,xs:0}}
      >
        <Paper
          sx={{ paddingTop: "3%" }}
          pl={{lg:"4%",md:0,sm:0,xs:0}}
          pr={{lg:"4%",md:0,sm:0,xs:0}}

        >
          <Box
            sx={{
              border: "1px solid blue",
              paddingTop: "3%",
              paddingBottom: "3%",
            }}
            pl={{lg:"3%",md:"2%",sm:"1%",xs:"1%"}}
            pr={{lg:"3%",md:"2%",sm:"1%",xs:"1%"}}

          >
            <Grid container spacing={2}>
              <Grid lg={8} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    position: "absolute",
                    maxWidth: "50%",
                
                    color: "white",
                  }}
                  pl={{lg:"3%",md:"1%",sm:"1%",xs:"1%"}}
                  pr={{lg:"3%",md:"1%",sm:"1%",xs:"1%"}}
                  pt={{lg:"25%",md:"23%",sm:"20%",xs:"10%"}}

                >
                  <Typography variant="h5">
                    Lorem ipsum dolor sit amet
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet ipsum dolor sit frenquensy
                    apolorado emigine aecada indalete amet ipsum dolor sit amet
                    ipsum dolor sit amet
                  </Typography>
                </Box>
                <Box>
                  <Card sx={{ minWidth: 350, minHeight: 100 }}>
                    <CardMedia
                      component="img"
                      image="/images/content_slider/image1-small.jpg"
                      alt="green iguana"
                    />
                  </Card>
                </Box>
              </Grid>
              <Grid lg={4} md={6} sm={12} xs={12}>
              <Card sx={{ display: "flex", }}>
                <Box sx={{ flexDirection: "column" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="/images/content_slider/image4-small.jpg"
                    />
                  </CardContent>
                </Box>
                <Typography sx={{ paddingTop: "4%" }}>

                  Live From Spacedolor sitamet 
                  Mac Miller inds
                </Typography>
                  <del></del>
              </Card>
              <Card sx={{ display: "flex", }}>
                <Box sx={{ flexDirection: "column" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="/images/content_slider/image2-small.jpg"
                    />
                  </CardContent>
                </Box>
                <Typography sx={{ paddingTop: "4%" }}>
                  Live From Spacedolor sitamet <br />
                  Mac Miller inds
                </Typography>
              </Card>
              <Card sx={{ display: "flex", }}>
                <Box sx={{ flexDirection: "column" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="/images/content_slider/image3-small.jpg"
                    />
                  </CardContent>
                </Box>
                <Typography sx={{ paddingTop: "4%" }}>
                  Live From Spacedolor sitamet <br />
                  Mac Miller inds
                </Typography>
              </Card>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Banner;
