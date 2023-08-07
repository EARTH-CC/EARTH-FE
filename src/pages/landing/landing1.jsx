// import React, { useEffect, useState } from "react";
// import React from "react";
import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import honeycomb from "../../assets/honeycomb.png";
import earth from "../../assets/images/logo.png";

export default function Landing1() {
  const [alignment, setAlignment] = useState("center");

  // const navigate = useNavigate();

  // const handleNextLanding = () => {
  //   navigate("/landing");
  // };

  const handleClick = () => {
    setAlignment("flex-start");
  };

  return (
    <Box // Honeycomb Background
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${honeycomb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        // gap: "50px",
        // flexDirection: "column",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100vh",
          }}
        >
          <Button // Earth Logo
            onClick={handleClick}
            sx={{
              display: "flex",
              backgroundImage: `url(${earth})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "700px",
              width: "700px",
              color: "transparent",
              backgroundColor: "transparent",
              mx: "100px",
              boxShadow: "none",
              "&:hover": {
                color: "transparent",
                backgroundColor: "transparent",
              },
              "&:active": {
                color: "transparent",
                backgroundColor: "transparent",
              },
              alignSelf: alignment,
              backgroundRepeat: "no-repeat",
            }}
          />
          <Box // Side Nav
            sx={{
              height: "90vh",
              width: "600px",
              backgroundColor: "rgba(135, 135, 135, 0.9)",
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 50%)",
            }}
          />
        </Grid>
      </Grid>

      <Typography
        sx={{
          display: "flex",
          position: "absolute",
          bottom: 35, // Align the text to the bottom of the page
          padding: "10px",
          fontWeight: "bold",
          textShadow: "0 0 10px white",
        }}
      >
        Copyright © 2023. E.A.R.T.H. Command Center - a subsidary business unit
        E & G Logistics. All rights reserved
      </Typography>
    </Box>
  );
}
