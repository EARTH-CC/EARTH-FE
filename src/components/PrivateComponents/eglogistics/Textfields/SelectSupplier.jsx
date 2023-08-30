import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import procurementService from "services/procurement-service";
import PropTypes from "prop-types";
import { FormHelperText } from "@mui/material";

export default function SelectSupplier({
  label,
  name,
  value,
  onChange,
  error,
  helperText,
}) {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const moduleName = "supplier";

  const handleGetAll = () => {
    setLoading(true);
    procurementService
      .getAllAPI(moduleName)
      .then((e) => {
        setSuppliers(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetAll();
  }, []);

  return (
    <Box>
      <FormControl
        error={error}
        disabled={loading}
        size="small"
        sx={{
          backgroundColor: (themeMode) =>
            themeMode.palette.mode === "dark" ? "#2e3442" : "#fff",
          width: "60%",
        }}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          name={name}
          value={value}
          onChange={(newValue) => {
            onChange?.(newValue);
          }}
        >
          {suppliers.map((supplier) => (
            <MenuItem key={supplier.uuid} value={supplier.uuid}>
              {supplier.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}

SelectSupplier.defaultProps = {
  label: "",
  name: "",
  value: "",
  onChange: () => {},
  error: false,
  helperText: "",
};
// Typechecking props of the MDAlert
SelectSupplier.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};
