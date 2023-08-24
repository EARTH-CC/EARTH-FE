import { Typography, Box, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import themes from "../../../themes/theme";

const { tokens } = themes;

function Header({ title, subtitle, ...rest }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box {...rest}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.redAccent[300]} fontWeight={600}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;

Header.defaultProps = {
  title: "",
  subtitle: "",
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
