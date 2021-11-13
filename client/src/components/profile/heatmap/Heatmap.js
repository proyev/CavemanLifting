import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Heatmap({ workouts }) {
  // console.log(workouts);

  function generateData(count, yrange) {
    const decider = {
      10: 'Oct',
      11: 'Nov',
    };
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }

  function generateTheHeat(data) {
    console.log(data);
  }

  useEffect(() => {
    async function hmm() {
      const fin = await workouts;
      console.log(fin);
    }
    hmm();
  }, [workouts]);

  return (
    <div id="chart">
      {/* <p>{workouts[0].title}</p> */}
      <ReactApexChart
        options={{
          chart: {
            height: 500,
            width: 750,
            type: 'heatmap',
          },
          dataLabels: {
            enabled: false,
          },
          colors: ['#964B00'],
          title: {
            text: 'Days in Gym',
          },
        }}
        series={[
          {
            name: 'Nov',
            data: [
              { x: '1st', y: '1' },
              { x: '2nd', y: '150' },
              { x: '3rd', y: '150' },
              { x: '4th', y: '150' },
            ],
          },
          {
            name: 'Oct',
            data: generateData(30, {
              min: -30,
              max: 55,
            }),
          },
          {
            name: 'Sept',
            data: generateData(30, {
              min: -30,
              max: 55,
            }),
          },
        ]}
        type="heatmap"
        height={350}
      />
      <p>profile</p>
    </div>
  );
}
