import { useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddItemModal from "modal/Procurement/AddItemModal";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";
import themes from "../../../../../../themes/theme";
import mockData from "../../../../../../data/mockData";

const { tokens } = themes;
const { mockDataItems } = mockData;

function CategoryLibraries() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openItemModal, setOpenItemModal] = useState(false);

  const handleAddItem = () => {
    setOpenItemModal(true);
  };

  const handleCloseItem = () => {
    setOpenItemModal(false);
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
    <Box sx={{ m: "15px 20px 20px 20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
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
          Add Category
        </Button>
      </Box>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Category
        </Typography>
      </Divider>
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
    </Box>
  );
}

export default CategoryLibraries;
