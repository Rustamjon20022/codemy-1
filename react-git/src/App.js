import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Servises from "./Components/Servises";
import BasicGrid from "./Components/BasicGrid";
import Footer from "./Components/Footer";
import { Paper, Stack } from "@mui/material";
const App = () => {
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <Header />
      <Stack style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <Paper>
          <Navbar />
          <Banner />
          <Servises />
          <BasicGrid />
        </Paper>
      </Stack>
      <Footer />
    </div>
  );
};

export default App;
