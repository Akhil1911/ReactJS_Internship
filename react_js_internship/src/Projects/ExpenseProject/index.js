import React, { useState, useEffect } from "react";
import AddExpenseHome from "./AddExpense/AddExpenseHome";
import ShowExpenseHome from "./ShowExpenses/ShowExpenseHome";
import { Container } from "@mui/material";
import FilterHome from "./Filter/FilterHome";
const Index = () => {
  const [filteredExpense, setFilteredExpense] = useState([]);
  const [expense, setExpense] = useState([]);
  const [filteredYear, setFilteredYear] = useState("");
  const [singleExpense, setsingleExpense] = useState();
  const [allYears, setAllYears] = useState();

  const getExpenseData = (expenses) => {
    setsingleExpense(expenses);
    if (filteredYear === new Date(expenses.date).getFullYear().toString()) {
      setFilteredExpense((prevState) => [expenses, ...prevState]);
      setExpense((prevState) => [expenses, ...prevState]);
    } else {
      setExpense((prevState) => [expenses, ...prevState]);
    }
  };
  const getFilteredExpenseData = (filteredExpense, year) => {
    setFilteredYear(year);
    setFilteredExpense(filteredExpense);
  };

  useEffect(() => {
    setAllYears(
      expense?.map((value) => {
        return new Date(value.date).getFullYear().toString();
      })
    );
  }, [singleExpense]);

  return (
    <Container>
      <AddExpenseHome getExpenseData={getExpenseData} />
      <FilterHome
        allYears={new Set(allYears)}
        expenses={expense}
        getFilteredExpenseData={getFilteredExpenseData}
      />
      <ShowExpenseHome
        allYears={new Set(allYears)}
        filteredExpense={
          filteredYear === "All Year" ? expense : filteredExpense
        }
      />
    </Container>
  );
};
export default Index;
