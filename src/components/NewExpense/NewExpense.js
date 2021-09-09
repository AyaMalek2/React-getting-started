import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseHandler = (expenseData) => {
    const newExpenseData = { ...expenseData, id: Math.random().toString() };
    // console.log(newExpenseData);
    props.onAddNewExpense(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
