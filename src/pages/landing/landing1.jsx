import React from "react";
import { Box, Button, Typography } from "@mui/material";
import bg from "../../assets/honeycomb.png";
import earth from "../../assets/images/logo.png";

export default function Landing1() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        // backgroundRepeat: "no-repeat",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Button
        sx={{
          display: "flex",
          backgroundImage: `url(${earth})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "700px",
          width: "700px",
          color: "transparent",
          backgroundColor: "transparent",
          boxShadow: "none",
          "&:hover": {
            color: "transparent",
            backgroundColor: "transparent",
          },
          "&:active": {
            color: "transparent",
            backgroundColor: "transparent",
          },
          // backgroundRepeat: "no-repeat",
        }}
      />

      <Typography
        sx={{
          mb: "-100px",
          fontWeight: "bold",
          textShadow: "0 0 10px white",
        }}
      >
        Copyright © 2023. E.A.R.T.H. Command Center - a subsidary business unit
        E & G Logistics. All rights reserved
      </Typography>
    </Box>
    // <Button
    //   component="img"
    //   src={landing1}
    //   alt="Bontrade Logo"
    //   sx={{
    //     my: "20px",
    //     width: "100wh",
    //     height: "100vh",
    //     display: "block",
    //     borderRadius: "50%",
    //   }}
    //   // onClick={}
    // />
  );
}
