import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "contexts/RequireAuth";
import PersistLogin from "contexts/PersistLogin";
import Layout from "contexts/Layouts/Layout";
import {
  Unauthorized,
  Missing,
  Login,
  Waterfront,
  Landing,
  Dashboard,
  PurchaseLibraries,
  Bontrade,
  UGTrade,
  Erotas,
} from "pages";
<<<<<<< HEAD
import Settings from "pages/private/eglogistics/scenes/settings";
=======
import PurchaseRequest from "pages/private/eglogistics/scenes/pr_request";
>>>>>>> f962433d7a44214b98d60cbb55e712f9bcb95d7d
import themes from "./themes/theme";

const { ColorModeContext, useMode } = themes;

function App() {
  const [theme, colorMode] = useMode();
  // const EGRoles = {
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
            <Route path="/" element={<Landing />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/waterfront" element={<Waterfront />} />

<<<<<<< HEAD
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            {/* <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles="eglogistics" />}>
=======
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles="superadmin" />}>
>>>>>>> f962433d7a44214b98d60cbb55e712f9bcb95d7d
                <Route path="/" element={<Layout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/purchaselibraries"
                    element={<PurchaseLibraries />}
                  />
                  <Route
                    path="/purchase-request"
                    element={<PurchaseRequest />}
                  />
                </Route>
              </Route>

              <Route element={<RequireAuth allowedRoles="bontrade" />}>
                <Route path="/bontrade" element={<Bontrade />} />
              </Route>

              <Route element={<RequireAuth allowedRoles="ugtrade" />}>
                <Route path="/ugtrade" element={<UGTrade />} />
              </Route>

              <Route element={<RequireAuth allowedRoles="erotas" />}>
                <Route path="/erotas" element={<Erotas />} />
              </Route>
            </Route>

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
