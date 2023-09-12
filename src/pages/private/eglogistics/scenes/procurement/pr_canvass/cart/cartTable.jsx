/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import EditableTable from "components/PrivateComponents/eglogistics/Tables/EditableTable";

export default function CartTable({ cartData, selectedData, loadingState }) {
  const [data, setData] = useState();

  selectedData(data);

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
      field: "brand",
      headerName: "Brand",
      flex: 0.5,
    },
    {
      field: "supplier",
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
    {
      field: "quantity",
      headerName: "Quantity",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
      type: "number",
      editable: true,
    },
  ];

  return (
    <Box>
      <EditableTable
        data={cartData}
        columns={columns}
        checkbox={true}
        selectedData={setData}
        loadingState={loadingState}
        height="60vh"
      />
    </Box>
  );
}

CartTable.defaultProps = {
  cartData: [],
  selectedData: () => {},
  loadingState: false,
};

CartTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cartData: PropTypes.array,
  selectedData: PropTypes.func,
  loadingState: PropTypes.bool,
};
