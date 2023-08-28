import * as React from "react";
import { Box, Tabs, Tab, Button, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ProductLibraries from "./product";
import BrandLibraries from "./brand";
import CategoryLibraries from "./category";
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
    <Box sx={{ m: "-5px 20px 20px 20px" }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: "20px" }}
      >
        <Header
          title="Purchase Libraries"
          subtitle="Library Management for Purchase Items"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[300],
              // backgroundColor: (themeMode) =>
              //   themeMode.palette.mode === "dark" ? "#334b5f" : "lightgray",
              color: colors.grey[900],
              "&:hover": {
                color: "white",
                backgroundColor: colors.blueAccent[700],
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
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="procurement libraries tabs"
            >
              <Tab
                label="Product"
                style={{
                  margin: "0 20px 0 20px",
                  letterSpacing: "0.3em",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "small",
                  fontWeight: "900",
                  color: colors.grey[100],
                }}
              />
              <Tab
                label="Brand"
                style={{
                  margin: "0 20px 0 20px",
                  letterSpacing: "0.3em",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "small",
                  fontWeight: "900",
                  color: colors.grey[100],
                }}
              />
              <Tab
                label="Category"
                style={{
                  margin: "0 20px 0 20px",
                  letterSpacing: "0.3em",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "small",
                  fontWeight: "900",
                  color: colors.grey[100],
                }}
              />
              <Tab
                label="Supplier"
                style={{
                  margin: "0 20px 0 20px",
                  letterSpacing: "0.3em",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "small",
                  fontWeight: "900",
                  color: colors.grey[100],
                }}
              />
            </Tabs>
          </Box>

          <Box role="tabpanel">
            {selectedTab === 0 && <ProductLibraries />}
            {selectedTab === 1 && <BrandLibraries />}
            {selectedTab === 2 && <CategoryLibraries />}
            {selectedTab === 3 && <SupplierLibraries />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
