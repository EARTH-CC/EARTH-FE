/* eslint-disable react/forbid-prop-types */
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { darken, lighten, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import themes from "../../../themes/theme";

const { tokens } = themes;

export default function DataGridTable({
  data,
  columns,
  loadingState,
  checkbox,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleRowSelect = (ids) => {
    const selectedRows = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const selectedId of ids) {
      // Find the row with the matching ID and push it to the selectedRows array
      const selectedRow = data.find((row) => row.uuid === selectedId);
      if (selectedRow) {
        selectedRows.push(selectedRow);
      }
    }

    // Log the selected rows
    console.log(selectedRows);
  };

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
        height="100%"
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
        pageSizeOptions={[10, 20, 30, 40, 50]}
        initialState={{
          pinnedColumns: { left: ["name"], right: ["actions"] },
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        checkboxSelection={checkbox}
        loading={loadingState}
        onRowSelectionModelChange={handleRowSelect}
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
  checkbox: false,
};

DataGridTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  // moduleName: PropTypes.string,
  loadingState: PropTypes.bool,
  checkbox: PropTypes.bool,
  // dataReload: PropTypes.func,
};
