//return statement can only have one root element
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  //   return <h2>ExpenseItem works!</h2>;
  const expenseDate = new Date(2021, 8, 5).toLocaleDateString(); //Sep 5 2021
  const expenseTitle = "car insurance";
  const expensePrice = 290;
  console.log("item: ", props);
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
// export default ExpenseItem;
