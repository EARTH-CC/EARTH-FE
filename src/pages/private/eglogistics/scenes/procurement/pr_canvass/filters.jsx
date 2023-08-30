import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  Rating,
  Slider,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryTextfield from "components/PrivateComponents/eglogistics/Textfields/LibraryTextfield";
import themes from "../../../../../../themes/theme";

const { tokens } = themes;
const priceData = [0, 999999]; // MOCK DATA

function Filters() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [value, setValue] = useState(priceData);
  const [selectedRatings, setSelectedRatings] = useState(["all"]);

  const handleCart = () => {
    navigate("/canvass-cart");
  };

  const handleCheckboxChange = (rating) => {
    if (rating === "all") {
      setSelectedRatings(["all"]);
    } else {
      const updatedRatings = selectedRatings.includes(rating)
        ? selectedRatings.filter((r) => r !== rating)
        : [...selectedRatings.filter((r) => r !== "all"), rating]; // Remove "all" if present
      if (updatedRatings.length === 0) {
        setSelectedRatings(["all"]);
      } else {
        setSelectedRatings(updatedRatings);
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Gawa ng useEffect dito tas ipasa sa API
  console.log(value);
  console.log(selectedRatings);

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
      <IconButton aria-label="cart" onClick={handleCart}>
        <ShoppingCartIcon
          style={{
            color: colors.blueAccent[300],
            fontSize: 45,
            alignSelf: "center",
          }}
        />
      </IconButton>

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
        disableSwap
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
            color: colors.grey[900],
            backgroundColor: colors.blueAccent[400],
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
            <Checkbox
              checked={selectedRatings.includes("all")}
              onChange={() => handleCheckboxChange("all")}
              style={{ color: colors.grey[300] }}
            />
          }
          label="All"
        />
        {[5, 4, 3, 2].map((rating) => (
          <FormControlLabel
            key={rating}
            control={
              <Checkbox
                checked={selectedRatings.includes(rating)}
                onChange={() => handleCheckboxChange(rating)}
                style={{ color: colors.grey[300] }}
              />
            }
            label={<Rating name={`${rating} stars`} value={rating} readOnly />}
          />
        ))}
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedRatings.includes("unrated")}
              onChange={() => handleCheckboxChange("unrated")}
              style={{ color: colors.grey[300] }}
            />
          }
          label="Unrated"
        />
      </FormGroup>
    </Box>
  );
}

export default Filters;
