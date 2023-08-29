import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Rating,
  Slider,
  Typography,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryTextfield from "components/PrivateComponents/eglogistics/Textfields/LibraryTextfield";
import themes from "../../../../../../themes/theme";

const { tokens } = themes;
const priceData = [0, 999999]; // MOCK DATA

function Filters() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(priceData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        gap: "0.9em",
        padding: "20px 40px 30px",
        textAlign: "center",
      }}
    >
      <Typography
        fontSize="medium"
        fontWeight="900"
        sx={{
          letterSpacing: "0.3em",
          fontSize: "small",
        }}
      >
        CANVASS CART
      </Typography>
      <Divider
        variant="middle"
        sx={{ borderTopWidth: "1px", borderTopColor: "black" }}
      />
      <ShoppingCartIcon
        style={{
          color: colors.blueAccent[300],
          fontSize: 45,
          alignSelf: "center",
        }}
      />
      <Typography
        fontSize="medium"
        fontWeight="900"
        sx={{
          letterSpacing: "0.3em",
          fontSize: "small",
        }}
      >
        FILTERS
      </Typography>
      <Divider
        variant="middle"
        sx={{ borderTopWidth: "1px", borderTopColor: "black" }}
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
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={priceData[1]}
        size="medium"
        valueLabelDisplay="on"
        // eslint-disable-next-line react/no-unstable-nested-components
        valueLabelFormat={(price) => (
          <span>
            <span style={{ fontSize: "15px" }}>₱</span> {price}
          </span>
        )}
        sx={{
          color: colors.blueAccent[300],
          mt: "15px",
          "& .MuiSlider-valueLabel": {
            color: colors.blueAccent[400],
            backgroundColor: "transparent",
            borderRadius: "10px",
            fontSize: "small",
          },
        }}
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
          control={
            <Checkbox defaultChecked style={{ color: colors.grey[300] }} />
          }
          label="All"
        />
        <FormControlLabel
          control={<Checkbox style={{ color: colors.grey[300] }} />}
          label={<Rating name="5 stars" value={5} readOnly />}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: colors.grey[300] }} />}
          label={<Rating name="4 stars" value={4} readOnly />}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: colors.grey[300] }} />}
          label={<Rating name="3 stars" value={3} readOnly />}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: colors.grey[300] }} />}
          label={<Rating name="2 stars" value={2} readOnly />}
        />
        <FormControlLabel
          control={<Checkbox style={{ color: colors.grey[300] }} />}
          label="Unrated"
        />
      </FormGroup>
    </Box>
  );
}

export default Filters;
