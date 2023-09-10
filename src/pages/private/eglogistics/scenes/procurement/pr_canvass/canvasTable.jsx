import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Divider, Typography } from "@mui/material";
import procurementService from "../../../../../../services/procurement-service";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";

function CanvasTable({ selectedData, reset }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState();

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

  useEffect(() => {
    selectedData(data);
  }, [data]);

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
      <Box>
        <DataGrid
          data={items}
          columns={columns}
          loadingState={loading}
          checkbox
          selectedData={setData}
          reset={reset}
        />
      </Box>
    </Box>
  );
}

export default CanvasTable;

CanvasTable.defaultProps = {
  selectedData: [],
  reset: false,
};

CanvasTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selectedData: PropTypes.arrayOf(PropTypes.object),
  reset: PropTypes.bool,
};
