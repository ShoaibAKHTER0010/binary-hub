import React, { useState } from "react";

import FAQImg from "../../Assets/images/FAQ.png";
import bgImg from "../../Assets/images/bgFaq.png";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function FAQ() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <Box sx={{ width: "90%", my: 8 }}>
          <Box
            sx={{
              mb: 9,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <Box
              sx={{
                px: 2,
                border: "1px solid White",
                maxWidth: "256.67px",
                borderRadius: "35px",
              }}
            >
              <Box
                component="ul"
                sx={{
                  my: 0,
                  pl: 2,
                  "& li::marker": {
                    color: "#F58B93",
                  },

                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <li
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "900",
                    padding: "10px 0",
                  }}
                >
                  Digital agency Queries
                </li>
              </Box>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Inter",
                fontWeight: "bolder",
                fontSize: { xs: "30px", sm: "45px", md: "64px" },
                lineHeight: { xs: "36px", sm: "48px", md: "68px" },
                marginBottom: 2,
                color: "#fff",
                textAlign: { xs: "center", md: "left" },
                mt: 4,
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>
          <Grid container spacing={6} alignItems="start">
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "25px",
                  padding: "23px 16px",
                  margin: 0,
                }}
              >
                {[
                  {
                    id: "panel1",
                    question: "How Much Do Your Services Cost?",
                    answer:
                      "Phasellus condimentum accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.",
                  },
                  {
                    id: "panel2",
                    question: "How Long Does SEO Take To Produce Results?",
                    answer:
                      "Phasellus condimentum accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.",
                  },
                  {
                    id: "panel3",
                    question: "Do You Provide Advertising On Social Media?",
                    answer:
                      "Phasellus condimentum accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.",
                  },
                  {
                    id: "panel4",
                    question: "Are You Offering Services For Creating Content?",
                    answer:
                      "Phasellus condimentum accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.",
                  },
                  {
                    id: "panel5",
                    question: "Are Long-Term Agreements Necessary?",
                    answer:
                      "Phasellus condimentum accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.fames ac turpis egestas. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id. Aliquam luctus eleifend vestibulum. Fusce lacinia finibus dui id.",
                  },
                ].map(({ id, question, answer }) => (
                  <Accordion
                    key={id}
                    expanded={expanded === id}
                    onChange={handleChange(id)}
                    sx={{
                      background: "#f9f9f9",
                      boxShadow: "none",
                      borderBottom: "1px solid #242424",
                      "&:before": { display: "none" },
                      margin: 0, // Remove the default margin
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <IconButton
                          sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#333",
                            },
                          }}
                        >
                          {expanded === id ? <RemoveIcon /> : <AddIcon />}
                        </IconButton>
                      }
                      aria-controls={`${id}-content`}
                      id={`${id}-header`}
                      sx={{
                        paddingY: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                        {question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontSize: "16px" }}>
                        {answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default FAQ;
