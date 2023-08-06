import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import Logo from "../assets/images/logo.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "85vh",
  width: "75vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Login({ open, handleClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === "eg" && password === "eg") {
      navigate("/dashboard");
    } else if (username === "bona" && password === "bona") {
      navigate("/bonatrade");
    } else if (username === "ug" && password === "ug") {
      navigate("/ugtrade");
    } else if (username === "ero" && password === "ero") {
      navigate("/erotas");
    } else {
      setError("Invalid Login Credentials");
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* <form className="login-form" autoComplete="off"> */}
        <Grid container spacing={0}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Login Logo"
              sx={{
                my: "20px",
                width: "700px",
                height: "700px",
                display: "block",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mb: "100px",
              }}
            >
              <Typography
                component="h3"
                variant="h3"
                sx={{
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                ACCOUNT{"\u00A0\u00A0\u00A0"}LOGIN
              </Typography>

              <Typography
                sx={{
                  color: "#A200FF",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                {error}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItem: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="username"
                placeholder="Email Address"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // disabled={loading}
                // value={formik.values.username}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // error={formik.touched.username && Boolean(formik.errors.username)}
                // helperText={formik.touched.username && formik.errors.username}
                sx={{ width: "24vw", mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle
                        sx={{
                          color: "#606468",
                          borderRadius: "2px 0px 0px 2px",
                          height: "25px",
                          mr: "10px",
                          backgroundColor: "#363b41",
                          boxShadow: "0 0 0 13px #363b41",
                        }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "#41484f",
                    color: "white",
                    borderRadius: "7px",
                  },
                }}
              />
              <TextField
                id="password"
                placeholder="Password"
                // type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // disabled={loading}
                // value={formik.values.password}
                // onChange={formik.handleChange}f
                sx={{ width: "24vw", mb: 4 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon
                        sx={{
                          color: "#606468",
                          borderRadius: "2px 0px 0px 2px",
                          height: "25px",
                          mr: "10px",
                          backgroundColor: "#363b41",
                          boxShadow: "0 0 0 13px #363b41",
                        }}
                      />
                    </InputAdornment>
                  ),
                  // endAdornment: (
                  //   <IconButton
                  //     onClick={() => setShowPassword(!showPassword)}
                  //     onKeyPress={() => setShowPassword(!showPassword)}
                  //   >
                  //     {showPassword ? (
                  //       <VisibilityIcon size={18} sx={{ color: "#606468" }} />
                  //     ) : (
                  //       <VisibilityOffIcon size={18} sx={{ color: "#606468" }} />
                  //     )}
                  //   </IconButton>
                  // ),
                  sx: {
                    backgroundColor: "#41484f",
                    color: "white",
                    borderRadius: "7px",
                  },
                }}
                // onBlur={formik.handleBlur}
                // error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                className="custom-btn btn-15"
                id="login-btn"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  mb: "15px",
                  backgroundColor: "#d61f26",
                  borderRadius: "7px",
                  color: "#fff",
                  fontSize: "15px",
                  width: "24vw",
                  height: "50px",
                  "&:hover": {
                    backgroundColor: "#00FFFF",
                  },
                }}
              >
                Sign In
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    m: 0,
                    mr: "10px",
                  }}
                >
                  Forgot Password?
                </Typography>
                <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      m: 0,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Click Here
                    <ForwardRoundedIcon
                      sx={{
                        fontSize: "20px",
                        ml: "3px",
                        my: "-6px",
                      }}
                    />
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* </form> */}
      </Box>
    </Modal>
  );
}

Login.defaultProps = {
  handleClose: () => {},
};

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
};

export default Login;