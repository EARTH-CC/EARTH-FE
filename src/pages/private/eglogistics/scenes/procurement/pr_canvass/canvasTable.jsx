import React, { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import AddItemModal from "../../../../../../modal/Procurement/ProcurementLibraries/AddItemModal";
import procurementService from "../../../../../../services/procurement-service";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";

function CanvasTable() {
  const [openItemModal, setOpenItemModal] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const selectedValues = [];

  const handleCloseItem = () => {
    setOpenItemModal(false);
  };

  const handleGetAll = () => {
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

  const handleValue = (params) => {
    selectedValues.push(params.row);
    console.log(selectedValues);
  };

  useEffect(() => {
    handleGetAll();
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
      renderCell: (params) => {
        handleValue(params);
      },
    },
    {
      field: "item_code",
      headerName: "Item Code",
      flex: 0.5,
    },
    {
      field: "brand_name",
      headerName: "Brand",
      flex: 0.5,
    },
    {
      field: "category_name",
      headerName: "Category",
      flex: 0.5,
    },
    {
      field: "supplier_name",
      headerName: "Supplier",
      flex: 0.5,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "left",
      flex: 0.5,
    },
  ];

  return (
    <Box sx={{ m: "15px 20px 20px 20px" }}>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Item Supplies
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
        <DataGrid
          data={items}
          columns={columns}
          loadingState={loading}
          checkbox
        />
      </Box>
    </Box>
  );
}

export default CanvasTable;
