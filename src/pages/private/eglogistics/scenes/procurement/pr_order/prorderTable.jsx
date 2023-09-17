/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

import EditableTable from "components/PrivateComponents/eglogistics/Tables/EditableTable";

export default function PurchaseOrderTable({
  data,
  selectedData,
  loadingState,
}) {
  const [selectedPO, setSelectedPO] = useState();

  selectedData(selectedPO);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  // Function to format a date to "MM-DD-YY" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString(); // Get the last two digits of the year
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}-${day}-${year}`;
  };

  const columns = [
    {
      field: "order_date",
      headerName: "Date",
      flex: 1,
      type: "date",
      valueFormatter: (params) => formatDate(params.value), // Format the date
    },
    {
      field: "order_due_date",
      headerName: "Due Date",
      flex: 1,
      type: "date",
      valueFormatter: (params) => formatDate(params.value), // Format the date
    },
    {
      field: "pr_code",
      headerName: "PR No.",
      flex: 1,
    },
    {
      field: "po_code",
      headerName: "PO No.",
      flex: 1,
    },
    {
      field: "or_code",
      headerName: "OR Code.",
      flex: 1,
    },
    {
      field: "company_name",
      headerName: "Company Name",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "terms_of_agreement",
      headerName: "Terms of Agreement",
      flex: 1,
      editable: true,
    },
    {
      field: "item_count",
      headerName: "Item Count",
      flex: 1,
    },
    {
      field: "total_amount",
      headerName: "Amount",
      flex: 1,
      valueFormatter: ({ value }) => currencyFormatter.format(value),
    },
    {
      field: "remarks",
      headerName: "Remarks",
      flex: 1,
    },
    {
      field: "po_status",
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
        loadingState={loadingState}
        singleSelect={true}
        selectedData={setSelectedPO}
        height="60vh"
        remove
        view
        form
      />
    </Box>
  );
}

PurchaseOrderTable.defaultProps = {
  data: [],
  selectedData: () => {},
  loadingState: false,
};

PurchaseOrderTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  selectedData: PropTypes.func,
  loadingState: PropTypes.bool,
};
