import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "pages/private/eglogistics/global/Sidebar";
import Topbar from "pages/private/eglogistics/global/Topbar";

function TADLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", position: "relative", flex: "1" }}>
        <Sidebar />
        <Box
          sx={{
            height: "100vh",
            flexGrow: 1,
            overflowY: "auto",
            width: "calc(100% - 240px)",
          }}
        >
          <Topbar />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default TADLayout;
