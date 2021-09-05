import React from 'react';

import Chart from '../Chart/Chart';

export default function ExpensesChart(props) {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  //this will add the values from each month
  //props.expenses coming from Expenses.js
  //using for OF loop because props.expense is an Array
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starts at Jan = 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}
