import React, { useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PurchaseRequestModal from "modal/Procurement/PurchaseRequestModal";
import Header from "../../../../../../components/PrivateComponents/eglogistics/Header";
import themes from "../../../../../../themes/theme";
import PurchaseOrderTable from "./prorderTable";

const { tokens } = themes;

export default function PurchaseRequest() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openPROrderModal, setOpenPROrderModal] = useState(false);

  const handlePROrder = () => {
    setOpenPROrderModal(true);
  };

  const handleClosePROrder = () => {
    setOpenPROrderModal(false);
  };

  return (
    <Box sx={{ m: "5px 20px 20px 20px" }}>
      <PurchaseRequestModal
        open={openPROrderModal}
        handleClose={handleClosePROrder}
        onSuccess={() => {
          setOpenPROrderModal(false);
          // handleGetAll();
        }}
      />
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "40px" }}
      >
        <Header title="Purchase Order" subtitle="Order the items" />

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
              borderRadius: "10px",
              boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Button
          onClick={handlePROrder}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: (themeMode) =>
              themeMode.palette.mode === "dark" ? "#334b5f" : "lightgray",
            color: colors.grey[100],
            "&:hover": {
              textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.75)",
              color: "#fff",
              backgroundColor: "gray",
            },
          }}
        >
          <AddIcon sx={{ mr: 0.5 }} />
          Purchase Order
        </Button>
      </Box>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Purchase Order
        </Typography>
      </Divider>

      <Box>
        <PurchaseOrderTable />
      </Box>
    </Box>
  );
}