import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import procurementService from "services/procurement-service";
import SelectItem from "components/PrivateComponents/eglogistics/Textfields/SelectItem";

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
  onSubmit,
  error,
}) {
  const [items, setItems] = React.useState([]);
  const [localPR, setLocalPR] = React.useState(data);

  const handleGetAll = () => {
    procurementService.getAllAPI("product").then((e) => {
      setItems(e);
    });
  };

  const handleAddPR = () => {
    const newPR = [
      ...localPR,
      {
        attention: "",
        item_name: "",
        item_code: "",
        description: "",
        quantity: "",
        price: "",
      },
    ];
    setLocalPR(newPR);
    onPRChange(newPR);
    // eslint-disable-next-line no-param-reassign
    error = "";
  };
  const handleDeletePR = (index) => {
    const newPR = [...localPR];
    newPR.splice(index, 1);
    setLocalPR(newPR);
    onPRChange(newPR);
  };

  const handleChangeAttention = (index, event) => {
    const newPR = [...localPR];
    newPR[index].attention = event.target.value;
    setLocalPR(newPR);
    onPRChange(newPR);
  };

  const handleChangeItem = (index, evt) => {
    const newPR = [...localPR];
    newPR[index].item_code = evt || null;

    const foundItem = items.find((item) => item.item_code === evt);
    newPR[index].item_name = foundItem?.name || null;
    newPR[index].price = foundItem?.price || null;

    setLocalPR(newPR);
    onPRChange(newPR);
  };

  const handleChangeDesc = (index, event) => {
    const newPR = [...localPR];
    newPR[index].description = event.target.value;
    setLocalPR(newPR);
    onPRChange(newPR);
  };

  const handleChangeQty = (index, event) => {
    const newPR = [...localPR];
    newPR[index].quantity = event.target.value;
    setLocalPR(newPR);
    onPRChange(newPR);
  };

  React.useEffect(() => {
    handleGetAll();
    setLocalPR(data);
  }, [data]);

  // const handleDisplayItemName = (itemCode) => {
  //   const foundItem = items.find((item) => item.item_code === itemCode);
  //   return foundItem ? foundItem.name : "Unexisting";
  // };

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
          {error}
        </Box>
        <Box mb={4}>
          <Button variant="contained" color="info" onClick={handleAddPR}>
            <AddIcon sx={{ mr: 1 }} />
            Add Item
          </Button>
        </Box>
        {data?.map((item, index) => (
          <Grid container spacing={2} pb={4}>
            <Grid item xs={0.5} sx={{ textAlign: "center" }}>
              <IconButton
                variant="contained"
                color="info"
                onClick={() => handleDeletePR(index)}
                sx={{ mr: 2 }}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "center", width: "15vw" }}>
              <SelectItem
                label="Select Item"
                name="item"
                value={item.item_name || null}
                onChange={(fieldName, selectedValue) => {
                  handleChangeItem(index, selectedValue);
                }}
                width="100%"
                pr={0}
              />
            </Grid>
            <Grid item xs={2} sx={{ textAlign: "center", width: "15vw" }}>
              <TextField
                type="text"
                size="small"
                label="Attention"
                value={item.attention}
                onChange={(event) => handleChangeAttention(index, event)}
                fullWidth
              />
            </Grid>
            <Grid item xs={3.5} sx={{ textAlign: "center", width: "15vw" }}>
              <TextField
                size="small"
                label="Description"
                value={item.description}
                onChange={(event) => handleChangeDesc(index, event)}
                fullWidth
              />
            </Grid>
            <Grid item xs={1} sx={{ textAlign: "center", width: "15vw" }}>
              <TextField
                type="number"
                size="small"
                label="Qty"
                value={item.quantity}
                onChange={(event) => handleChangeQty(index, event)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2} sx={{ textAlign: "center", width: "15vw" }}>
              <TextField
                type="number"
                size="small"
                label="Price"
                value={item.price}
                fullWidth
              />
            </Grid>
          </Grid>
        ))}
        <Typography sx={{ mt: 4, mx: "10vw", textAlign: "right" }}>
          Total Items:&nbsp;{" "}
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {data?.reduce((total, item) => total + Number(item.price), 0)}
        </Typography>
        {open && (
          <Box sx={{ textAlign: "right", height: 100 }}>
            <Button
              variant="contained"
              disabled={!data}
              onClick={onSubmit}
              sx={{ mr: 2, mt: 5, width: 80, backgroundColor: "#6b70c4" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{
                mr: 2,
                mt: 5,
                width: 80,
                backgroundColor: "#3e4287",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

PurchaseRequestModal.defaultProps = {
  data: [],
  handleClose: () => {},
  onPRChange: () => {},
  onSubmit: () => {},
  error: "",
};

PurchaseRequestModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  onPRChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.string,
};
