import React, { useState } from "react";
import { Paper, Box, Container, Button } from "@mui/material";
import AddExpenseContet from "./AddExpenseContet";
const AddExpenseHome = (props) => {
  const [showAddExpenseContent, setShowAddExpenseContent] = useState(false);
  const getExpenseData = (expenses) => {
      props.getExpenseData(expenses)
  };
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
        <Paper elevation={6}>
          <Container sx={{ mt: 4, mb: 4 }} style={{ textAlign: "center" }}>
            {showAddExpenseContent ? (
              <AddExpenseContet
                getExpenseData={getExpenseData}
                setShowAddExpenseContent={setShowAddExpenseContent}
              />
            ) : (
              <Button
                sx={{ fontSize: "larger" }}
                variant="contained"
                color="success"
                onClick={() => setShowAddExpenseContent(true)}
              >
                Add Expense
              </Button>
            )}
          </Container>
        </Paper>
      </Box>
    </>
  );
};

export default AddExpenseHome;
