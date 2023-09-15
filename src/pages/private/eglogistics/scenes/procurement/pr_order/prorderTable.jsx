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

  const columns = [
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "due_date",
      headerName: "Due Date",
      flex: 1,
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
