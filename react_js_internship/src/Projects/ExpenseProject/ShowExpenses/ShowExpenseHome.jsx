import React, { useState,useEffect } from "react";
import { Paper, Box, Container, Button, Stack, Divider } from "@mui/material";
import ShowExpenseData from "./ShowExpenseData";
const ShowExpenseHome = ({ filteredExpense }) => {

  return (
    <>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: "auto",
          },
        }}
      >
        <Paper elevation={6} sx={{ height: "auto", p: 1 }}>
          <Container sx={{ mt: 4, mb: 4 }} style={{ textAlign: "center" }}>


            {filteredExpense?.length >= 1 ? (
              filteredExpense.map((data, index) => (
                <div key={index} style={{ listStyle: "none" }}>
                  <ShowExpenseData
                    title={data.title}
                    amount={data.amount}
                    date={data.date}
                  />
                  <Divider flexItem />
                </div>
              ))
            ) : (
              <h1>No Expense To Show...</h1>
            )}

            
          </Container>
        </Paper>
      </Box>
    </>
  );
};

export default ShowExpenseHome;
