import React from "react";
import { Box, Grid } from "@mui/material";
import TopBar from "../../../components/PrivateComponents/ugtrade/TopBar/topBar";
import BillingStatement from "./scenes/BillingStatement";
import MyChart from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart";
import MyChart2 from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart2";

function Bonatrade() {
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
        </Grid>
        <Grid item xs={6}>
          <BillingStatement />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Bonatrade;
