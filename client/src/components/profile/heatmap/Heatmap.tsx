import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { Workout } from '../../../Utils/interface';

type Props = {
  workouts: Workout[];
}

export default function Heatmap({ workouts }: Props) {
  const [month1, setMonth1] = useState<number[]>([]);
  const [month2, setMonth2] = useState<number[]>([]);
  const [month3, setMonth3] = useState<number[]>([]);

  type Series = {
    x: string;
    y: string
  }

  function generateData(daysToFill: number[]): Series[] {
    let i = 0;
    const series = [];
    while (i <= 30) {
      const x = (i + 1).toString();
      if (daysToFill.some(el => el === Number(x))) {
        series.push({
          x,
          y: '125',
        });
      } else {
        series.push({
          x,
          y: '50',
        });
      }
      i++;
    }
    return series;
  }
  // TODO this can be organised into the custom hook if needed. Workout looper doesnt need to be in useEffect at all
  useEffect(() => {
    const month1Data: number[] = [];
    const month2Data: number[] = [];
    const month3Data: number[] = [];
    // TYPES
    function workoutLooper() {
      workouts.forEach(sess => {
        const indvDate = new Date(sess.date);
        const indvMonth = indvDate.getMonth();
        const indvDay = indvDate.getDate();

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
