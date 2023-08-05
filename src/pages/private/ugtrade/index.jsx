import React from "react";
// import { Box } from "@mui/system";
import { Grid } from "@mui/material";
// import { Box } from "@mui/material";
import TopBar from "../../../components/PrivateComponents/ugtrade/TopBar/topBar";
// import "index.css";
import MyChart from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart";
import MyChart2 from "../../../components/PrivateComponents/ugtrade/Charts/StaticChart2";

function UGTradeCorp() {
  return (
    <div>
      <TopBar />
      <Grid>
        <MyChart />
        <MyChart2 />
      </Grid>
    </div>
  );
}
export default UGTradeCorp;
