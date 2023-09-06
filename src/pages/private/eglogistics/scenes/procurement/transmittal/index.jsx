import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

const rows = [
  { id: 1, firstName: "John", lastName: "Doe", age: 30 },
  { id: 2, firstName: "Jane", lastName: "Doe", age: 25 },
  { id: 3, firstName: "Bob", lastName: "Smith", age: 40 },
  // Add more rows as needed
];

export default function DataGridWithSelection() {
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const handleRowSelection = (selection) => {
    setSelectedRowIds(selection);
  };

  const handleViewButtonClick = () => {
    if (selectedRowIds.length > 0) {
      const selectedRows = selectedRowIds.map((id) =>
        rows.find((row) => row.id === id)
      );
      console.log("Selected Row Data:", selectedRows);
    } else {
      console.log("No row selected.");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(selection) => handleRowSelection(selection)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleViewButtonClick}
      >
        View
      </Button>
    </div>
  );
}
