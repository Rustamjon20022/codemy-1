import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Paper } from '@mui/material';

const pages = ['About','Blog','Galery','Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <Paper  style={{borederRadius:"3px"}}>
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 10, display: { xs: 'none', md: 'flex' } }}
          >
            Home
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Home
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title="Open settings">
                
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />




              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Paper>
  );
};
export default Navbar;






// import { Link } from "@mui/material";
// import { useState } from "react";
// import { Hidden } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import { IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { SwipeableDrawer } from "@mui/material";
// import { Divider } from "@mui/material";
// import { List } from "@mui/material";
// import { Paper } from "@mui/material";
// import { ListItem } from "@mui/material";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



// const navigationLinks = [
//   { name: "Home", href: "" },
//   { name: "Servises", href: "" },
//   { name: "Blog", href: "" },
//   { name: "Galery", href: "" },
//   { name: "Contact Us", href: "" },
// ];
// const useStyles = styled((theme) => ({
//   link: {
//     marginRight: 20,
//   },
// }));

// const Navbar = () => {
//   const styles = useStyles();
//   const [open, setOpen] = useState(false);
//   return (
//           <Paper>
//       <AppBar position="sticky" color="default">
//         <Toolbar dissableGutters
//           style={{ paddingLeft:"10%", gap:"1rem"}}
//         >
//           <Hidden xsDown>
//             {navigationLinks.map((item) => (
//               <Link
//                 className={styles.link}
//                 color="textPrimary"
//                 variant="button"
//                 umderline="none"
//                 href={item.href}
//                 >
//                 {item.name}
//               </Link>
//             ))}
//           </Hidden>
//           <Hidden smUp>
//             <IconButton>
//               <MenuIcon onClick={() => setOpen(true)} />
//             </IconButton>
//           </Hidden>
//         </Toolbar>
//       <SwipeableDrawer
//         anchor="right"
//         open={open}
//         onOpen={() => setOpen(true)}
//         onClose={() => setOpen(false)}
//       >
//         <div>
//           <IconButton>
//             <ArrowForwardIosIcon onClick={() => setOpen(false)} />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           {navigationLinks.map((item) => (
//             <ListItem>
//               <Link
//                 className={styles.link}
//                 color="textPrimary"
//                 variant="button"
//                 umderline="none"
//                 href={item.href}
//               >
//                 {item.name}
//               </Link>
//             </ListItem>
//           ))}
//         </List>
//       </SwipeableDrawer>





//     </AppBar>
//       </Paper>
//   );
// };

// export default Navbar;

