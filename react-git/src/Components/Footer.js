import React from 'react';
import { Box,Link,Breadcrumbs } from '@mui/material';
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <Box sx={{position:"relative"}}>
        <Box className="bu" sx={{position:"absolute",marginTop:"1%"}}
        pt={{ xs: 1, sm: 1 }} pb={{ xs: 5, sm: 3 }}
        pl={{ lg: "35%",md:"30%", sm: "25%",xs:"20%" }}
        >
          
                  <Breadcrumbs aria-label="breadcrumb" separator="|">
                    <Link underline="hover" color="white">
                      Home
                    </Link>
                    <Link underline="hover" color="white">
                      Servises
                    </Link>
                    <Link underline="hover" color="white">
                      Blog
                    </Link>
                    <Link underline="hover" color="white">
                      Galery
                    </Link>
                    <Link underline="hover" color="white">
                      Contact Us
                    </Link>
                  </Breadcrumbs>
          </Box>
          <Box className="bu" sx={{position:"absolute",marginTop:"3%"}}
        pt={{ xs: 2, sm: 2 }} pb={{ xs: 3, sm: 1 }}
        pl={{ lg: "28%",md:"22%", sm: "17%",xs:"11%" }}
        >
                  <Breadcrumbs aria-label="breadcrumb" separator="|">
                    <Link underline="hover" color="white">
                      
                  CopyRight &reg:{new Date().getFullYear()} 
                    </Link>
                    <Link underline="hover" color="white">
                      
                    Your Company name
                    </Link>
                    <Link underline="hover" color="white">
                      
                    Free css templates
                    </Link>

                  </Breadcrumbs>

                  </Box> 

    </Box>
    </>
  );
}

export default Footer;
