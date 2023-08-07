import React from "react";
import { Box, Button, Slide, Typography, Zoom } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import earth from "../../assets/images/logo.png";
import Landing2 from "./landing2";
import "./container.css";

export default function Landing1() {
  const { isMainLanding, setIsMainLanding } = useStateContext();

  const handleClick = () => {
    setIsMainLanding(true);
  };

  return (
    <Box className="landing-bg">
      <Slide in={isMainLanding} direction="left">
        <Box>
          <Landing2 />
        </Box>
      </Slide>
      <Zoom in={!isMainLanding}>
        <Box className="intro">
          <Button // Earth Logo
            onClick={handleClick}
            sx={{
              backgroundImage: `url(${earth})`,
              backgroundSize: "contain",
              height: "700px",
              width: "700px",
              m: "auto",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100vw",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textShadow: "0 0 10px white",
              }}
            >
              Copyright © 2023. E.A.R.T.H. Command Center - a subsidiary
              business unit of E & G Logistics. All rights reserved
            </Typography>
          </Box>
        </Box>
      </Zoom>
    </Box>
  );
}
