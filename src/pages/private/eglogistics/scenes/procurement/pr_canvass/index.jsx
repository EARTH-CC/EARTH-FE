import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import Slider from "@mui/material/Slider";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryTextfield from "components/PrivateComponents/eglogistics/Textfields/LibraryTextfield";
import themes from "../../../../../../themes/theme";
import Header from "../../../../../../components/PrivateComponents/eglogistics/Header";

const { tokens } = themes;

export default function CanvassSheet() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          title="Canvass Sheet"
          subtitle="Compare suppliers and decide better with our Purchase Canvass Sheet"
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
              borderRadius: "5px",
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
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            borderRadius="5px"
          >
            <Box
              gridColumn="span 12"
              backgroundColor={colors.primary[400]}
              display="flex"
              borderRadius="20px"
              sx={{ textAlign: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                  gap: "0.9em",
                  padding: "20px 30px 30px",
                }}
              >
                <Typography fontSize="medium" fontWeight="900">
                  Shopping Cart
                </Typography>
                <Divider
                  variant="middle"
                  sx={{ borderTopWidth: "2px", borderTopColor: "black" }}
                />
                <ShoppingCartIcon
                  style={{
                    color: colors.blueAccent[300],
                    fontSize: 45,
                    alignSelf: "center",
                  }}
                />
                <Typography fontSize="medium" fontWeight="900">
                  Filters
                </Typography>
                <Divider
                  variant="middle"
                  sx={{ borderTopWidth: "2px", borderTopColor: "black" }}
                />
                <LibraryTextfield label="Category" />
                <Divider variant="middle" />
                <LibraryTextfield label="Brand" />
                <Divider variant="middle" />
                <LibraryTextfield label="Supplier" />
                <Divider variant="middle" />
                <Typography fontSize="small" fontWeight="600">
                  Price
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography sx={{ color: colors.blueAccent[200] }}>
                    ₱ 0
                  </Typography>
                  <Typography sx={{ color: colors.blueAccent[200] }}>
                    ₱ 999999
                  </Typography>
                </Box>
                <Slider
                  max={999999}
                  min={0}
                  size="medium"
                  valueLabelDisplay="auto"
                  sx={{ color: colors.blueAccent[300], mt: "-15px" }}
                />
                <Divider variant="middle" />
                <Typography fontSize="small" fontWeight="600">
                  Rating
                </Typography>
                <FormGroup
                  sx={{
                    marginBottom: "-20px",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="All"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Rating name="5 stars" value={5} readOnly />}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Rating name="4 stars" value={4} readOnly />}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Rating name="3 stars" value={3} readOnly />}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Rating name="2 stars" value={2} readOnly />}
                  />
                  <FormControlLabel control={<Checkbox />} label="Unrated" />
                </FormGroup>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: "flex",
                  width: "1px",
                  right: 0,
                  borderLeftWidth: "1.5px",
                  borderLeftColor: "#C0C0C0",
                }}
              />
              <Box sx={{ width: "100%" }}>
                <Typography>Data Table</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
