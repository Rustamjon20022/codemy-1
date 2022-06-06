import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicGrid() {
  return (
    <Container sx={{paddingTop:"5%",paddingBottom:"5%"}}>
      <Paper>
        <Grid container spacing={4}>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              Welcome to pink Bussines
            </Typography>
            <Card sx={{ minWidth: 345 }}>
              <CardActionArea sx={{ paddingRight: "5%" }}>
                <Box
                  sx={{
                    border: "1px solid blue",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/templatemo_image_01.jpg"
                    alt="green iguana"
                  />
                </Box>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles ranging
                    across all continents except Antarctica ranging across all
                    continents except Antarctica
                  </Typography>
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over Lizards are a widespread group of squamate reptiles,
                    with over species, ranging across all continents except
                    Antarctica species, ranging across all continents except
                    Antarctica species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ paddingLeft: "80%" }}>
                <Button size="large" variant="contained" color="secondary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
                    <Typography variant="h4" >Blog Posts</Typography>
            <Card sx={{ display: "flex", paddingTop: "5%" }}>
              <Box sx={{ flexDirection: "column" }}>
                <CardContent sx={{ marginTop: "3%" }}>
                  <Box style={{ paddingTop: "11%" }}>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingLeft: "1%",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      <i>29</i>
                    </Typography>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingTop: "1.6%",
                        color: "white",
                        opacity: 0.5,
                        fontSize: "14px",
                        paddingLeft: "0.3%",
                      }}
                    >
                      Oct 48
                    </Typography>

                    <CardMedia
                      component="img"
                      sx={{ width: 51 }}
                      image="/images/date.png"
                    />
                  </Box>
                </CardContent>
              </Box>
              <Typography sx={{ paddingTop: "4%", color: "purple" }}>
                Live From Spacedolor sitamet <br />
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb" separator="|">
                    <Typography color="text.primary">Posted by</Typography>
                    <Link underline="hover" color="blue">
                      David
                    </Link>
                    <Link
                      underline="hover"
                      color="blue"
                      href="/material-ui/getting-started/installation/"
                    >
                      186 comments
                    </Link>
                  </Breadcrumbs>
                </div>
              </Typography>
            </Card>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ flexDirection: "column" }}>
                <CardContent sx={{ marginTop: "3%" }}>
                  <Box style={{ paddingTop: "11%" }}>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingLeft: "1%",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      <i>29</i>
                    </Typography>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingTop: "1.6%",
                        color: "white",
                        opacity: 0.5,
                        fontSize: "14px",
                        paddingLeft: "0.3%",
                      }}
                    >
                      Oct 48
                    </Typography>

                    <CardMedia
                      component="img"
                      sx={{ width: 51 }}
                      image="/images/date.png"
                    />
                  </Box>
                </CardContent>
              </Box>
              <Typography sx={{ paddingTop: "4%", color: "purple" }}>
                Live From Spacedolor sitamet <br />
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb" separator="|">
                    <Typography color="text.primary">Posted by</Typography>
                    <Link underline="hover" color="blue">
                      David
                    </Link>
                    <Link
                      underline="hover"
                      color="blue"
                      href="/material-ui/getting-started/installation/"
                    >
                      186 comments
                    </Link>
                  </Breadcrumbs>
                </div>
              </Typography>
            </Card>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ flexDirection: "column" }}>
                <CardContent sx={{ marginTop: "3%" }}>
                  <Box style={{ paddingTop: "11%" }}>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingLeft: "1%",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      <i>29</i>
                    </Typography>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingTop: "1.6%",
                        color: "white",
                        opacity: 0.5,
                        fontSize: "14px",
                        paddingLeft: "0.3%",
                      }}
                    >
                      Oct 48
                    </Typography>

                    <CardMedia
                      component="img"
                      sx={{ width: 51 }}
                      image="/images/date.png"
                    />
                  </Box>
                </CardContent>
              </Box>
              <Typography sx={{ paddingTop: "4%", color: "purple" }}>
                Live From Spacedolor sitamet <br />
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb" separator="|">
                    <Typography color="text.primary">Posted by</Typography>
                    <Link underline="hover" color="blue">
                      David
                    </Link>
                    <Link
                      underline="hover"
                      color="blue"
                      href="/material-ui/getting-started/installation/"
                    >
                      186 comments
                    </Link>
                  </Breadcrumbs>
                </div>
              </Typography>
            </Card>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ flexDirection: "column" }}>
                <CardContent sx={{ marginTop: "3%" }}>
                  <Box style={{ paddingTop: "11%" }}>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingLeft: "1%",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      <i>29</i>
                    </Typography>
                    <Typography
                      sx={{
                        position: "absolute",
                        paddingTop: "1.6%",
                        color: "white",
                        opacity: 0.5,
                        fontSize: "14px",
                        paddingLeft: "0.3%",
                      }}
                    >
                      Oct 48
                    </Typography>

                    <CardMedia
                      component="img"
                      sx={{ width: 51 }}
                      image="/images/date.png"
                    />
                  </Box>
                </CardContent>
              </Box>
              <Typography sx={{ paddingTop: "4%", color: "purple" }}>
                Live From Spacedolor sitamet <br />
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb" separator="|">
                    <Typography color="text.primary">Posted by</Typography>
                    <Link underline="hover" color="blue">
                      David
                    </Link>
                    <Link
                      underline="hover"
                      color="blue"
                      href="/material-ui/getting-started/installation/"
                    >
                      186 comments
                    </Link>
                  </Breadcrumbs>
                </div>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
