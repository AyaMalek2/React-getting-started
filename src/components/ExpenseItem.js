//return statement can only have one root element
import "./ExpenseItem.css";

export default function ExpenseItem() {
  //   return <h2>ExpenseItem works!</h2>;
  const expenseDate = new Date(2021, 8, 5); //Sep 5 2021
  const expenseTitle = "car insurance";
  const expensePrice = 290;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <h2 className="expense-item__description">{expenseTitle}</h2>
      <div className="expense-item__price">${expensePrice}</div>
    </div>
  );
}
// export default ExpenseItem;
