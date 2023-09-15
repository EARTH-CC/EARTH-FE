import { Box } from "@mui/material";
import PropTypes from "prop-types";
import EditableTable from "components/PrivateComponents/eglogistics/Tables/EditableTable";

export default function TransmittalTable({
  data,
  //   selectedData,
  loadingState,
}) {
  const columns = [
    { field: "date", headerName: "Date", flex: 1, editable: true },
    {
      field: "billing_date",
      headerName: "Billing Date",
      flex: 1,
      editable: true,
    },
    { field: "tf_code", headerName: "TF No.", flex: 1, editable: true },
    {
      field: "company_name",
      headerName: "Company Name",
      flex: 1,
      editable: true,
    },
    {
      field: "item_count",
      headerName: "Item Count",
      flex: 1,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    { field: "purpose", headerName: "Purpose", flex: 1, editable: true },
    { field: "remarks", headerName: "Remarks", flex: 1, editable: true },
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
