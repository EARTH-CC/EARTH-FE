import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import Bonatrade from "../../assets/bonatrade.png";
import UGTrade from "../../assets/ugtrade.png";
import EGLogistics from "../../assets/eglogistics.png";
import Erotas from "../../assets/erotas.png";
import "./container.css";
import waveTop from "../../assets/wave-top.png";
import waveMid from "../../assets/wave-mid.png";
import waveBot from "../../assets/wave-bot.png";
import Login from "../../modal/login";

function ContentItem() {
  const [open, setOpen] = useState(false);

  const handleClickLogin = () => {
    setOpen(true);
  };

  const handleCloseLogin = () => {
    setOpen(false);
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
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          // height: "60vh",
          mt: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2em",
        }}
      >
        <Button
          onClick={handleClickLogin}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${Bonatrade})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "100px",
            minWidth: "100px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
              color: "#00c0fe",
            },
            "&:active": {
              color: "#00c0fe",
            },
          }}
        />
        <Button
          onClick={handleClickLogin}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${UGTrade})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "100px",
            minWidth: "100px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
              color: "#00c0fe",
            },
            "&:active": {
              color: "#00c0fe",
            },
          }}
        />
        <Button
          onClick={handleClickLogin}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${EGLogistics})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "100px",
            minWidth: "100px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
              color: "#00c0fe",
            },
            "&:active": {
              color: "#00c0fe",
            },
          }}
        />
        <Button
          onClick={handleClickLogin}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${Erotas})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "100px",
            minWidth: "100px",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            "&:hover": {
              color: "#00c0fe",
            },
            "&:active": {
              color: "#00c0fe",
            },
          }}
        />
      </Grid>
      <Login open={open} handleClose={handleCloseLogin} />
    </Grid>
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
    </Box>
  );
}

export default function Landing() {
  return (
    <Box className="app">
      <Footer />
      <Content />
    </Box>
  );
}
