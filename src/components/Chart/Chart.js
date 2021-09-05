import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  //this map will get the values from the object dataPoints and transform them into an array to be used in Math().max()
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  //use the spread operator to pull all the values from the array
  const totalMaximum = Math.max(...dataPointValues);

  return (
    //dataPoints coming as props through ExpensesChart
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
