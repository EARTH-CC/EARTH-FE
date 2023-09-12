/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import DataGrid from "components/PrivateComponents/eglogistics/Tables/DataGrid";

// Function to format a date to "MM-DD-YY" format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString(); // Get the last two digits of the year
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}-${day}-${year}`;
};

export default function PurchaseRequestTable({
  PRData,
  selectedData,
  loadingState,
}) {
  const [data, setData] = useState();

  selectedData(data);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  const columns = [
    {
      field: "request_date",
      headerName: "Date",
      flex: 1,
      // editable: true,
      type: "date",
      valueFormatter: (params) => formatDate(params.value), // Format the date
    },
    {
      field: "pr_code",
      headerName: "PR No.",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "company_name",
      headerName: "COMPANY NAME",
      flex: 1,
    },
    {
      field: "item_count",
      headerName: "ITEMS",
      flex: 1,
    },
    {
      field: "total_amount",
      headerName: "AMOUNT",
      flex: 1,
      valueFormatter: ({ value }) => currencyFormatter.format(value),
    },
    {
      field: "attention",
      headerName: "ATTENTION",
      flex: 1,
    },
    {
      field: "remarks",
      headerName: "REMARKS",
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
        height="64.4vh"
      />
    </Box>
  );
}

PurchaseRequestTable.defaultProps = {
  PRData: [],
  selectedData: () => {},
  loadingState: false,
};

PurchaseRequestTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  PRData: PropTypes.array,
  selectedData: PropTypes.func,
  loadingState: PropTypes.bool,
};
