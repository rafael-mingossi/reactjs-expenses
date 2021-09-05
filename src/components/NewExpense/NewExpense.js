import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

export default function NewExpense(props) {
  const [clicked, setClicked] = useState(false);

  //this func will receive the values from ExpenseFrom component
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };

    //this is coming via props from App.js - child to parent
    props.onAddExpense(expenseData); //here is lifting the state up
  };

  //whether to show the button or not
  const addNewExpHandler = () => {
    setClicked(true);
  };

  const cancelNewExpHandler = () => {
    setClicked(false);
  };

  return (
    <div className="new-expense">
      {clicked === false ? (
        <button onClick={addNewExpHandler} type="submit">
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={cancelNewExpHandler}
        />
      )}
    </div>
  );
}
