//return statement can only have one root element
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  //   return <h2>ExpenseItem works!</h2>;
  const expenseDate = new Date(2021, 8, 5).toLocaleDateString(); //Sep 5 2021
  const expenseTitle = "car insurance";
  const expensePrice = 290;

  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
// export default ExpenseItem;
