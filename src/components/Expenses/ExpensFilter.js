import React from "react";

import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  //   const [filterOption, setFilterOption] = useState("2022");
  const selectFilterHandler = (event) => {
    // setFilterOption(event.target.value);
    // console.log(filterOption);
    props.onFilterSelect(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.default} onChange={selectFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
