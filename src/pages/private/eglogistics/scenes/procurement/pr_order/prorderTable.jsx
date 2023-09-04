/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { Box } from "@mui/material";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";
import mockData from "../../../../../../data/mockData";
// import procurementService from "services/procurement-service";

const { mockPurchaseRequest } = mockData;

export default function PurchaseRequestTable() {
  //   const [items, setItems] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   const handleGetAll = () => {
  //     setLoading(true);
  //     procurementService
  //       .getAllAPI("product")
  //       .then((e) => {
  //         setItems(e);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };

  const columns = [
    {
      field: "uuid",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
    },
    {
      field: "due_date",
      headerName: "DUE DATE",
      flex: 1,
    },
    {
      field: "company_name_supplier",
      headerName: "COMPANY NAME SUPPLIER",
      flex: 1,
    },
    {
      field: "address",
      headerName: "ADDRESS",
      flex: 1,
    },
    {
      field: "terms_of_agreement",
      headerName: "TERMS OF AGREEMENT",
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
      headerName: "TOTAL AMOUNT",
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
      <DataGrid data={mockPurchaseRequest} columns={columns} checkbox={true} />
    </Box>
  );
}
