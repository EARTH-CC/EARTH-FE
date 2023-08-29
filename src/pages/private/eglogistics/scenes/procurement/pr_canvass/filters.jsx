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

function Filters() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        gap: "0.9em",
        padding: "20px 30px 30px",
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
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ color: colors.blueAccent[200] }}>₱ 0</Typography>
        <Typography sx={{ color: colors.blueAccent[200] }}>₱ 10000</Typography>
      </Box>
      <Slider
        step={1000}
        marks
        max={10000}
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
