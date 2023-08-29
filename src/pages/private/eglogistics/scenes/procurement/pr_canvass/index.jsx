import * as React from "react";
import { Box, Button, Grid, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Filters from "./filters";
import CanvasTable from "./canvasTable";
import themes from "../../../../../../themes/theme";
import Header from "../../../../../../components/PrivateComponents/eglogistics/Header";

const { tokens } = themes;

export default function CanvassSheet() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: "-5px 20px 20px 20px" }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "20px" }}
      >
        <Header
          title="Canvass Sheet"
          subtitle="Compare suppliers and decide better with our Purchase Canvass Sheet"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[300],
              // backgroundColor: (themeMode) =>
              //   themeMode.palette.mode === "dark" ? "#334b5f" : "lightgray",
              color: colors.grey[900],
              "&:hover": {
                color: "white",
                backgroundColor: colors.blueAccent[700],
              },
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "5px",
              boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Grid
        container
        spacing={0}
        borderRadius="10px"
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Grid item xs={2} sx={{ minWidth: "150px" }}>
          <Filters />
        </Grid>

        <Grid
          item
          xs={10}
          sx={{ borderLeft: "solid 1px #C0C0C0", paddingTop: "20px" }}
        >
          <CanvasTable />
        </Grid>
      </Grid>
    </Box>
  );
}
