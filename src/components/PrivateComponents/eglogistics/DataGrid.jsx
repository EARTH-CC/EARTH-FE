/* eslint-disable react/forbid-prop-types */
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { darken, lighten, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import themes from "../../../themes/theme";

const { tokens } = themes;

export default function DataGridTable({ data, columns, loadingState }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      height="70vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.blueAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          color: colors.grey[900],
          backgroundColor: colors.blueAccent[300],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.primary[400],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.blueAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
        marginTop: "5px",
      }}
    >
      <DataGrid
        getRowId={(row) => row.uuid || row.id}
        rows={data}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pinnedColumns: { left: ["name"], right: ["actions"] },
        }}
        loading={loadingState}
      />
    </Box>
  );
}

DataGridTable.defaultProps = {
  data: [],
  columns: [],
  // moduleName: "",
  loadingState: false,
  // dataReload: () => {},
};

DataGridTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  // moduleName: PropTypes.string,
  loadingState: PropTypes.bool,
  // dataReload: PropTypes.func,
};
