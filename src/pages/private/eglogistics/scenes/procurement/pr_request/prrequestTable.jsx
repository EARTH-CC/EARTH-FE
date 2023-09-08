/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";

export default function PurchaseRequestTable({
  PRData,
  getData,
  loadingState,
}) {
  const [data, setData] = useState();

  getData(data);

  const columns = [
    {
      field: "uuid",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "company_name",
      headerName: "COMPANY NAME",
      flex: 1,
    },
    {
      field: "attention",
      headerName: "ATTENTION",
      flex: 1,
    },
    {
      field: "item_code",
      headerName: "ITEM CODE",
      flex: 1,
    },
    {
      field: "description",
      headerName: "DESCRIPTION",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      flex: 1,
    },
    {
      field: "price",
      headerName: "PRICE",
      flex: 1,
    },
    {
      field: "total_amount",
      headerName: "SUBTOTAL",
      flex: 1,
    },
  ];

  return (
    <Box>
      <DataGrid
        data={PRData}
        columns={columns}
        checkbox={true}
        selectedData={setData}
        loadingState={loadingState}
        height="60vh"
      />
    </Box>
  );
}

PurchaseRequestTable.defaultProps = {
  PRData: [],
  getData: () => {},
  loadingState: false,
};

PurchaseRequestTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  PRData: PropTypes.array,
  getData: PropTypes.func,
  loadingState: PropTypes.bool,
};
