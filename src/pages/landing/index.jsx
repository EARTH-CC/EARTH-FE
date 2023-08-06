import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import Bontrade from "../../assets/bontrade.png";
import UGTrade from "../../assets/ugtrade.png";
import EGLogistics from "../../assets/eglogistics.png";
import Erotas from "../../assets/erotas.png";
import "./container.css";
import waveTop from "../../assets/wave-top.png";
import waveMid from "../../assets/wave-mid.png";
import waveBot from "../../assets/wave-bot.png";
import EGLogisticsLogin from "../../modal/EGLogisticsLogin";
import BontradeLogin from "../../modal/BontradeLogin";
import UGTradeLogin from "../../modal/UGTradeLogin";
import ErotasLogin from "../../modal/ErotasLogin";

function ContentItem() {
  const [openEG, setOpenEG] = useState(false);
  const [openBon, setOpenBon] = useState(false);
  const [openUG, setOpenUG] = useState(false);
  const [openEro, setOpenEro] = useState(false);

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
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundImage: `url(${Logo})`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            height: "100px",
            minWidth: "140px",
            ml: "10rem",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box
          sx={{
            mr: "10rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: "4rem",
          }}
        >
          <Button
            type="button"
            // onClick={handleClickLogin}
            sx={{
              width: 130,
              height: 50,
              fontFamily: "poppins",
              backgroundColor: "#00c0fe",
              mr: 0.2,
              color: "black",
              boxShadow: "3px 3px 5px #56d5ff, 10px 10px 40px #56d5ff",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              width: 130,
              height: 50,
              fontFamily: "poppins",
              mr: 0.2,
              color: "black",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              width: 130,
              height: 50,
              fontFamily: "poppins",
              mr: 0.2,
              color: "black",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              width: 200,
              height: 50,
              fontFamily: "poppins",
              mr: 0.2,
              color: "black",
              backgroundColor: "#cef9ff",
              boxShadow: "1px 1px 5px #b8f6ff, 4px 10px 4px #b8f6ff",
              "&:hover": {
                textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                color: "black",
                backgroundColor: "red",
                boxShadow: "3px 3px 5px red, 10px 10px 40px red",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
          // height: "60vh",
          mt: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold", color: "#231a8b" }}>
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
        <Box
          sx={{
            backgroundColor: "black",
            height: "6px",
            width: "500px",
            my: "20px",
          }}
        />
        <Background />
      </Grid>

      <Grid // Underline
        item
        xs={12}
        sx={{
          height: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            height: "120px",
            minWidth: "120px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
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
            height: "120px",
            minWidth: "120px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
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
            height: "120px",
            minWidth: "120px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
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
            height: "120px",
            minWidth: "120px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
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
      </Grid>
      <EGLogisticsLogin open={openEG} handleClose={handleCloseEG} />
      <BontradeLogin open={openBon} handleClose={handleCloseBon} />
      <UGTradeLogin open={openUG} handleClose={handleCloseUG} />
      <ErotasLogin open={openEro} handleClose={handleCloseEro} />
    </Grid>
  );
}

function Background() {
  return (
    <div className="animation-container">
      <div className="boom-container">
        <div className="shape circle big white" />
        <div className="shape circle white" />
        <div className="shape triangle big yellow" />
        <div className="shape disc white" />
        <div className="shape triangle blue" />
      </div>
      <div className="boom-container second">
        <div className="shape circle big white" />
        <div className="shape circle white" />
        <div className="shape disc white" />
        <div className="shape triangle blue" />
      </div>
      <div className="boom-container third">
        <div className="shape circle big white" />
        <div className="shape circle white" />
        <div className="shape disc white" />
        <div className="shape triangle blue" />
      </div>
    </div>
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

function Content() {
  return (
    <Box className="content">
      <ContentItem />
      <Footer />
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
