import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [expensesFilter, setExpensesFilter] = useState("2019");

  const selectFilterHandler = (filterOption) => {
    setExpensesFilter(filterOption);
    console.log(filterOption);
    console.log(expensesFilter);
  };

  return (
    <div className="expenses">
      <Card>
        <ExpensesFilter
          onFilterSelect={selectFilterHandler}
          default={expensesFilter}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
