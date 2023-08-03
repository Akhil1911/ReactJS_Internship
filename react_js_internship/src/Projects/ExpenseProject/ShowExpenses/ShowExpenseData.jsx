import { Stack, Box, Divider, Typography, TextField } from "@mui/material";
import React from "react";

const ShowExpenseData = ({ title, amount, date }) => {
  return (
    // <li>
    <Stack
      direction={{
        lg: "row",
        md: "row",
        sm: "row",
        xs: "column",
      }}
      justifyContent={{
        lg: "space-around",
        md: "space-around",
        sm: "space-around",
        xs: "row",
      }}
      alignItems="center"
      spacing={6}
      mb={10}
    >
      <Box
        component="span"
        sx={{
          height: {
            lg: "100px",
            md: "100px",
            sm: "100px",
            xs: "100px",
          },
          width: {
            lg: "100px",
            md: "100px",
            sm: "100px",
            xs: "100px",
          },
        }}
      >
        <h2>DATE</h2>
        <Divider flexItem />

        <Typography variant="h5" mt={1.5}>
          {new Date(date).getFullYear()}
        </Typography>
        <Typography variant="p" fontSize={"larger"}>
          {new Date(date).getDate() + " "}
          {new Date(date).toLocaleDateString("default", { month: "long" })}{" "}
        </Typography>
      </Box>

      <Box
        component="span"
        sx={{
          height: {
            lg: "100px",
            md: "100px",
            sm: "100px",
            xs: "100px",
          },
          width: {
            lg: "100px",
            md: "100px",
            sm: "100px",
            xs: "100px",
          },
        }}
      >
        <h2>AMOUNT</h2>
        <Divider flexItem />
        <Typography variant="h5" mt={2.5}>
          {"₹" + " " + amount}
        </Typography>
      </Box>

      <Box
        component="span"
        sx={{
          height: {
            lg: "100px",
            md: "100px",
            sm: "100px",
            xs: "100px",
          },
          width: {
            lg: "350px",
            md: "350px",
            sm: "300px",
            xs: "250px",
          },
        }}
      >
        <h2>TITLE</h2>
        <Divider flexItem />

        <Typography variant="h5" mt={2.5} sx={{ wordWrap: "break-word" }}>
          {title}
        </Typography>
      </Box>
    </Stack>
    // </li>
  );
};

export default ShowExpenseData;
