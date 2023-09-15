import { Box } from "@mui/material";
import PropTypes from "prop-types";
import EditableTable from "components/PrivateComponents/eglogistics/Tables/EditableTable";

export default function TransmittalTable({
  data,
  //   selectedData,
  loadingState,
}) {
  const columns = [
    { field: "company_name", headerName: "NAME", width: 180, editable: true },
    {
      field: "address",
      headerName: "ADDRESS",
      type: "number",
      width: 80,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
  ];

  return (
    <Box>
      <EditableTable
        data={data}
        columns={columns}
        checkbox
        // selectedData={setData}
        loadingState={loadingState}
        singleSelect
        height="72.4vh"
      />
    </Box>
  );
}

TransmittalTable.defaultProps = {
  data: [],
  //   selectedData: () => {},
  loadingState: false,
};

TransmittalTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  //   selectedData: PropTypes.func,
  loadingState: PropTypes.bool,
};
