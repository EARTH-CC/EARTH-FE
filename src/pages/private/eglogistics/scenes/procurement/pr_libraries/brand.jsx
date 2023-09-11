import { useEffect, useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddBrandModal from "../../../../../../modal/Procurement/ProcurementLibraries/AddBrandModal";
import procurementService from "../../../../../../services/procurement-service";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/Tables/DataGrid";
import themes from "../../../../../../themes/theme";

const { tokens } = themes;

function BrandLibraries() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [brands, setBrands] = useState([]);

  const [loading, setLoading] = useState(false);
  const [openBrandModal, setOpenBrandModal] = useState(false);

  const moduleName = "brand";

  const handleAddBrand = () => {
    setOpenBrandModal(true);
  };

  const handleCloseItem = () => {
    setOpenBrandModal(false);
  };

  const handleGetAll = () => {
    setLoading(true);
    procurementService
      .getAllAPI(moduleName)
      .then((e) => {
        setBrands(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const columns = [
    {
      field: "uuid",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      valueGetter: (params) =>
        ["Inactive", "Active"][params?.row?.status] || "Unknown",
    },
  ];

  useEffect(() => {
    handleGetAll();
  }, []);

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
          onClick={handleAddBrand}
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
          Add Brand
        </Button>
      </Box>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Brands
        </Typography>
      </Divider>
      <AddBrandModal
        open={openBrandModal}
        handleClose={handleCloseItem}
        onSuccess={() => {
          setOpenBrandModal(false);
          handleGetAll();
        }}
      />
      <Box>
        <DataGrid
          data={brands}
          columns={columns}
          loadingState={loading}
          checkbox={false}
        />
      </Box>
    </Box>
  );
}

export default BrandLibraries;
