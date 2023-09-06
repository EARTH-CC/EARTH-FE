import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import procurementService from "services/procurement-service";

const style = {
  backgroundColor: (themeMode) =>
    themeMode.palette.mode === "dark" ? "#1f2a40" : "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80vh",
  width: "60vw",
  boxShadow: 24,
  p: 4,
};

export default function PurchaseRequestModal({
  data,
  open,
  handleClose,
  onPRChange,
}) {
  const [items, setItems] = React.useState([]);
  const [localPR, setLocalPR] = useState(data);

  const handleGetAll = () => {
    procurementService.getAllAPI("product").then((e) => {
      setItems(e);
    });
  };

  const handleAddPR = () => {
    const newPR = [
      ...localPR,
      {
        item_code: "",
        attention: "",
        quantity: "",
        price: "",
        total_amount: "",
        remarks: "",
      },
    ];
    setLocalPR(newPR);
    onPRChange(newPR);
  };
  const handleDeletePR = (index) => {
    const newPR = [...localPR];
    newPR.splice(index, 1);
    setLocalPR(newPR);
    onPRChange(newPR);
  };

  const handleChangePRType = (index, event) => {
    const newPR = [...localPR];
    newPR[index].description = event.target.value;
    setLocalPR(newPR);
    onPRChange(newPR);
  };

  const handleChangePRAmount = (index, event) => {
    const newPR = [...localPR];
    newPR[index].value = event.target.value;
    setLocalPR(newPR);
    onPRChange(newPR);
  };

  React.useEffect(() => {
    handleGetAll();
    setLocalPR(data);
  }, [data]);

  const handleDisplayItemName = (itemCode) => {
    const foundItem = items.find((item) => item.item_code === itemCode);
    return foundItem ? foundItem.name : "Unexisting";
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <Box sx={style}>
        <Box mb={4}>
          <Typography variant="h3" fontWeight="bolder" my={2}>
            Purchase Request
          </Typography>
          <IconButton variant="contained" color="info" onClick={handleAddPR}>
            <AddCircleIcon fontSize="large" color="success" sx={{ pl: 0 }} />
            Add Item
          </IconButton>
        </Box>
        {data?.map((item, index) => (
          <Box>
            <Grid
              sx={{
                display: "flex",
                mx: "2vw",
                justifyContent: "space-between",
                pb: 4,
              }}
            >
              <Grid sx={{ textAlign: "center" }}>
                <IconButton
                  variant="contained"
                  color="info"
                  onClick={() => handleDeletePR(index)}
                  sx={{ mr: 2 }}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "15vw",
                }}
              >
                <Typography>{handleDisplayItemName(item.item_code)}</Typography>
              </Grid>
              <Grid sx={{ textAlign: "center", width: "15vw" }}>
                <TextField
                  type="text"
                  size="small"
                  label="Attention"
                  value={item.attention}
                  onChange={(event) => handleChangePRType(index, event)}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ textAlign: "center", width: "15vw" }}>
                <TextField
                  type="number"
                  size="small"
                  label="Quantity"
                  value={item.quantity}
                  onChange={(event) => handleChangePRType(index, event)}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ textAlign: "center", width: "15vw" }}>
                <TextField
                  type="number"
                  size="small"
                  label="Price"
                  value={item.price}
                  onChange={(event) => handleChangePRType(index, event)}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ textAlign: "center", width: "15vw" }}>
                <TextField
                  type="number"
                  size="small"
                  label="Total Amount"
                  value={item.total_amount}
                  onChange={(event) => handleChangePRType(index, event)}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ textAlign: "center", width: "15vw" }}>
                <TextField
                  type="number"
                  size="small"
                  label="Remarks"
                  value={item.remarks}
                  onChange={(event) => handleChangePRAmount(index, event)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        ))}
        <Typography sx={{ mt: 4, mx: "10vw", textAlign: "right" }}>
          Total Items:&nbsp;{" "}
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {data?.reduce((total, item) => total + Number(item.total_amount), 0)}
        </Typography>
      </Box>
    </Modal>
  );
}

PurchaseRequestModal.defaultProps = {
  data: [],
  handleClose: () => {},
  onPRChange: () => {},
};

PurchaseRequestModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  onPRChange: PropTypes.func,
};
