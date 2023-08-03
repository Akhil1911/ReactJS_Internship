import React, { useState, useEffect } from "react";
import AddExpenseHome from "./AddExpense/AddExpenseHome";
import ShowExpenseHome from "./ShowExpenses/ShowExpenseHome";
import { Container } from "@mui/material";
import FilterHome from "./Filter/FilterHome";
const Index = () => {
  let DUMMY_DATA = [
    {
      title: "medicines",
      amount: 432,
      date: new Date(),
    },
    {
      title: "snacks",
      amount: 200,
      date: new Date(2022,1,1),
    },
    {
      title: "clothes",
      amount: 5000,
      date: new Date(2020,3,8),
    },
  ];
  const [filteredExpense, setFilteredExpense] = useState([]);
  const [expense, setExpense] = useState(DUMMY_DATA);
  const [filteredYear, setFilteredYear] = useState("");
  const [singleExpense, setsingleExpense] = useState();
    const [allYears, setAllYears] = useState();


  const getExpenseData = (expenses) => {
    setsingleExpense(expenses)
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
    console.log(allYears);
  },[singleExpense])

  return (
    <Container>
      <AddExpenseHome getExpenseData={getExpenseData} />
      <FilterHome
        allYears={new Set(allYears)}
        expenses={expense}
        singleExpense={singleExpense}
        getFilteredExpenseData={getFilteredExpenseData}
      />
      <ShowExpenseHome
        allYears={new Set(allYears)}
        filteredExpense={filteredYear == "All Year" ? expense : filteredExpense}
      />
    </Container>
  );
};
export default Index;
