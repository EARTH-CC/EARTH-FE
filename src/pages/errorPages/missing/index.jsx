import React from "react";
import "./style.css";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Missing() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF7F2E",
      }}
    >
      <Box className="text">
        <Typography sx={{ fontSize: "40em", color: "rgba(19, 36, 44, 0.1)" }}>
          404
        </Typography>
      </Box>
      <div className="container">
        <div className="caveman" style={{ animationDelay: "0s" }}>
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="shape">
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose" />
            </div>
            <div className="mouth" />
          </div>
          <div className="arm-right">
            <div className="club" />
          </div>
        </div>
        <div className="caveman" style={{ animationDelay: "0s" }}>
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers" />
            </div>
          </div>
          <div className="shape">
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose" />
            </div>
            <div className="mouth" />
          </div>
          <div className="arm-right">
            <div className="club" />
          </div>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: "500px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            mb: "30px",
            textAlign: "center",
          }}
        >
          Oops! It looks like you have issues :/ .|..
        </Typography>
        <Button
          onClick={goBack}
          sx={{
            backgroundColor: "gray",
            borderRadius: "15px",
            padding: "10px 20px",
            fontSize: "12px",
            color: "#fff",
            boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
            "&:hover": {
              boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
              backgroundColor: "lightgray",
              color: "black",
              transition: "all 0.1s ease-in-out",
              mx: "5px",
            },
          }}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
}
