import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import RequireAuth from "contexts/RequireAuth";
// import PersistLogin from "contexts/PersistLogin";
import Layout from "contexts/Layouts/Layout";
import {
  Unauthorized,
  Missing,
  Dashboard,
  Login,
  Landing,
  Bontrade,
  UGTrade,
  Erotas,
} from "pages";
import themes from "./themes/theme";
import LandingPage from "./pages/landing/landing1";

const { ColorModeContext, useMode } = themes;

function App() {
  const [theme, colorMode] = useMode();
  // const TADRoles = {
  //   admin: "admin",
  //   superadmin: "superadmin",
  //   reviewer: "reviewer",
  //   uploader: "uploader",
  //   planner: "planner",
  // };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ zIndex: 1500 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/bontrade" element={<Bontrade />} />
            <Route path="/ugtrade" element={<UGTrade />} />
            <Route path="/erotas" element={<Erotas />} />

            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles="eglogistics" />}>
                <Route path="/" element={<Layout />}>
                
                </Route>
              </Route> 
            </Route> */}

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
