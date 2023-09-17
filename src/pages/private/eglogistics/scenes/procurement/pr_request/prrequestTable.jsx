/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import EditableTable from "components/PrivateComponents/eglogistics/Tables/EditableTable";

// Function to format a date to "MM-DD-YY" format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString(); // Get the last two digits of the year
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}-${day}-${year}`;
};

export default function PurchaseRequestTable({
  data,
  selectedData,
  loadingState,
}) {
  const [selectedPR, setSelectedPR] = useState();

  selectedData(selectedPR);

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
      headerName: "Company Name",
      flex: 1,
    },
    {
      field: "item_count",
      headerName: "Items",
      flex: 1,
    },
    {
      field: "total_amount",
      headerName: "Total Amount",
      flex: 1,
      valueFormatter: ({ value }) => currencyFormatter.format(value),
    },
    {
      field: "attention",
      headerName: "Attention",
      flex: 1,
      editable: true,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      flex: 1,
      editable: true,
    },
    {
      field: "pr_status",
      headerName: "Status",
      flex: 1,
      editable: true,
    },
  ];

  return (
    <Box>
      <EditableTable
        data={data}
        columns={columns}
        checkbox={true}
        selectedData={setSelectedPR}
        loadingState={loadingState}
        singleSelect={true}
        height="60vh"
        remove
        view
      />
    </Box>
  );
}

PurchaseRequestTable.defaultProps = {
  data: [],
  selectedData: () => {},
  loadingState: false,
};

PurchaseRequestTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  selectedData: PropTypes.func,
  loadingState: PropTypes.bool,
};
