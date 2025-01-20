import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CountUp from "react-countup";

import CounterBg from "../../Assets/images/counter.png";

function Counter() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${CounterBg})`,
        py: 5,
        px: 2,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Counter 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              <CountUp start={0} end={10} duration={2.5} suffix="K+" />
            </Typography>
            <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
              Happy Customers
            </Typography>
          </Box>
        </Grid>

        {/* Counter 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              <CountUp start={0} end={20} duration={2.5} suffix="K+" />
            </Typography>
            <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
              Works Completed
            </Typography>
          </Box>
        </Grid>

        {/* Counter 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              <CountUp start={0} end={99} duration={2.5} suffix="+" />
            </Typography>
            <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
              Expert Members
            </Typography>
          </Box>
        </Grid>

        {/* Counter 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
              <CountUp start={0} end={100} duration={2.5} suffix="%" />
            </Typography>
            <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
              Satisfaction Rates
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Counter;
