import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddItemModal from "modal/Procurement/AddItemModal";
import procurementService from "services/procurement-service";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";
import themes from "../../../../../../themes/theme";

const { tokens } = themes;

function Products() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [items, setItems] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [suppliers, setSuppliers] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const [openItemModal, setOpenItemModal] = useState(false);

  const moduleName = "product";

  const handleAddItem = () => {
    setOpenItemModal(true);
  };

  const handleCloseItem = () => {
    setOpenItemModal(false);
  };

  const handleGetAll = () => {
    setLoading(true);
    procurementService
      .getAllAPI(moduleName)
      .then((e) => {
        setItems(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetSuppliers = () => {
    setLoading(true);
    procurementService
      .getAllAPI("supplier")
      .then((e) => {
        setSuppliers(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetBrands = () => {
    setLoading(true);
    procurementService
      .getAllAPI("brand")
      .then((e) => {
        setBrands(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetCategories = () => {
    setLoading(true);
    procurementService
      .getAllAPI("category")
      .then((e) => {
        setCategories(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const brandMap = brands.reduce((map, brand) => {
    // eslint-disable-next-line no-param-reassign
    map[brand.uuid] = brand.name;
    return map;
  }, {});

  const categoryMap = categories.reduce((map, category) => {
    // eslint-disable-next-line no-param-reassign
    map[category.uuid] = category.name;
    return map;
  }, {});

  const supplierMap = suppliers.reduce((map, supplier) => {
    // eslint-disable-next-line no-param-reassign
    map[supplier.uuid] = supplier.company_name;
    return map;
  }, {});

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
      field: "brand_id",
      headerName: "Brand",
      flex: 0.5,
      valueGetter: (params) => brandMap[params?.row?.brand_id] || "Unknown",
    },
    {
      field: "category_id",
      headerName: "Category",
      flex: 0.5,
      valueGetter: (params) =>
        categoryMap[params?.row?.category_id] || "Unknown",
    },
    {
      field: "supplier_id",
      headerName: "Supplier",
      flex: 0.5,
      valueGetter: (params) =>
        supplierMap[params?.row?.supplier_id] || "Unknown",
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
      flex: 1,
    },
  ];

  useEffect(() => {
    handleGetAll();
    handleGetSuppliers();
    handleGetBrands();
    handleGetCategories();
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
          Add Product
        </Button>
      </Box>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Products
        </Typography>
      </Divider>
      <AddItemModal
        open={openItemModal}
        handleClose={handleCloseItem}
        onSuccess={() => {
          setOpenItemModal(false);
          handleGetAll();
        }}
      />
      <Box>
        <DataGrid data={items} columns={columns} loadingState={loading} />
      </Box>
    </Box>
  );
}

export default Products;
