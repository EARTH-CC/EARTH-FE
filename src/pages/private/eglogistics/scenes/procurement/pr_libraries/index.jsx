import { useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import AddItemModal from "modal/Procurement/AddItemModal";
import AddSupplierModal from "modal/Procurement/AddSupplierModal";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";
import themes from "../../../../../../themes/theme";
import mockData from "../../../../../../data/mockData";
import Header from "../../../../../../components/PrivateComponents/eglogistics/Header";

const { tokens } = themes;
const { mockDataItems } = mockData;

function PurchaseLibraries() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openItemModal, setOpenItemModal] = useState(false);
  const [openSupplierModal, setOpenSupplierModal] = useState(false);

  const handleAddItem = () => {
    setOpenItemModal(true);
  };

  const handleAddSupplier = () => {
    setOpenSupplierModal(true);
  };

  const handleCloseItem = () => {
    setOpenItemModal(false);
  };
  const handleCloseSupplier = () => {
    setOpenSupplierModal(false);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "qty",
      headerName: "Quantity",
      flex: 0.5,
    },
    {
      field: "unit",
      headerName: "Unit",
      flex: 0.5,
    },
  ];

  return (
    <Box sx={{ m: "5px 20px 20px 20px" }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "40px" }}
      >
        <Header
          title="Purchase Libraries"
          subtitle="List of Items and Suppliers"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              // backgroundColor: (themeMode) =>
              //   themeMode.palette.mode === "dark" ? "#334b5f" : "lightgray",
              color: colors.grey[100],
              "&:hover": {
                color: "white",
                backgroundColor: colors.blueAccent[300],
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

      <Divider sx={{ mt: 4, mb: 2 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Item Supplies
        </Typography>
      </Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
          right: "230px",
          mr: "20px",
          my: "-4px",
          zIndex: 1,
        }}
      >
        <Button
          onClick={handleAddItem}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 150,
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
          Add Item
        </Button>
      </Box>
      <AddItemModal
        open={openItemModal}
        handleClose={handleCloseItem}
        onSuccess={() => {
          setOpenItemModal(false);
          // handleSearch();
        }}
      />
      <Box>
        <DataGrid data={mockDataItems} columns={columns} />
      </Box>

      <Divider sx={{ mt: 8, mb: 2 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Suppliers/Vendors
        </Typography>
      </Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
          right: "0",
          mr: "250px",
          my: "-4px",
          zIndex: 1,
        }}
      >
        <Button
          onClick={handleAddSupplier}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 150,
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
          Add Supplier
        </Button>
      </Box>
      <AddSupplierModal
        open={openSupplierModal}
        handleClose={handleCloseSupplier}
      />
      <Box>
        <DataGrid data={mockDataItems} columns={columns} />
      </Box>
    </Box>
  );
}

export default PurchaseLibraries;
