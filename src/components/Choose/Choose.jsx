import React from "react";
import { Box, Grid, Typography, Button, Card } from "@mui/material";
import {
  LightbulbOutlined,
  VerifiedOutlined,
  AttachMoneyOutlined,
} from "@mui/icons-material";

function Choose() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F7F9FF",
      }}
    >
      <Box
        sx={{
          width: "90%",
          py: 6,
        }}
      >
        <Typography
          variant="overline"
          fontWeight="bold"
          sx={{ color: "#9D1C1F", display: "block", mb: 1 }}
        >
          Why Choose Us
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 4, color: "#330b0d" }}
        >
          Why choose us ?
        </Typography>

        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Card 1 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={
              {
                // width: '80%'
              }
            }
          >
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                padding: 2,
              }}
            >
              <LightbulbOutlined
                sx={{ fontSize: 48, color: "#6C63FF", mb: 2 }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </Typography>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: 2,
              }}
            >
              <VerifiedOutlined
                sx={{ fontSize: 48, color: "#6C63FF", mb: 2 }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Quality-Focused
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </Typography>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: 2,
              }}
            >
              <AttachMoneyOutlined
                sx={{ fontSize: 48, color: "#6C63FF", mb: 2 }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Value For Money
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Outstanding Work Section */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 2, color: "#330b0d" }}
          >
            Do you want to explore our outstanding work?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium, totam rem aperiam, eaque ipsa quae ab illo inventore et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9D1C1F",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#330b0d",
                },
              }}
            >
              Dribbble
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9D1C1F",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#330b0d",
                },
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9D1C1F",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#330b0d",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Choose;
