import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
  // useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import PRItem, { initialPRItem } from "validation/procurement-item";
import procurementService from "services/procurement-service";
import TextFieldDatePicker from "components/PrivateComponents/eglogistics/Textfields/Datepicker";
import dayjs from "dayjs";
// import themes from "../../themes/theme";

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

// const { tokens } = themes;

export default function AddItemModal({ open, handleClose, onSuccess }) {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialPRItem,

    validationSchema: PRItem,
    onSubmit: () => {
      setError("");
      setLoading(true);
      procurementService
        .addItem({ added_by: 1, ...formik.values })
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

  const handleDate = (evt) => {
    const date = dayjs(evt).format("YYYY/MM/DD");
    formik?.setFieldValue("date", dayjs(date).format("YYYY-MM-DD"), true);
  };

  console.log(formik.values);

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
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          style={{ zIndex: 1 }}
        >
          <Box mb={4}>
            <Typography variant="h3" fontWeight="bolder" my={2}>
              Add Procurement Item
            </Typography>
          </Box>
          <Box mx={2}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  label="Name"
                  name="item_name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.item_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.item_name &&
                    Boolean(formik.errors?.item_name)
                  }
                  helperText={
                    formik.touched?.item_name && formik.errors?.item_name
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Type"
                  name="item_type"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.item_type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.item_type &&
                    Boolean(formik.errors?.item_type)
                  }
                  helperText={
                    formik.touched?.item_type && formik.errors?.item_type
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Item Code"
                  name="item_code"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ pr: 5 }}
                  disabled={loading}
                  value={formik.values?.item_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBLur}
                  error={
                    formik.touched?.item_code &&
                    Boolean(formik.errors?.item_code)
                  }
                  helperText={
                    formik.touched?.item_code && formik.errors?.item_code
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
                <TextFieldDatePicker
                  label="Date"
                  value={formik?.values?.date}
                  onChange={handleDate}
                  format="MM/DD/YYYY"
                  maxDate={new Date()}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                  sx={{ pr: 5 }}
                  fullWidth
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

AddItemModal.defaultProps = {
  handleClose: () => {},
  onSuccess: () => {},
};

AddItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  onSuccess: PropTypes.func,
};
