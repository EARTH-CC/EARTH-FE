import React from "react";
import { Box, Grid } from "@mui/material";
// import Video from "assets/Video.mp4";
import TopBar from "../../../components/PrivateComponents/erotas/TopBar/topBar";
import MyChart from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart";
import MyChart2 from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart2";
import BillingStatement from "./scenes/BillingStatement";
import exampleVideo from "../../../assets/Video.mp4";

function VideoPlayer() {
  return (
    <div style={{ marginLeft: "160px" }}>
      <video controls width="1000" height="800">
        <source src={exampleVideo} type="video/mp4" />
        <track kind="captions" label="English Captions" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function Erotas() {
  return (
    <Box>
      <TopBar />
      <Grid container spacing={0} my={4}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyChart />
          <MyChart2 />
          <div
            style={{
              width: "100%",
              paddingTop: "56.25%",
              position: "relative",
            }}
          >
            <VideoPlayer />
          </div>
        </Grid>
        <Grid item xs={6}>
          <BillingStatement />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Erotas;
