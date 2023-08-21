/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import ClearIcon from "@mui/icons-material/Clear";
import RoofingRoundedIcon from "@mui/icons-material/RoofingRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import DataGrid from "../../../../../components/PrivateComponents/eglogistics/DataGrid";
import DateField from "../../../../../components/PrivateComponents/eglogistics/Textfields/Datepicker";
import themes from "../../../../../themes/theme";
import mockData from "../../../../../data/mockData";
import Header from "../../../../../components/PrivateComponents/eglogistics/Header";

const { tokens } = themes;
const { mockPurchaseRequest } = mockData;

export default function PurchaseRequest() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "name",
      headerName: "NAME",
      headerClassName: "custom-header",
      cellClassName: "custom-cell",
      flex: 1,
    },
    {
      field: "setting",
      headerName: "SETTING",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { setting } }) => {
        const settingLength = setting.length;
        const dynamicWidth = `calc(${settingLength} * 5px + 65px)`; // You can adjust the multiplier to set the desired width

        return (
          <Box
            width={dynamicWidth}
            m="0 auto"
            // p="2px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="15px"
            border={`3px solid ${
              setting === "WFH"
                ? colors.greenAccent[600]
                : setting === "ON-SITE"
                ? colors.blueAccent[700]
                : colors.redAccent[700]
            }`}
          >
            {setting === "WFH" && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: "5px",
                }}
              >
                <RoofingRoundedIcon />
              </Box>
            )}
            {setting === "ON-SITE" && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: "5px",
                }}
              >
                <CorporateFareRoundedIcon />
              </Box>
            )}
            <span color={colors.grey[100]} style={{ ml: "5px" }}>
              {setting}
            </span>
          </Box>
        );
      },
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
    },
    {
      field: "clockin",
      headerName: "CLOCK IN",
      flex: 1,
    },
    {
      field: "clockout",
      headerName: "CLOCK OUT",
      flex: 1,
    },
    {
      field: "late",
      headerName: "LATE",
      flex: 1,
      renderCell: ({ row: { late } }) => (
        <span color={late !== "--:--:--" ? "red" : "null"}>{late}</span>
      ),
    },
    {
      field: "undertime",
      headerName: "UNDERTIME",
      flex: 1,
      renderCell: ({ row: { undertime } }) => (
        <span color={undertime !== "--:--:--" ? "#C95000" : "null"}>
          {undertime}
        </span>
      ),
    },
    {
      field: "overtime",
      headerName: "OVERTIME",
      flex: 1,
      renderCell: ({ row: { overtime } }) => (
        <span color={overtime !== "--:--:--" ? "#9100FF" : "null"}>
          {overtime}
        </span>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { status } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            status === "Present"
              ? colors.greenAccent[600]
              : status === "Overtime"
              ? colors.blueAccent[700]
              : status === "Late"
              ? colors.grey[700]
              : status === "Absent"
              ? colors.redAccent[700]
              : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {status === "Present" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: "5px",
                mt: "-3px",
              }}
            >
              <CheckIcon />
            </Box>
          )}
          {status === "Overtime" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: "5px",
                mt: "-3px",
              }}
            >
              <DoneAllIcon />
            </Box>
          )}
          {status === "Late" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: "5px",
                mt: "-3px",
              }}
            >
              <AlarmOnIcon />
            </Box>
          )}
          {status === "Absent" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: "5px",
                mt: "-3px",
              }}
            >
              <ClearIcon />
            </Box>
          )}
          <span color={colors.grey[100]} style={{ ml: "5px" }}>
            {status}
          </span>
        </Box>
      ),
    },
    // {
    //   field: "salary",
    //   headerName: "salary",
    //   flex: 1,
    //   renderCell: (params) => (
    //     <Typography color={colors.greenAccent[500]}>
    //       ₱{params.row.cost}
    //     </Typography>
    //   ),
    // },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="-15px"
      >
        <Header title="Purchase Request" subtitle="Purchase request subtitle" />

        <Box>
          <Button
            sx={{
              backgroundColor: "#334b5f",
              color: colors.grey[100],
              "&:hover": {
                color: "white",
                backgroundColor: colors.redAccent[700],
              },
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
              boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          left: "55%",
          transform: "translateX(-45%)",
          my: "-4px",
          zIndex: "1",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "-15px",
            fontWeight: "550",
          }}
        >
          Period:
        </Typography>
        <DateField
          label="Start Date"
          // value={dayjs(startDate)}
          // onChange={handleStartDate}
          // format="MM/DD/YYYY"
        />
        <DateField
          label="End Date"
          // value={dayjs(endDate)}
          // onChange={handleEndDate}
          // format="MM/DD/YYYY"
        />
      </Box>
      <DataGrid data={mockPurchaseRequest} columns={columns} />

      {/* Contents */}
    </Box>
  );
}
