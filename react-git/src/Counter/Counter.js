import * as React from 'react';
import Typography from '@mui/material/Typography';
import {  Grid,Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function Counter() {
    const [open, setOpen] = React.useState(true);

  return (
    <>
    <Grid container spacing={2}>
  <Grid item lg={6} md={6}sm={12}xs={12}>
  <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
Success! Maecenas non lorem sed elit molestie tincidunt.
        </Alert>
      </Collapse>
    </Box>
  <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert severity="info"
          action={
            <IconButton
              aria-label="close"
            //   color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
Sed in molestie lectus. Curabitur non est neque. Maecenas id luctus ligula.
        </Alert>
      </Collapse>
    </Box>
  <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert severity="warning"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
Vestibulum tincidunt libero urna, ut dignissim purus accumsan nec.
        </Alert>
      </Collapse>
    </Box>
  <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
Mauris dignissim ante eu arcu ultricies, at sodales orci aliquet.
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>

    </Box>
  </Grid>
  <Grid item lg={6}md={6}sm={12}xs={12}>
      <Box>
          <Typography variant="h6">Latest Data</Typography>
          <Typography style={{backgroundColor:"blue",color:"white"}}>
           Bootstrap and JQVMap. templatemo provides free website templates that can be used for any purpose. Morbi id nisi enim. Ut congue interdum pharetra facilisi. Aenean consectetur pellentesque mauris nec ornare. Nam tortor just, condimentum.
          </Typography>
          <Typography variant="h6">Order Data</Typography>
          <Typography >
           Bootstrap and JQVMap. templatemo provides free website templates that can be used for any purpose. Morbi id nisi enim. Ut congue interdum pharetra facilisi. Aenean consectetur pellentesque mauris nec ornare. Nam tortor just, condimentum.
          </Typography>
          <Box className="templatemo-progress">
                <Box className="progress">
                  <Box className="progress-bar progress-bar-success" style={{width: "35%"}}>
                    <span className="sr-only">35% Complete (success)</span>
                  </Box>
                  <Box className="progress-bar progress-bar-warning progress-bar-striped" style={{width: "20%"}}>
                    <span className="sr-only">20% Complete (warning)</span>
                  </Box>
                  <Box className="progress-bar progress-bar-danger" style={{width: "10%"}}>
                    <span className="sr-only">10% Complete (danger)</span>
                  </Box>
                </Box>
                <Box className="progress">
                  <Box className="progress-bar progress-bar-striped active"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"style={{width: "45%"}}>
                    <span className="sr-only">45% Complete</span>
                  </Box>
                </Box>
              </Box> 

      </Box>
  </Grid>
</Grid>


    </>
  );
}
