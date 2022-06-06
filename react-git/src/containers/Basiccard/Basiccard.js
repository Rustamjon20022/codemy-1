import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Basiccard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Paper elevation={3} sx={{ p: "2%", pl: "6%", mt: "6%" }}>
          <Box>
            <Typography variant="h5">Reservations</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Upcoming" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />

                <Typography
                  style={{
                    position: "absolute",
                    paddingLeft: "85%",
                    paddingTop: "1%",
                  }}
                >
                  <ArtTrackIcon/>Download
                </Typography>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                <Grid lg={1.5} md={2} sm={4} xs={12}>
                  <Box>
                    <Box
                      sx={{
                        height: "100px",
                        width: "100px",
                        background: "#d1c4e9",
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid lg={6} md={6} sm={8} xs={12}>
                  <Typography variant="h6">
                    Fully furmished appartment
                  </Typography>
                  <Typography variant="body2">
                    chake me <span style={{ color: "#999" }}>12 may 2021</span>{" "}
                    Ouna cox <span style={{ color: "#999" }}>Long [2, 5]</span>{" "}
                    Guses <span style={{ color: "#999" }}> 4 adults</span>
                  </Typography>
                  <Typography variant="h6">My: John Doe</Typography>
                </Grid>
                <Grid lg={4.5} md={4} sm={12} xs={12}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ pb: "2%", pt: "1%" }}
                  >
                    <Chip
                      label="Approve"
                      size="large"
                      style={{
                        background: "#d1c4e9",
                        width: "100px",
                        height: "35px",
                      }}
                    />
                    <Chip
                      label="Reject"
                      style={{ width: "20%", height: "35px" }}
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ pt: "4%" }}>
                <Grid lg={1.5} md={2} sm={4} xs={12}>
                  <Box>
                    <Box
                      sx={{
                        height: "100px",
                        width: "100px",
                        background: "#d1c4e9",
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid lg={6} md={6} sm={8} xs={12}>
                  <Typography variant="h6">
                    Fully furmished appartment
                  </Typography>
                  <Typography variant="body2">
                    chake me <span style={{ color: "#999" }}>12 may 2021</span>{" "}
                    Ouna cox <span style={{ color: "#999" }}>Long [2, 5]</span>{" "}
                    Guses <span style={{ color: "#999" }}> 4 adults</span>
                  </Typography>
                  <Typography variant="h6">My: John Doe</Typography>
                </Grid>
                <Grid lg={4.5} md={4} sm={12} xs={12}>
                  <Stack direction="row" spacing={1} sx={{ pt: "1%" }}>
                    <Chip
                      label="Approve"
                      size="large"
                      style={{
                        background: "#d1c4e9",
                        width: "100px",
                        height: "35px",
                      }}
                    />
                    <Chip
                      label="Reject"
                      style={{ width: "20%", height: "35px" }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Paper>
      </Container>
      <Container>
        <Paper elevation={3} sx={{ p: "2%", pl: "6%", mt: "6%" }}>
          <Box>
            <Typography variant="h5">Transaction History</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Upcoming" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Box style={{ position: "relative" }}>
                <Grid container spacing={2}>
                  <Grid lg={10.5} md={10} sm={8} xs={12}>
                    <Box
                      sx={{ position: "absolute" }}
                      pt={{ lg: "5%", md: "6%", sm: "8%", xs: "10%" }}
                      pl={{ lg: "3%", md: "4%", sm: "5%", xs: "6%" }}
                    >
                      <Typography variant="h6">Fully furmished </Typography>
                      <Typography variant="body2">
                        chake me 12 may 2021
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid lg={1.5} md={2} sm={4} xs={12}>
                    <Box
                      sx={{ position: "absolute" }}
                      pt={{ lg: "6%", md: "8%", sm: "10%", xs: "22%" }}
                      pl={{ lg: 0, md: 0, sm: 0, xs: "6%" }}
                    >
                      <Typography variant="h6">$ 1000.USD</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ width: "100%" }}>
                  <Skeleton animation={true} style={{ height: "150px" }} />
                </Box>
              </Box>
              <Box style={{ position: "relative" }}>
                <Grid container spacing={2}>
                  <Grid lg={10.5} md={10} sm={8} xs={12}>
                    <Box
                      sx={{ position: "absolute" }}
                      pt={{ lg: "5%", md: "6%", sm: "8%", xs: "10%" }}
                      pl={{ lg: "3%", md: "4%", sm: "5%", xs: "6%" }}
                    >
                      <Typography variant="h6">Fully furmished </Typography>
                      <Typography variant="body2">
                        chake me 12 may 2021
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid lg={1.5} md={2} sm={4} xs={12}>
                    <Box
                      sx={{ position: "absolute" }}
                      pt={{ lg: "6%", md: "8%", sm: "10%", xs: "22%" }}
                      pl={{ lg: 0, md: 0, sm: 0, xs: "6%" }}
                    >
                      <Typography variant="h6">$ 1000.USD</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ width: "100%" }}>
                  <Skeleton animation={true} style={{ height: "150px" }} />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
