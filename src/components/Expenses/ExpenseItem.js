//return statement can only have one root element
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

// export default
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};
export default ExpenseItem;
