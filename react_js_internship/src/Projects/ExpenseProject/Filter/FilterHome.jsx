import React, { useEffect, useState } from "react";
import {
  Paper,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const FilterHome = ({
  expenses,
  getFilteredExpenseData,
  allYears,
}) => {
  const [year, setYear] = useState("All Year");
  // const [allYears, setAllYears] = useState();
  // console.log(allYears);
  const handleFilter = (fYear) => {
    setYear(fYear);
  };

  useEffect(() => {
    let filteredArray = expenses?.filter((value) => {
      return new Date(value.date).getFullYear().toString() === year;
    });
    getFilteredExpenseData(filteredArray, year);
  }, [year]);

  useEffect(() => {}, []);

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
        <Paper elevation={4} sx={{ height: "auto", p: 1 }}>
          <Container style={{ textAlign: "center" }}>
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              alignItems="center"
              mb={2}
            >
              <Typography variant="h5">Filter Data</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="Year"
                    onChange={(e) => handleFilter(e.target.value)}
                  >
                    <MenuItem value={"All Year"}>Get All Year</MenuItem>
                    {/* {expenses
                      .filter((value) => {
                        return (
                          new Date(value.date).getFullYear().toString() !=
                          new Date(singleExpense?.date).getFullYear().toString()
                        );
                      }) */}
                     {Array.from(allYears).map((val, index) => (
                        <MenuItem
                          key={index}
                          value={val}
                        >
                          {val}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Container>
        </Paper>
      </Box>
    </>
  );
};

export default FilterHome;
