import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import PRItem, { initialPRItem } from "validation/procurement-item";
import procurementService from "services/procurement-service";

const style = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "70vh",
  width: "60vw",
  boxShadow: 24,
  p: 2,
};

export default function AddItemModal({ open, handleClose }) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialPRItem,

    validationSchema: PRItem,
    onSubmit: () => {
      setError("");
      setLoading(true);
      procurementService
        .addEmployee(formik.values)
        .then(() => {
          formik?.resetForm();
          //   onSuccess?.();
        })
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

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
              Add Procurement Item
            </Typography>
          </Box>
          <Box mx={2}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={formik.touched?.name && Boolean(formik.errors?.name)}
                  helperText={formik.touched?.name && formik.errors?.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Type"
                  name="type"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={formik.touched?.type && Boolean(formik.errors?.type)}
                  helperText={formik.touched?.type && formik.errors?.type}
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
                  name="qty"
                  type="number"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.qty}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={formik.touched?.qty && Boolean(formik.errors?.qty)}
                  helperText={formik.touched?.qty && formik.errors?.qty}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Unit"
                  name="unit"
                  type="number"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.unit}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={formik.touched?.unit && Boolean(formik.errors?.unit)}
                  helperText={formik.touched?.unit && formik.errors?.unit}
                />
              </Grid>
            </Grid>
          </Box>

          {error}
          {open && (
            <Box sx={{ textAlign: "right", height: 100 }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mr: 2, mt: 5, width: 80 }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ mr: 2, mt: 5, width: 80 }}
              >
                Save
              </Button>
            </Box>
          )}
        </form>
      </Box>
    </Modal>
  );
}

AddItemModal.defaultProps = {
  handleClose: () => {},
  //   onSuccess: () => {},
};

AddItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  //   onSuccess: PropTypes.func,
};
