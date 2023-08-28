import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function LibraryTextfield({ label }) {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </div>
  );
}

export default LibraryTextfield;

LibraryTextfield.defaultProps = {
  label: "",
};

LibraryTextfield.propTypes = {
  label: PropTypes.string,
};
