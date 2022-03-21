import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  let formShown = isEditing ? (
    <ExpenseForm
      onCancel={cancelEditingHandler}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{formShown}</div>;
};

export default NewExpense;
