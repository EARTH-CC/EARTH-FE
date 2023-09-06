import React from "react";
import PropTypes from "prop-types";
import DataGridTable from "components/PrivateComponents/eglogistics/DataGrid";
import {
  Box,
  Modal,
  // useTheme,
} from "@mui/material";
// import themes from "../../themes/theme";

const style = {
  backgroundColor: (themeMode) =>
    themeMode.palette.mode === "dark" ? "#1f2a40" : "#fff",
  position: "absolute",
  top: "50%",
  left: "57%",
  transform: "translate(-50%, -50%)",
  height: "80vh",
  width: "80vw",
  boxShadow: 24,
  p: 4,
};

// const { tokens } = themes;

export default function CanvassCart({ open, handleClose }) {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // const moduleName = "canvass";

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        // setError("");
      }}
    >
      <Box sx={style}>
        Canvass Cart
        <DataGridTable />
      </Box>
    </Modal>
  );
}

CanvassCart.defaultProps = {
  handleClose: () => {},
  // onSuccess: () => {},
};

CanvassCart.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  // onSuccess: PropTypes.func,
};
