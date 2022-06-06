import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Container, Grid, Box, CardMedia, Typography, IconButton } from "@mui/material";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="rgb(32, 19, 19)"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item sx={12}md={3} sm={6}>
              <Box borderBottom={1}>
                <CardMedia
                  component="img"
                  image="/logo.png"
                  alt="green iguana"
                  sx={{ width: "200px",fontSize:"20px" }}
                />

                <Box>
                  <Typography>
                    16501 Collins Ave, Sunny Isles Beach,
                    <br />
                    FL 33160,United States
                  </Typography>
                  <Typography>hexashop@company.com</Typography>
                  <Typography>010-020-0340</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={12}md={3} sm={6}>
              <Box borderBottom={1}>
                Shopping & Categorie
                <Box>
                  <Typography variant="h5">Shopping & Categories</Typography>
                  <Typography>Men's Shopping</Typography>
                  <Typography>Women's Shopping</Typography><br />
                  <Typography>Kid's Shopping</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={12}md={3} sm={6}>
              <Box borderBottom={1}>
                Useful Links
                <Box>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      Home Page
                    </Link>
                  </Typography>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      About Us
                    </Link>
                  </Typography>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      Help
                    </Link>
                  </Typography>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      Contact Us
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={12}md={3} sm={6}>
              <Box borderBottom={1}>
                Useful Links
                <Box>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      Home Page
                    </Link>
                  </Typography>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      About Us
                    </Link>
                  </Typography>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      Help
                    </Link>
                  </Typography>
                  <Typography variant="h5">
                    <Link href="/" color="inherit">
                      Contact Us
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={12} sm={12}>
              <Box borderTop={1} textAlign="center">
                <Box
                  pt={{ xs: 5, sm: 10 }}
                  pb={{ xs: 5, sm: 0 }}
                >
                  CopyRight &reg:{new Date().getFullYear()} Ltd. all Rights Reserved.<br />
                  Design:Templatemo
              </Box>
                <IconButton variant="outlined">
                  <Facebook />
                </IconButton>

                <IconButton variant="outlined">
                  <Twitter />
                </IconButton>
                <IconButton variant="outlined">
                  <Instagram />
                </IconButton>
                <IconButton variant="outlined">
                  <YouTube />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
