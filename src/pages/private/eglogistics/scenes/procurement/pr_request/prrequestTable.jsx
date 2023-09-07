/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React, { useState } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";
import mockData from "../../../../../../data/mockData";
// import procurementService from "services/procurement-service";

const { mockPurchaseRequest } = mockData;

export default function PurchaseRequestTable({ getData }) {
  const [data, setData] = useState();

  getData(data);

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
      field: "company_name",
      headerName: "COMPANY NAME",
      flex: 1,
    },
    {
      field: "address",
      headerName: "ADDRESS",
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
      <DataGrid
        data={mockPurchaseRequest}
        columns={columns}
        checkbox={true}
        selectedData={setData}
      />
    </Box>
  );
}

PurchaseRequestTable.defaultProps = {
  getData: () => {},
};

PurchaseRequestTable.propTypes = {
  getData: PropTypes.func,
};
