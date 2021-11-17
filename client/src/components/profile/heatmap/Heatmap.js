import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Heatmap({ workouts }) {
  const [month1, setMonth1] = useState([]);
  const [month2, setMonth2] = useState([]);
  const [month3, setMonth3] = useState([]);

  function generateData(daysToFill) {
    let i = 0;
    const series = [];
    while (i <= 30) {
      const x = (i + 1).toString();
      if (daysToFill.some((el) => el === Number(x))) {
        series.push({
          x: x,
          y: '125',
        });
      } else {
        series.push({
          x: x,
          y: '50',
        });
      }
      i++;
    }
    return series;
  }

  useEffect(() => {
    const month1Data = [];
    const month2Data = [];
    const month3Data = [];
    function workoutLooper() {
      workouts.forEach((sess) => {
        let indvDate = new Date(sess.date);
        let indvMonth = indvDate.getMonth();
        let indvDay = indvDate.getDate();

        if (indvMonth === 8) {
          month1Data.push(indvDay);
        } else if (indvMonth === 9) {
          month2Data.push(indvDay);
        } else if (indvMonth === 10) {
          month3Data.push(indvDay);
        }
      });
    }
    workoutLooper();

    setMonth1(month1Data);
    setMonth2(month2Data);
    setMonth3(month3Data);
  }, [workouts]);

  return (
    <div id="chart">
      <ReactApexChart
        options={{
          chart: {
            type: 'heatmap',
            foreColor: 'white',
          },
          dataLabels: {
            enabled: false,
          },
          colors: ['#285E61'],
          title: {
            text: '',
          },
        }}
        series={[
          {
            name: 'Nov',
            data: generateData(month3),
          },
          {
            name: 'Oct',
            data: generateData(month2),
          },
          {
            name: 'Sept',
            data: generateData(month1),
          },
        ]}
        type="heatmap"
        height={300}
        width={'350%'}
      />
    </div>
  );
}
