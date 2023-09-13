/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import procurementService from "services/procurement-service";
import DataGrid from "components/PrivateComponents/eglogistics/Tables/DataGrid";

export default function PurchaseOrderTable() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const modulename = "purchase";

  const handleGetAll = () => {
    setLoading(true);
    procurementService
      .getAllAPI(modulename, "order")
      .then((e) => {
        setItems(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetAll();
  }, []);

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
      field: "uuid",
      headerName: "PR No.",
      flex: 1,
    },
    {
      field: "purchase_order_no",
      headerName: "PO No.",
      flex: 1,
    },
    {
      field: "company_name_supplier",
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
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "unit_price",
      headerName: "Price",
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
      <DataGrid
        data={items}
        columns={columns}
        loadingState={loading}
        height="72.4vh"
      />
    </Box>
  );
}
