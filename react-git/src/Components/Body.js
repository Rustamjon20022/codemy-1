import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Baner from './images/left-banner-image.jpg'
import { Typography,Button } from '@mui/material';
import Women from './images/baner-right-image-01.jpg'
import Women1 from './images/baner-right-image-02.jpg'
import Women2 from './images/baner-right-image-03.jpg'
import Women3 from './images/baner-right-image-04.jpg'







const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container  >
            <Grid item lg={6} md={12} xs={12}>
                <Grid >
                    <Box sx={{position:'relative'}}>
                    <Box><img src={Baner} width='100%'/></Box>
                    <Box sx={{position:'absolute',top:'40%',padding:'10%',color:'white'}}>
                        <Typography variant='h4' sx={{fontWeight:'bold'}}>We Are Hexashop</Typography>
                        <Typography>Awesome, clean & creative in HTML5 Templato </Typography>
                        <Button sx={{border:'1px solid white',color:'white',padding:'2%'}}>Purchase Now!</Button>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container item lg={6} xs={12}>
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{position:'relative'}}>
                    <Box><img src={Women} width='100%'/></Box>
                    <Box sx={{position:'absolute',top:'26%',padding:'10%',ml:'10%',color:'white'}}>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>Women</Typography>
                        <Typography>Best Clothes for Women </Typography>
                    </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{position:'relative'}}>
                    <Box><img src={Women1} width='100%'/></Box>
                    <Box sx={{position:'absolute',top:'26%',padding:'10%',ml:'10%',color:'white'}}>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>Men</Typography>
                        <Typography>Best Clothes for Men </Typography>
                    </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{position:'relative'}}>
                    <Box><img src={Women2} width='100%'/></Box>
                    <Box sx={{position:'absolute',top:'26%',padding:'10%',ml:'10%',color:'white'}}>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>Kids</Typography>
                        <Typography>Best Clothes for Kids </Typography>
                    </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{position:'relative'}}>
                    <Box><img src={Women3} width='100%'/></Box>
                    <Box sx={{position:'absolute',top:'26%',padding:'10%',ml:'10%',color:'white'}}>
                        <Typography variant='h6' sx={{fontWeight:'bold'}}>Accessories</Typography>
                        <Typography>Best Trend Accessories </Typography>
                    </Box>
                    </Box>
                </Grid>
            </Grid>

        </Grid>
    </Box>
  );
}