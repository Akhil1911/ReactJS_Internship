import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddExpenseContet = ({
  getExpenseData,
  showAddExpenseContent,
  setShowAddExpenseContent,
}) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let expense = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };

      getExpenseData(expense);
    setExpenseAmount(0);
    setExpenseTitle("");
    setExpenseDate("");
    setShowAddExpenseContent(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
          },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Add Expense</h1>
        <TextField
          label="Enter Title"
          variant="standard"
          required
          fullWidth={true}
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
        />
        <TextField
          type="number"
          label="Enter Amount"
          variant="standard"
          required
          fullWidth={true}
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
        />
        <TextField
          required
          type="date"
          label="Enter Date"
          focused
          fullWidth
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          color="secondary"
        >
          Add Expense
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => setShowAddExpenseContent(false)}
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default AddExpenseContet;
