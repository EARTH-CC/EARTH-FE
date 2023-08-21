/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
import { useState } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  Button,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
//  import themes from "../../../../../themes/theme";
//  import mockTransaction from "../../../../../data/mockData";

//  const { tokens } = themes;
//  const { mockTransactions } = mockTransaction;

export default function Settings() {
  //  const theme = useTheme();
  //  const colors = tokens(theme.palette.mode);

  const [selectedTab, setSelectedTab] = useState(0);
  const [givenName, setGivenName] = useState("Liam");
  const [middleName, setMiddleName] = useState("Rosatase");
  const [lastName, setLastName] = useState("Florida");
  const [mobileNumber, setMobileNumber] = useState("09121231234");
  const [email, setEmail] = useState("liamflorida3@gmail.com");
  const [oldPassword, setOldPassword] = useState("hotdog1234567");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleUpdate = () => {
    console.log("hotdog");
  };

  const handleToggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
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
            onChange={handleChangeTab}
            aria-label="simple tabs example"
          >
            <Tab
              label="User Details"
              style={{
                fontWeight: "bold",
              }}
            />
            <Tab
              label="Account Information"
              style={{
                fontWeight: "bold",
              }}
            />
          </Tabs>
        </Box>
        <Box role="tabpanel">
          {selectedTab === 0 && (
            <>
              <Box
                mt={4}
                mx={4}
                py={2}
                px={2}
                borderRadius="5px"
                boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)"
                height="250px"
              >
                <Typography variant="h5" mb={4}>
                  Personal Information
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <TextField
                      label="Given Name"
                      fullWidth
                      value={givenName}
                      onChange={(e) => setGivenName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Middle Name"
                      fullWidth
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Last Name"
                      fullWidth
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Mobile Number"
                      fullWidth
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box height="100px" />
            </>
          )}
          {selectedTab === 1 && (
            <>
              <Box
                mt={4}
                mx={4}
                py={2}
                px={2}
                borderRadius="5px"
                boxShadow="0px 5px 10px rgba(0, 0, 0, 0.2)"
                height="450px"
              >
                <Typography variant="h5" mb={1}>
                  Account Information
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      fullWidth
                      margin="normal"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Old Password"
                      fullWidth
                      margin="normal"
                      type={showOldPassword ? "text" : "password"}
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle old password visibility"
                              onClick={handleToggleOldPasswordVisibility}
                            >
                              {showOldPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Password"
                      fullWidth
                      margin="normal"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleTogglePasswordVisibility}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Confirm Password"
                      fullWidth
                      margin="normal"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle confirm password visibility"
                              onClick={handleToggleConfirmPasswordVisibility}
                            >
                              {showConfirmPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <ul>
                    <li style={{ color: "#d32f2f" }}>
                      <Typography fontWeight="bold" color="#d32f2f">
                        Password must be at least 8 characters in length
                      </Typography>
                    </li>
                    <li style={{ color: "#d32f2f" }}>
                      <Typography fontWeight="bold" color="#d32f2f">
                        Password must contain a minimum of 1 upper case letter
                        [A-Z]
                      </Typography>
                    </li>
                    <li style={{ color: "#d32f2f" }}>
                      <Typography fontWeight="bold" color="#d32f2f">
                        Password must contain a minimum of 1 lower case letter
                        [a-z]
                      </Typography>
                    </li>
                    <li style={{ color: "#d32f2f" }}>
                      <Typography fontWeight="bold" color="#d32f2f">
                        Password must contain a minimum of 1 numberic character
                        [0-9]
                      </Typography>
                    </li>
                    <li style={{ color: "#d32f2f" }}>
                      <Typography fontWeight="bold" color="#d32f2f">
                        Password must contain a minimum of 1 special character
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Box>
              <Box height="100px" />
            </>
          )}
        </Box>
        <Button
          variant="contained"
          onClick={handleUpdate}
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            padding: "10px",
            backgroundColor: "#2979ff",
            ":hover": {
              backgroundColor: "#00bcd4",
            },
          }}
        >
          <OfflinePinIcon />
          <Typography ml={1} fontWeight="bold">
            UPDATE
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
