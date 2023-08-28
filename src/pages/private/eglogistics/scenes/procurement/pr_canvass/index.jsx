import * as React from "react";
import { Box } from "@mui/material";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import themes from "../../../../../../themes/theme";
import Header from "../../../../../../components/PrivateComponents/eglogistics/Header";

// const { tokens } = themes;

export default function PurchaseCanvass() {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: "15px 20px 20px 20px" }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "20px" }}
      >
        <Header
          title="Canvass Sheet"
          subtitle="Compare suppliers and decide better with our Purchase Canvass Sheet."
        />
      </Box>
    </Box>
  );
}
