import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses(props) {
  const [year, setYear] = useState('');

  const onSaveYearData = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveYearData={onSaveYearData} selected={year} />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList items={filteredData} />
    </Card>
  );
}
