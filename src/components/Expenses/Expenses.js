import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [expensesFilter, setExpensesFilter] = useState("2019");

  const selectFilterHandler = (filterOption) => {
    setExpensesFilter(filterOption);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == expensesFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterSelect={selectFilterHandler}
        default={expensesFilter}
      />

      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
