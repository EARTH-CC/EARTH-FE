import { useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddSupplierModal from "modal/Procurement/AddSupplierModal";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";
import themes from "../../../../../../themes/theme";
import mockData from "../../../../../../data/mockData";

const { tokens } = themes;
const { mockDataItems } = mockData;

function SupplierLibraries() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openSupplierModal, setOpenSupplierModal] = useState(false);

  const handleAddSupplier = () => {
    setOpenSupplierModal(true);
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

export default SupplierLibraries;
