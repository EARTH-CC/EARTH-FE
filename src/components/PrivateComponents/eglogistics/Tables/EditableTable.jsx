import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbar,
} from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import themes from "../../../../themes/theme";

const { tokens } = themes;

export default function EditableTable({
  data,
  columns,
  loadingState,
  checkbox,
  height,
  showSearch,
  //   selectedData,
  //   reset,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rows, setRows] = useState(data);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      // eslint-disable-next-line no-param-reassign
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (uuid) => () => {
    setRowModesModel({ ...rowModesModel, [uuid]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (uuid) => () => {
    setRowModesModel({ ...rowModesModel, [uuid]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (uuid) => () => {
    setRows(rows.filter((row) => row.uuid !== uuid));
  };

  const handleCancelClick = (uuid) => () => {
    setRowModesModel({
      ...rowModesModel,
      [uuid]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.uuid === uuid);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.uuid !== uuid));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.uuid === newRow.uuid ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columnsAction = [
    ...columns,
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <Box
      height={height}
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
        rows={rows}
        columns={columnsAction}
        editMode="row"
        checkboxSelection={checkbox}
        loading={loadingState}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: showSearch,
            quickFilterProps: { debounceMs: 500 },
            setRows,
            setRowModesModel,
          },
        }}
        height="100%"
      />
    </Box>
  );
}

EditableTable.defaultProps = {
  data: [],
  columns: [],
  loadingState: false,
  checkbox: false,
  height: "70vh",
  showSearch: true,
  //   selectedData: [],
  //   reset: false,
};

EditableTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.arrayOf(PropTypes.object),
  loadingState: PropTypes.bool,
  checkbox: PropTypes.bool,
  height: PropTypes.string,
  showSearch: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  //   selectedData: PropTypes.arrayOf(PropTypes.object),
  //   reset: PropTypes.bool,
};
