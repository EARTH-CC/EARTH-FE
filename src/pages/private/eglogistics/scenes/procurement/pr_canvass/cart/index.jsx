import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForwardIcon from "@mui/icons-material/Forward";
import procurementService from "services/procurement-service";
import AddPRDetails from "modal/Procurement/CanvassCart/AddPRDetailsModal";
import Header from "components/PrivateComponents/eglogistics/Header";
import SnackbarComponent from "components/PrivateComponents/SnackBarComponent";
import themes from "../../../../../../../themes/theme";
import CartTable from "./cartTable";

const { tokens } = themes;

export default function CanvassCart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const moduleName = "canvass";

  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [PRDetails, setPRDetails] = useState(); // attention at remarks ung dinadala
  const [selectedData, setSelectedData] = useState([]);
  const [toBeUpdated, setToBeUpdated] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [restriction, setRestriction] = useState("");

  const [openPRDetailsModal, setOpenPRDetailsModal] = useState(false);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleAddPRDetails = () => {
    setOpenPRDetailsModal(true);
  };

  const handleClosePRDetails = () => {
    setOpenPRDetailsModal(false);
    // setError("");
  };

  const handleGetAll = () => {
    setLoading(true);
    procurementService
      .getAllAPI(moduleName)
      .then((e) => {
        setData(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetAllItems = () => {
    setLoading(true);
    procurementService
      .getAllAPI("product")
      .then((e) => {
        setItems(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleItemUpdate = (row) => {
    setError("");
    setLoading(true);
    procurementService
      .updateAPI(row.uuid, { quantity: row.quantity }, moduleName)
      .then((e) => {
        handleGetAll();
        setSuccessMessage(e.data.message);
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

  const handleSubmit = () => {
    setError("");
    setLoading(true);

    const PRitems = selectedData.map((row) => {
      const foundItem = items.find((item) => item.item_code === row.item_code);
      return {
        item_code: foundItem.item_code,
        price: foundItem.price,
        quantity: row.quantity,
        product_id: foundItem.uuid,
        brand_id: foundItem.brand_id,
        supplier_id: foundItem.supplier_id,
        category_id: foundItem.category_id,
        description: foundItem.description,
      };
    });

    const PRData = {
      attention: PRDetails.attention,
      remarks: PRDetails.remarks,
      items: PRitems,
    };

    procurementService
      .addAPI(PRData, "purchase")
      .then((e) => {
        handleGetAll();
        setSuccessMessage(e.data.message);
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
    handleGetAllItems();
  }, []);

  useEffect(() => {
    if (toBeUpdated?.length !== 0) {
      handleItemUpdate(toBeUpdated);
    }
  }, [toBeUpdated]);

  useEffect(() => {
    setRestriction("");
    let hasDifferentSupplier = false;

    selectedData?.forEach((row1) => {
      selectedData?.forEach((row2) => {
        const foundItem1 = items.find(
          (item) => item.item_code === row1.item_code
        );
        const foundItem2 = items.find(
          (item) => item.item_code === row2.item_code
        );
        if (foundItem1.supplier_id !== foundItem2.supplier_id) {
          setRestriction(
            "Selecting rows with different suppliers is restricted"
          );
          hasDifferentSupplier = true;
        }
      });
    });

    if (
      !selectedData?.length ||
      PRDetails.attention === "" ||
      PRDetails.remarks === "" ||
      hasDifferentSupplier
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [selectedData, PRDetails?.attention, PRDetails?.remarks]);

  const handleTotal = (evt) => {
    const total = evt?.reduce((acc, item) => acc + item.price, 0);
    return total || 0;
  };

  return (
    <Box sx={{ m: "-5px 20px 20px 20px" }}>
      <AddPRDetails
        open={openPRDetailsModal}
        handleClose={handleClosePRDetails}
        PROtherDetails={setPRDetails}
      />
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "20px" }}
      >
        <Header title="Canvass Cart" subtitle="Canvass Cart" />
      </Box>
      <Box
        borderRadius="10px"
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)"
        p="1rem"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Box
          mb={2}
          sx={{
            display: "flex",
            justifyContent: "end",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <Button
            onClick={handleAddPRDetails}
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
            Add PR Details
          </Button>
        </Box>
        <Divider>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "25px",
            }}
          >
            Canvass Cart
          </Typography>
        </Divider>
        <CartTable
          cartData={data}
          selectedData={setSelectedData}
          loadingState={loading}
          rowToUpdate={setToBeUpdated}
        />
        <Divider
          variant="middle"
          sx={{ borderTopWidth: "1px", borderTopColor: "grey" }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "1em",
          }}
        >
          <Box>
            <Typography
              fontSize="medium"
              fontWeight="900"
              color={colors.blueAccent[300]}
              sx={{
                letterSpacing: "0.05em",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Selected (
              {selectedData ? `${selectedData?.length} items` : "0 item"}):{" "}
              <span style={{ fontSize: "18px" }}>₱</span>{" "}
              {selectedData ? handleTotal(selectedData) : 0}
            </Typography>
            <Typography
              fontSize="medium"
              fontWeight="900"
              color={colors.blueAccent[300]}
              sx={{
                letterSpacing: "0.05em",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Subtotal Amount ({data ? `${data.length} items` : "0 item"}):{" "}
              <span style={{ fontSize: "18px" }}>₱</span>{" "}
              {data ? handleTotal(data) : 0}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: colors.redAccent[500] }}
            >
              {`${restriction}`}
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography color="gray">
              Add PR Details First and <br />
              Select items/s to proceed
            </Typography>
            <Button
              disabled={disabled}
              onClick={handleSubmit}
              sx={{
                backgroundColor: disabled
                  ? colors.blueAccent[800]
                  : colors.blueAccent[300],
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
              <ForwardIcon sx={{ mr: "10px" }} />
              Place Request
            </Button>
          </Box>
        </Box>
      </Box>
      <SnackbarComponent
        open={openSuccess}
        onClose={handleCloseSuccess}
        severity="success"
        message={successMessage}
      />
      <SnackbarComponent
        open={openError}
        onClose={handleCloseError}
        severity="error"
        message={error}
      />
    </Box>
  );
}
