/* eslint-disable import/no-duplicates */
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import egLogo from "../../../../assets/images/eglogistics.png";
import themes from "../../../../themes/theme";

const { tokens, ColorModeContext } = themes;

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      {/* Middle Bar */}
      <Box width="33%" />
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        paddingLeft="16px"
        paddingRight="16px"
        sx={{ flexGrow: 1, my: "-20px" }}
      >
        <img alt="profile-user" width="100px" height="100px" src={egLogo} />
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            m: "10px 0 0 20px",
            color: "#000000",
            letterSpacing: "0.3em",
            fontFamily: "Poppins, sans-serif",
            fontSize: "30px",
            fontWeight: "900",
          }}
        >
          E&G LOGISTICS
        </Typography>
      </Box>
      <Box width="27%" />

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={handleSettings}>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
