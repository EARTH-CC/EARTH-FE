import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import AddItemModal from "modal/Procurement/AddItemModal";
import DataGrid from "../../../../../../components/PrivateComponents/eglogistics/DataGrid";
import mockData from "../../../../../../data/mockData";

const { mockDataItems } = mockData;

function CanvasTable() {
  const [openItemModal, setOpenItemModal] = useState(false);

  const handleCloseItem = () => {
    setOpenItemModal(false);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "qty",
      headerName: "Quantity",
      flex: 0.5,
    },
    {
      field: "unit",
      headerName: "Unit",
      flex: 0.5,
    },
  ];

  return (
    <Box sx={{ m: "15px 20px 20px 20px" }}>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
          }}
        >
          Item Supplies
        </Typography>
      </Divider>
      <AddItemModal
        open={openItemModal}
        handleClose={handleCloseItem}
        onSuccess={() => {
          setOpenItemModal(false);
          // handleSearch();
        }}
      />
      <Box>
        <DataGrid data={mockDataItems} columns={columns} />
      </Box>
    </Box>
  );
}

export default CanvasTable;
