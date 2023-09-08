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
  height: "auto",
  width: "auto",
  boxShadow: 24,
  p: 4,
};

export default function PurchaseRequestModal({
  data,
  open,
  handleClose,
  onPRChange,
  setPRValues,
  onSubmit,
  error,
}) {
  const [items, setItems] = React.useState([]);
  const [compName, setCompName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [attention, setAttention] = React.useState("");
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
        name: "",
        item_code: "",
        description: "",
        quantity: "",
        price: "",
        product_id: "",
        brand_id: "",
        supplier_id: "",
        category_id: "",
      },
    ];

    // Create a modified version of newPR without the 'name' field
    const newPRWithoutName = newPR.map((item) => {
      // Create a new object without the 'name' field
      const { name, ...itemWithoutName } = item;
      return itemWithoutName;
    });

    const PRValue = {
      company_name: compName,
      address,
      remarks,
      attention,
      items: newPRWithoutName,
    };

    setLocalPR(newPR);
    onPRChange(newPR);
    setPRValues(PRValue);
  };

  const handleDeletePR = (index) => {
    const newPR = [...localPR];
    newPR.splice(index, 1);

    // Create a modified version of newPR without the 'name' field
    const newPRWithoutName = newPR.map((item) => {
      // Create a new object without the 'name' field
      const { name, ...itemWithoutName } = item;
      return itemWithoutName;
    });

    const PRValue = {
      company_name: compName,
      address,
      remarks,
      attention,
      items: newPRWithoutName,
    };

    setLocalPR(newPR);
    onPRChange(newPR);
    setPRValues(PRValue);
  };

  const handleChangeItem = (index, evt) => {
    const newPR = [...localPR];
    newPR[index].item_code = evt || null;

    const foundItem = items.find((item) => item.item_code === evt);

    newPR[index].name = foundItem?.name || null;
    newPR[index].price = foundItem?.price || null;
    newPR[index].product_id = foundItem?.uuid || null;
    newPR[index].brand_id = foundItem?.brand_id || null;
    newPR[index].supplier_id = foundItem?.supplier_id || null;
    newPR[index].category_id = foundItem?.category_id || null;

    // Create a modified version of newPR without the 'name' field
    const newPRWithoutName = newPR.map((item) => {
      // Create a new object without the 'name' field
      const { name, ...itemWithoutName } = item;
      return itemWithoutName;
    });

    const PRValue = {
      company_name: compName,
      address,
      remarks,
      attention,
      items: newPRWithoutName,
    };

    setLocalPR(newPR);
    onPRChange(newPR);
    setPRValues(PRValue);
  };

  const handleChangeDesc = (index, event) => {
    const newPR = [...localPR];
    newPR[index].description = event.target.value;

    // Create a modified version of newPR without the 'name' field
    const newPRWithoutName = newPR.map((item) => {
      // Create a new object without the 'name' field
      const { name, ...itemWithoutName } = item;
      return itemWithoutName;
    });

    const PRValue = {
      company_name: compName,
      address,
      remarks,
      attention,
      items: newPRWithoutName,
    };

    setLocalPR(newPR);
    onPRChange(newPR);
    setPRValues(PRValue);
  };

  const handleChangeQty = (index, event) => {
    const newPR = [...localPR];
    newPR[index].quantity = event.target.value;

    // Create a modified version of newPR without the 'name' field
    const newPRWithoutName = newPR.map((item) => {
      // Create a new object without the 'name' field
      const { name, ...itemWithoutName } = item;
      return itemWithoutName;
    });

    const PRValue = {
      company_name: compName,
      address,
      remarks,
      attention,
      items: newPRWithoutName,
    };

    setLocalPR(newPR);
    onPRChange(newPR);
    setPRValues(PRValue);
  };

  React.useEffect(() => {
    handleGetAll();
    setLocalPR(data);
  }, [data]);

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
        <Grid container spacing={2} px={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
              size="small"
              label="Company Name"
              value={compName}
              onChange={(event) => setCompName(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              size="small"
              label="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              size="small"
              label="Remarks"
              value={remarks}
              onChange={(event) => setRemarks(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              size="small"
              label="Attention"
              value={attention}
              onChange={(event) => setAttention(event.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box
          height="20vh"
          minWidth="50vw"
          mt={4}
          p={2}
          sx={{ overflowY: "scroll" }}
        >
          {data.map((item, index) => (
            <Grid container spacing={2} pb={4}>
              <Grid item xs={1} sx={{ textAlign: "center" }}>
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
                  value={item.name || null}
                  onChange={(fieldName, selectedValue) => {
                    handleChangeItem(index, selectedValue);
                  }}
                  width="100%"
                  pr={0}
                />
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center", width: "15vw" }}>
                <TextField
                  size="small"
                  label="Description"
                  value={item.description}
                  onChange={(event) => handleChangeDesc(index, event)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "center", width: "15vw" }}>
                <TextField
                  type="number"
                  size="small"
                  label="Qty"
                  value={item.quantity}
                  onChange={(event) => handleChangeQty(index, event)}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  textAlign: "center",
                  width: "15vw",
                }}
              >
                <TextField
                  size="small"
                  label="Price"
                  value={item.price || "Not yet specified"}
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}
        </Box>

        <Box sx={{ textAlign: "right", p: 2 }}>
          <Typography sx={{ fontSize: "15px" }}>
            Total Amount: <br />{" "}
            <b>
              {data?.reduce((total, item) => total + Number(item.price), 0)}
            </b>
          </Typography>
        </Box>
        {open && (
          <Box sx={{ textAlign: "right", height: 100 }}>
            <Button
              variant="contained"
              disabled={data.length === 0}
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
  setPRValues: () => {},
  onSubmit: () => {},
  error: "",
};

PurchaseRequestModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  onPRChange: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  setPRValues: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.string,
};
