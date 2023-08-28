import * as React from "react";
import { Box, Tabs, Tab, Button, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ProductLibraries from "./product";
import SupplierLibraries from "./supplier";
import themes from "../../../../../../themes/theme";
import Header from "../../../../../../components/PrivateComponents/eglogistics/Header";

const { tokens } = themes;

export default function ProcurementLibararies() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ m: "5px 20px 20px 20px" }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "40px" }}
      >
        <Header
          title="Purchase Libraries"
          subtitle="Library Management for Procurement Items"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              // backgroundColor: (themeMode) =>
              //   themeMode.palette.mode === "dark" ? "#334b5f" : "lightgray",
              color: colors.grey[100],
              "&:hover": {
                color: "white",
                backgroundColor: colors.blueAccent[300],
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
      <Box m="20px">
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          borderRadius="5px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)"
          position="relative"
          height="auto"
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab
                label="Product"
                style={{
                  fontWeight: "bold",
                }}
              />
              <Tab
                label="Brand"
                style={{
                  fontWeight: "bold",
                }}
              />
              <Tab
                label="Category"
                style={{
                  fontWeight: "bold",
                }}
              />
              <Tab
                label="Supplier"
                style={{
                  fontWeight: "bold",
                }}
              />
            </Tabs>
          </Box>

          <Box role="tabpanel">
            {selectedTab === 0 && <ProductLibraries />}
            {selectedTab === 1 && <Box>Brand</Box>}
            {selectedTab === 2 && <Box>Category</Box>}
            {selectedTab === 3 && <SupplierLibraries />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
