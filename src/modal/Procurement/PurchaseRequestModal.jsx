import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import PRRequest, { initialPRRequest } from "validation/pr-request";
import procurementService from "services/procurement-service";
import SelectItem from "components/PrivateComponents/eglogistics/Textfields/SelectItem";
import TextFieldDatePicker from "components/PrivateComponents/eglogistics/Textfields/Datepicker";
import dayjs from "dayjs";

const style = {
  backgroundColor: (themeMode) =>
    themeMode.palette.mode === "dark" ? "#1f2a40" : "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "70vh",
  width: "60vw",
  boxShadow: 24,
  p: 4,
};

export default function PurchaseRequestModal({ open, handleClose, onSuccess }) {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const moduleName = "purchaseRequest";

  const handleGetProducts = () => {
    setLoading(true);
    procurementService
      .getAllAPI("product")
      .then((e) => {
        setItems(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues: initialPRRequest,

    validationSchema: PRRequest,
    onSubmit: () => {
      setError("");
      setLoading(true);
      procurementService
        .addAPI(formik.values, moduleName)
        .then(() => {
          formik?.resetForm();
          onSuccess?.();
        })
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    const selectedItem = items.find(
      (item) => item.item_code === formik.values.item_code
    );

    formik?.setFieldValue("company_name", selectedItem?.supplier_company);
    formik?.setFieldValue("address", selectedItem?.supplier_address);
  }, [formik.values.item_code]);

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        formik.resetForm();
        setError("");
      }}
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Box mb={4}>
            <Typography variant="h3" fontWeight="bolder" my={2}>
              Add Supplier
            </Typography>
          </Box>
          <Box mx={2}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <SelectItem
                  label="Select Item"
                  name="item_code"
                  disabled={loading}
                  value={formik.values.item_code}
                  onChange={(fieldName, selectedValue) => {
                    formik.setFieldValue(fieldName, selectedValue);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.item_code && Boolean(formik.errors.item_code)
                  }
                  helperText={
                    (formik.touched.item_code && formik.errors.item_code) || ""
                  }
                  width="100%"
                  pr={5}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Company Name"
                  name="company_name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values.company_name}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.company_name &&
                    Boolean(formik.errors?.company_name)
                  }
                  helperText={
                    formik.touched?.company_name && formik.errors?.company_name
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Address"
                  name="address"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.address}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.address && Boolean(formik.errors?.address)
                  }
                  helperText={formik.touched?.address && formik.errors?.address}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Attention"
                  name="attention"
                  variant="outlined"
                  size="small"
                  type="number"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.attention}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.attention &&
                    Boolean(formik.errors?.attention)
                  }
                  helperText={
                    formik.touched?.attention && formik.errors?.attention
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Description"
                  name="description"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.description &&
                    Boolean(formik.errors?.description)
                  }
                  helperText={
                    formik.touched?.description && formik.errors?.description
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  name="quantity"
                  variant="outlined"
                  size="small"
                  type="number"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.quantity && Boolean(formik.errors?.quantity)
                  }
                  helperText={
                    formik.touched?.quantity && formik.errors?.quantity
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Price"
                  name="price"
                  variant="outlined"
                  size="small"
                  type="number"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={formik.touched?.price && Boolean(formik.errors?.price)}
                  helperText={formik.touched?.price && formik.errors?.price}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Total Amount"
                  name="total_amount"
                  variant="outlined"
                  size="small"
                  type="number"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.total_amount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.total_amount &&
                    Boolean(formik.errors?.total_amount)
                  }
                  helperText={
                    formik.touched?.total_amount && formik.errors?.total_amount
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Remarks"
                  name="remarks"
                  variant="outlined"
                  size="small"
                  type="number"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.remarks}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.remarks && Boolean(formik.errors?.remarks)
                  }
                  helperText={formik.touched?.remarks && formik.errors?.remarks}
                />
              </Grid>
              <Grid item xs={6}>
                <TextFieldDatePicker
                  label="Date"
                  disabled={loading}
                  value={formik?.values?.date}
                  onChange={(evt) =>
                    formik?.setFieldValue(
                      "date",
                      dayjs(evt).format("YYYY-MM-DD"),
                      true
                    )
                  }
                  width="100%"
                  pr={5}
                  variant="outlined"
                  maxDate={new Date()}
                  error={
                    Boolean(formik.touched.date) && Boolean(formik.errors.date)
                  }
                  helperText={formik.touched.date && formik.errors.date}
                />
              </Grid>
            </Grid>
          </Box>

          {error}
          {open && (
            <Box sx={{ textAlign: "right", height: 100 }}>
              <Button
                type="submit"
                variant="contained"
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
        </form>
      </Box>
    </Modal>
  );
}

PurchaseRequestModal.defaultProps = {
  handleClose: () => {},
  onSuccess: () => {},
};

PurchaseRequestModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  onSuccess: PropTypes.func,
};
