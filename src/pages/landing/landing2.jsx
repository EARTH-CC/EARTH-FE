import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useStateContext } from "contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import earth from "../../assets/images/logo.png";
import waterfront from "../../assets/waterfront.png";

export default function Landing1() {
  const { setIsMainLanding } = useStateContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsMainLanding(false);
  };

  const handleFirstProj = () => {
    navigate("/waterfront");
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100vh",
          }}
        >
          <Button // Earth Logo
            onClick={handleClick}
            sx={{
              backgroundImage: `url(${earth})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "700px",
              width: "700px",
              ml: "150px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          />
          <Box // Side Nav
            sx={{
              display: "flex",
              alignItems: "center",
              p: 4,
              height: "90vh",
              width: "600px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 50%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                ml: "150px",
                height: "95%",
                width: "100%",
              }}
            >
              <Typography sx={{ color: "#fff", fontSize: "30px" }}>
                Projects
              </Typography>
              <Grid container spacing={0} sx={{ height: "90%" }}>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    onClick={handleFirstProj}
                    sx={{
                      backgroundImage: `url(${waterfront})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "100px",
                      minWidth: "100px",
                      backgroundRepeat: "no-repeat",
                      border: "2px solid black",
                      borderRadius: "50%",
                      backgroundColor: "#cacaca",
                      "&:hover": {
                        backgroundColor: "#fff",
                        transition: "all 0.1s ease-in-out",
                        my: "5px",
                        width: "110px",
                        height: "110px",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      ml: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                      }}
                    >
                      Manila Waterfront City
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "lightgray",
                      }}
                    >
                      Reclamation Project
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    sx={{
                      backgroundImage: `url(${earth})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "100px",
                      minWidth: "100px",
                      backgroundRepeat: "no-repeat",
                      border: "2px solid black",
                      borderRadius: "50%",
                      backgroundColor: "#cacaca",
                      "&:hover": {
                        backgroundColor: "#fff",
                        transition: "all 0.1s ease-in-out",
                        my: "5px",
                        width: "110px",
                        height: "110px",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      ml: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                      }}
                    >
                      Project B
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "lightgray",
                      }}
                    >
                      Project Type
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    sx={{
                      backgroundImage: `url(${earth})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "100px",
                      minWidth: "100px",
                      backgroundRepeat: "no-repeat",
                      border: "2px solid black",
                      borderRadius: "50%",
                      backgroundColor: "#cacaca",
                      "&:hover": {
                        backgroundColor: "#fff",
                        transition: "all 0.1s ease-in-out",
                        my: "5px",
                        width: "110px",
                        height: "110px",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      ml: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                      }}
                    >
                      Project C
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "lightgray",
                      }}
                    >
                      Project Type
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    sx={{
                      backgroundImage: `url(${earth})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "100px",
                      minWidth: "100px",
                      backgroundRepeat: "no-repeat",
                      border: "2px solid black",
                      borderRadius: "50%",
                      backgroundColor: "#cacaca",
                      "&:hover": {
                        backgroundColor: "#fff",
                        transition: "all 0.1s ease-in-out",
                        my: "5px",
                        width: "110px",
                        height: "110px",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      ml: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                      }}
                    >
                      Project D
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "lightgray",
                      }}
                    >
                      Project Type
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    sx={{
                      backgroundImage: `url(${earth})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "100px",
                      minWidth: "100px",
                      backgroundRepeat: "no-repeat",
                      border: "2px solid black",
                      borderRadius: "50%",
                      backgroundColor: "#cacaca",
                      "&:hover": {
                        backgroundColor: "#fff",
                        transition: "all 0.1s ease-in-out",
                        my: "5px",
                        width: "110px",
                        height: "110px",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      ml: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                      }}
                    >
                      Project E
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "lightgray",
                      }}
                    >
                      Project Type
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100vw",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            textShadow: "0 0 10px white",
          }}
        >
          Copyright © 2023. E.A.R.T.H. Command Center - a subsidiary business
          unit of E & G Logistics. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}
