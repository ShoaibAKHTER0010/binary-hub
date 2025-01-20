import React from "react";

import { Grid, Box, Typography } from "@mui/material";

import aboutImg from "../../Assets/images/About.png";
import Icon1 from "../../Assets/images/aboutIcon1.png";
import Icon2 from "../../Assets/images/aboutIcon2.png";
import Icon3 from "../../Assets/images/aboutIcon3.png";
import Icon4 from "../../Assets/images/aboutIcon4.png";

function About() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#F3F7FD",
        }}
      >
        <Box sx={{ width: "90%", my: 8 }}>
          <Grid container spacing={0} alignItems="start">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={aboutImg}
                alt="About"
                sx={{
                  width: { xs: "80%", md: "100%" },
                  borderRadius: "16px",
                  maxWidth: { xs: "400px", md: "583px" },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  ml: { xs: 4, sm: 7, md: 10 },
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "bold",
                      fontSize: { xs: "24px", sm: "32px", md: "42px" },
                      lineHeight: { xs: "38px", sm: "54px", md: "62px" },
                      marginBottom: 2,
                      color: "#641B33",
                      textAlign: { xs: "center", md: "left" },
                      mt: { xs: 4, md: 0 },
                    }}
                  >
                    About Us
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "24px",
                      marginBottom: 4,
                      color: "#686868",
                      maxWidth: "350px",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Monotonectally synergize granular markets and front markets.
                    Collaboratively visualize strategic infomediaries after
                    multimedia based models. Synergistically task state of the
                    art infrastructures for
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mb: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={Icon1}
                      alt="Icon"
                      sx={{
                        width: { xs: "80%", md: "100%" },
                        borderRadius: { xs: "10px", md: "16px" },
                        maxWidth: { xs: "50px", md: "67.31px" },
                        maxHeight: { xs: "50px", md: "67.31px" },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", md: "22px" },
                        lineHeight: { xs: "22px", md: "26px" },
                        color: "#041424",
                        maxWidth: "300px",
                        margin: "0px",
                      }}
                    >
                      100% Money Back
                      <br />
                      Gaurentee
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mb: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={Icon2}
                      alt="Icon"
                      sx={{
                        width: { xs: "80%", md: "100%" },
                        borderRadius: { xs: "10px", md: "16px" },
                        maxWidth: { xs: "50px", md: "67.31px" },
                        maxHeight: { xs: "50px", md: "67.31px" },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", md: "22px" },
                        lineHeight: { xs: "22px", md: "26px" },
                        color: "#041424",
                        maxWidth: "300px",
                        margin: "0px",
                      }}
                    >
                      24/7 Free Tehcnical <br /> Supports
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mb: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={Icon3}
                      alt="Icon"
                      sx={{
                        width: { xs: "80%", md: "100%" },
                        borderRadius: { xs: "10px", md: "16px" },
                        maxWidth: { xs: "50px", md: "67.31px" },
                        maxHeight: { xs: "50px", md: "67.31px" },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", md: "22px" },
                        lineHeight: { xs: "22px", md: "26px" },
                        color: "#041424",
                        maxWidth: "300px",
                        margin: "0px",
                      }}
                    >
                      Expert & Dedicated Team <br /> Members
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mb: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={Icon4}
                      alt="Icon"
                      sx={{
                        width: { xs: "80%", md: "100%" },
                        borderRadius: { xs: "10px", md: "16px" },
                        maxWidth: { xs: "50px", md: "67.31px" },
                        maxHeight: { xs: "50px", md: "67.31px" },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        fontSize: { xs: "18px", md: "22px" },
                        lineHeight: { xs: "22px", md: "26px" },
                        color: "#041424",
                        maxWidth: "300px",
                        margin: "0px",
                      }}
                    >
                      100% Customers
                      <br />
                      Satisfaction
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default About;
