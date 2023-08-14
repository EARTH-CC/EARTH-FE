/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Bontrade from "../../assets/bontrade.png";
import UGTrade from "../../assets/ugtrade.png";
import EGLogistics from "../../assets/eglogistics.png";
import Erotas from "../../assets/erotas.png";
import waveTop from "../../assets/wave-top.png";
import waveMid from "../../assets/wave-mid.png";
import waveBot from "../../assets/wave-bot.png";
import EGLogisticsLogin from "../../modal/EGLogisticsLogin";
import BontradeLogin from "../../modal/BontradeLogin";
import UGTradeLogin from "../../modal/UGTradeLogin";
import ErotasLogin from "../../modal/ErotasLogin";
import "./container.css";

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({
    left: 0,
    top: 0,
    opacity: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      setCursorPosition({ left: x - 175, top: y - 175, opacity: 1 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        width: "350px",
        height: "350px",
        borderRadius: "100%",
        position: "absolute",
        boxShadow: "2px -3px 41px -1px rgba(241, 196, 15, 0.64)",
        zIndex: 0,
        opacity: cursorPosition.opacity,
        background:
          "linear-gradient(45deg, #009aff, #a200ff, #1500ce, #00bace, #8f00e2, #ffa112, #ce00c0, #ce006e, #ce0022)",
        backgroundSize: "400%",
        animation: "glower 20s linear infinite",
        filter: "blur(40px)",
        left: `${cursorPosition.left}px`,
        top: `${cursorPosition.top}px`,
      }}
    />
  );
}

function ContentItem() {
  const [openEG, setOpenEG] = useState(false);
  const [openBon, setOpenBon] = useState(false);
  const [openUG, setOpenUG] = useState(false);
  const [openEro, setOpenEro] = useState(false);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleOpenEG = () => {
    setOpenEG(true);
  };

  const handleCloseEG = () => {
    setOpenEG(false);
  };
  const handleOpenBon = () => {
    setOpenBon(true);
  };

  const handleCloseBon = () => {
    setOpenBon(false);
  };
  const handleOpenUG = () => {
    setOpenUG(true);
  };

  const handleCloseUG = () => {
    setOpenUG(false);
  };
  const handleOpenEro = () => {
    setOpenEro(true);
  };

  const handleCloseEro = () => {
    setOpenEro(false);
  };

  return (
    <Grid
      container
      spacing={0}
      sx={{
        position: "absolute",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mx: "10rem",
        }}
      >
        <Box
          onClick={handleGoBack}
          component="img"
          alt="logo"
          src={Logo}
          height="100px"
          width="100px"
          sx={{ cursor: "pointer" }}
        />

        <Box
          sx={{
            display: "flex",
            gap: "2em",
          }}
        >
          <Button
            type="button"
            // onClick={handleClickLogin}
            sx={{
              minWidth: 120,
              height: 50,
              fontFamily: "poppins",
              // backgroundColor: "#304ea84",
              backgroundColor: "rgba(48, 78, 168, 0.9)",
              color: "black",
              boxShadow: "3px 3px 5px #56d5ff, 10px 10px 40px #56d5ff",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "900" }}>
              HOME
            </Typography>
            {/* <span>HOME</span>
            <span>HOME</span> */}
          </Button>

          <Button
            type="button"
            // onClick={handleClickLogin}
            sx={{
              minWidth: 170,
              height: 50,
              fontFamily: "poppins",
              color: "black",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "900" }}>
              FEATURES
            </Typography>
            {/* <span>ATTENDANCE</span>
            <span>ATTENDANCE</span> */}
          </Button>

          <Button
            type="button"
            // onClick={handleOpenAppForm}
            sx={{
              minWidth: 130,
              height: 50,
              fontFamily: "poppins",
              color: "black",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "900" }}>
              ABOUT
            </Typography>
            {/* <span>CONTACT</span>
            <span>CONTACT</span> */}
          </Button>
          <Button
            type="button"
            // onClick={handleOpenAppForm}
            sx={{
              minWidth: 210,
              height: 50,
              fontFamily: "poppins",
              color: "black",
              backgroundColor: "rgba(206, 249, 255, 0.9)",
              boxShadow: "1px 1px 5px #b8f6ff, 4px 10px 4px #b8f6ff",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "900" }}>
              DOWNLOAD
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          mt: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // clipPath:
            //   "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            p: "100px 50px",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "rgba(236, 181, 42, 0.9)",
            background:
              "linear-gradient(160deg, rgba(119, 185, 232, 0.9), rgba(8, 59, 95, 0.9))",
            boxShadow: "0 0 10px 5px rgba(48, 78, 168, 0.7)",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", color: "#231a8b" }}
          >
            MANILA WATERFRONT CITY <break />
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#606060",
              my: "-5px",
              letterSpacing: "4px",
            }}
          >
            RECLAMATION PROJECT
          </Typography>
          <Box // Underline
            sx={{
              backgroundColor: "black",
              height: "6px",
              width: "500px",
              mt: "20px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "180px",
              width: "600px",
              gap: "2em",
            }}
          >
            <Button
              onClick={handleOpenEG}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${EGLogistics})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundColor: "#ececec",
                height: "120px",
                minWidth: "120px",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
                  transition: "all 0.1s ease-in-out",
                  mx: "5px",
                  width: "150px",
                  height: "150px",
                },
                "&:active": {
                  color: "#00c0fe",
                },
              }}
            />
            <Button
              onClick={handleOpenBon}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${Bontrade})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundColor: "#ececec",
                height: "120px",
                minWidth: "120px",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
                  transition: "all 0.1s ease-in-out",
                  mx: "5px",
                  width: "150px",
                  height: "150px",
                },
                "&:active": {
                  color: "#00c0fe",
                },
              }}
            />
            <Button
              onClick={handleOpenUG}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${UGTrade})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundColor: "#ececec",
                height: "120px",
                minWidth: "120px",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
                  transition: "all 0.1s ease-in-out",
                  mx: "5px",
                  width: "150px",
                  height: "150px",
                },
                "&:active": {
                  color: "#00c0fe",
                },
              }}
            />
            <Button
              onClick={handleOpenEro}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${Erotas})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundColor: "#ececec",
                height: "120px",
                minWidth: "120px",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
                  transition: "all 0.1s ease-in-out",
                  mx: "5px",
                  width: "150px",
                  height: "150px",
                },
                "&:active": {
                  color: "#00c0fe",
                },
              }}
            />
          </Box>
        </Box>
      </Grid>

      <EGLogisticsLogin open={openEG} handleClose={handleCloseEG} />
      <BontradeLogin open={openBon} handleClose={handleCloseBon} />
      <UGTradeLogin open={openUG} handleClose={handleCloseUG} />
      <ErotasLogin open={openEro} handleClose={handleCloseEro} />
    </Grid>
  );
}

function Hexagon() {
  return <div className="hexagon" />;
}

function Honeycomb() {
  const [gridInfo, setGridInfo] = useState({
    numRows: 0,
    numHexagonsPerRow: 0,
  });

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      const hexagonSize = 100; // Adjust this value as needed
      const numHexagonsPerRow = Math.floor(screenWidth / hexagonSize);
      const numRows = Math.max(
        Math.floor(window.innerHeight / (hexagonSize * 0.75)),
        1
      );

      setGridInfo({ numRows, numHexagonsPerRow });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const honeycombRows = [];

  for (let row = 0; row < gridInfo.numRows; row++) {
    const rowClassName = row % 2 === 0 ? "row" : "row row-moved";
    const hexagons = [];

    for (let hexagon = 0; hexagon < gridInfo.numHexagonsPerRow; hexagon++) {
      hexagons.push(<Hexagon key={hexagon} />);
    }

    honeycombRows.push(
      <div key={row} className={rowClassName}>
        {hexagons}
      </div>
    );
  }

  return (
    <Box sx={{ pl: "6px" }}>
      <div className="cursor" />
      {honeycombRows}
    </Box>
  );
}

function Footer() {
  return (
    <Box className="bg-animation">
      <Box className="waveWrapper waveAnimation">
        <Box className="waveWrapperInner bgTop">
          <Box
            className="wave waveTop"
            sx={{
              backgroundImage: `url(${waveTop})`,
            }}
          />
        </Box>
        <Box className="waveWrapperInner bgMiddle">
          <Box
            className="wave waveMiddle"
            sx={{
              backgroundImage: `url(${waveMid})`,
            }}
          />
        </Box>
        <Box className="waveWrapperInner bgBottom">
          <Box
            className="wave waveBottom"
            sx={{
              backgroundImage: `url(${waveBot})`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

// function Earth() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         position: "absolute",
//         bottom: 30,
//         width: "100%",
//         justifyContent: "center",
//       }}
//     >
//       <div className="earth" />
//       <div className="earth-shadow" />
//     </Box>
//   );
// }

function Content() {
  return (
    <Box className="content">
      <ContentItem />
      {/* <Earth /> */}
      <Footer />
      <Cursor />
      <Honeycomb />
    </Box>
  );
}

export default function Landing() {
  return (
    <Box className="app">
      <Content />
    </Box>
  );
}
