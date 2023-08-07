import React from "react";
// import { Box, Grid } from "@mui/material";
import { Box, Grid } from "@mui/material";
import TopBar from "../../../components/PrivateComponents/ugtrade/TopBar/topBar";
import MyChart from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart";
import MyChart2 from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart2";
import BillingStatement from "./scenes/BillingStatement";
// import logo from "../../../../assets/images/EARTH-Logo.png";
import exampleVideo from "../../../assets/Video.mp4";
// import background from "../../../assets/honeycomb.png";

function VideoPlayer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <video controls width="1000" height="800">
        <source src={exampleVideo} type="video/mp4" />
        <track kind="captions" label="English Captions" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function Bonatrade() {
  return (
    <Box>
      <TopBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row", // Default direction is column
          "@media (min-width: 768px)": {
            // Adjust styles for medium-sized devices (width greater than or equal to 600px)
            flexDirection: "block", // Change direction to row for medium-sized devices
            gap: "20px", // Add some spacing between the MyChart components
          },
        }}
      >
        <Box xs={6} md={12}>
          <MyChart />
        </Box>
        <Box xs={6} md={12}>
          <MyChart2 />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
        xs={6}
        md={12}
      >
        <BillingStatement />
      </Box>
      <Grid>
        <VideoPlayer />
      </Grid>
    </Box>
  );
}

export default Bonatrade;
