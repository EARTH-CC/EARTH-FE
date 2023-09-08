import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PurchaseRequestModal from "modal/Procurement/PurchaseRequestModal";
import procurementService from "services/procurement-service";
import Header from "../../../../../../components/PrivateComponents/eglogistics/Header";
import themes from "../../../../../../themes/theme";
import PurchaseRequestTable from "./prrequestTable";
import SnackbarComponent from "../../../../../../components/PrivateComponents/SnackBarComponent";

const { tokens } = themes;

export default function PurchaseRequest() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ito ung kumukuha ng mga rows na naselect sa table para maidisplay ung total
  const [PR, setPR] = useState();

  // ito ung naghahahandle ng mga items sa modal
  const [data, setData] = useState();

  // ito ung kumukuha ng data mula sa api para mailagay sa table
  const [PRData, setPRData] = useState([]);

  // ito ung naghahahandle ng nakastructure na na object para maipost sa purchaseRequest
  const [PRValues, setPRValues] = useState();

  const [openPRRequestModal, setOpenPRRequestModal] = useState(false);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePRRequest = () => {
    setOpenPRRequestModal(true);
  };

  const handleClosePRRequest = () => {
    setOpenPRRequestModal(false);
    setError("");
  };

  const handlePRChange = (newPR) => {
    setData(newPR);
  };

  const handleGetAll = () => {
    setLoading(true);
    procurementService
      .getAllAPI("purchaseRequest")
      .then((e) => {
        setPRData(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    setError("");
    setLoading(true);

    procurementService
      .addAPI(PRValues, "purchaseRequest")
      .then(() => {
        setOpenPRRequestModal(false);
        handleGetAll();
        setOpenSuccess(true);
      })
      .catch((err) => {
        setError(err?.message);
        setOpenError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  useEffect(() => {
    handleGetAll();
  }, []);

  const handleTotal = (evt) => {
    // Use reduce to calculate the total sum of total_amount in the compute array
    const total = evt?.reduce((acc, item) => acc + item.total_amount, 0);
    return total || 0;
  };

  return (
    <Box sx={{ m: "-5px 20px 20px 20px" }}>
      <PurchaseRequestModal
        data={data}
        open={openPRRequestModal}
        handleClose={handleClosePRRequest}
        onPRChange={handlePRChange}
        setPRValues={setPRValues}
        onSubmit={handleSubmit}
        error={error}
      />
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "20px" }}
      >
        <Header title="Purchase Request" subtitle="Request for the items" />

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
          onClick={handlePRRequest}
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
          Purchase Request
        </Button>
      </Box>
      <Box
        sx={{
          right: 0,
          mr: 2,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Typography sx={{ mt: -0.5, textAlign: "right", fontSize: "15px" }}>
          Total Amount (of selected row/s): <br /> <b> {handleTotal(PR)}</b>
        </Typography>
      </Box>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Purchase Request
        </Typography>
      </Divider>

      <Box>
        <PurchaseRequestTable
          PRData={PRData}
          getData={setPR}
          loadingState={loading}
        />
      </Box>
      <SnackbarComponent
        open={openSuccess}
        onClose={handleCloseSuccess}
        severity="success"
        message="Request Successful."
      />
      <SnackbarComponent
        open={openError}
        onClose={handleCloseError}
        severity="error"
        message="Request failed."
      />
    </Box>
  );
}
