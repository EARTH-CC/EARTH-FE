import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "assets/erotas.png";

function StickyAppBar() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 100 }}>
      <AppBar
        position="static"
        sx={{
          borderBottom: "3px solid #830076", // Your desired color for the bottom border
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleGoBack}
            sx={{ mr: 2, ml: 5 }}
          >
            <img src={Logo} alt="Logo" style={{ height: "50px" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#830076", // Your desired color for the text
              fontFamily: "Poppins", // Your desired font family
              fontSize: 18, // Your desired font size
              fontWeight: "bold", // Your desired font weight
            }}
          >
            Erotas Portus Incorporated
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default StickyAppBar;
