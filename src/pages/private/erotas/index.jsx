import React from "react";
import { Box, Grid } from "@mui/material";
import Video from "assets/";
import TopBar from "../../../components/PrivateComponents/erotas/TopBar/topBar";
import MyChart from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart";
import MyChart2 from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart2";
import BillingStatement from "./scenes/BillingStatement";

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
          <Video />
        </Grid>
        <Grid item xs={6}>
          <BillingStatement />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Erotas;
