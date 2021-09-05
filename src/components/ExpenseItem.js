//return statement can only have one root element
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  //   return <h2>ExpenseItem works!</h2>;
  const expenseDate = new Date(2021, 8, 5); //Sep 5 2021
  const expenseTitle = "car insurance";
  const expensePrice = 290;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
// export default ExpenseItem;
