/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {
  ResponsiveContainer,
  LineChart,
  AreaChart,
  Area,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  defs,
  linearGradient,
} from 'recharts';

export default function WorkoutComparison({ workouts }) {
  const [organisedData, setOrganisedData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const labelColor = useColorModeValue('black', 'white');

  function dataCreation(data) {
    let jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec;
    jan = { name: 'Jan', uv: 0 };
    feb = { name: 'Feb', uv: 0 };
    mar = { name: 'Mar', uv: 0 };
    apr = { name: 'Apr', uv: 0 };
    may = { name: 'May', uv: 0 };
    jun = { name: 'Jun', uv: 0 };
    jul = { name: 'Jul', uv: 0 };
    aug = { name: 'Aug', uv: 0 };
    sep = { name: 'Sep', uv: 0 };
    oct = { name: 'Oct', uv: 0 };
    nov = { name: 'Nov', uv: 0 };
    dec = { name: 'De', uv: 0 };
    for (let el of data) {
      const splitDate = el.date.split('-');
      const year = splitDate[0];
      const month = splitDate[1];
      //   console.log(year, month);
      if (Number(year) === new Date().getFullYear())
        switch (Number(month)) {
          case 1:
            jan.uv += 1;
            break;
          case 2:
            feb.uv += 1;
            break;
          case 3:
            mar.uv += 1;
            break;
          case 4:
            apr.uv += 1;
            break;
          case 5:
            may.uv += 1;
            break;
          case 6:
            jun.uv += 1;
            break;
          case 7:
            jul.uv += 1;
            break;
          case 8:
            aug.uv += 1;
            break;
          case 9:
            sep.uv += 1;
            break;
          case 10:
            oct.uv += 1;
            break;
          case 11:
            nov.uv += 1;
            break;
          case 12:
            dec.uv += 1;
            break;

          default:
            nov += 1;
            break;
        }
    }

    const arr = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

    let workoutData = [];
    const month = new Date().getMonth();

    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      let count = 1;
      while (count < 32) {
        workoutData.push({
          name: count,
          Deadlift: 0,
          Bench: 0,
          Squat: 0,
          Overhead: 0,
          'Bicep Curl': 0,
        });
        count++;
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      console.log(month);
      let count = 1;
      while (count < 31) {
        workoutData.push({
          name: count,
          Deadlift: 0,
          Bench: 0,
          Squat: 0,
          Overhead: 0,
          'Bicep Curl': 0,
        });
        count++;
      }
    } else {
      let count = 1;
      while (count < 29) {
        workoutData.push({
          name: count,
          Deadlift: 0,
          Bench: 0,
          Squat: 0,
          Overhead: 0,
          'Bicep Curl': 0,
        });
        count++;
      }
    }
    for (let session of data) {
      const splitDate = session.date.split('-');
      const day = splitDate[2].slice(0, 2);
      const month = Number(splitDate[1]) - 1;

      if (month === new Date().getMonth() && session.routine.length > 0) {
        console.log('Speak friend and enter');
        for (let workout of session.routine) {
          console.log(workout);
          if (
            workout.lift === 'Deadlift' ||
            workout.lift === 'Bench' ||
            workout.lift === 'Squat' ||
            workout.lift === 'Overhead' ||
            workout.lift === 'Bicep Curl'
          ) {
            const theOne = workout.lift;
            console.log(theOne);
            workoutData[Number(day) - 1][theOne] = workout.weight;
          }
        }
      }
    }
    console.log(workoutData);
    setAreaData(workoutData);
    return arr;
  }

  useEffect(() => {
    setOrganisedData(dataCreation(workouts));
  }, [workouts]);

  return (
    <Flex justify="space-evenly" pb="1.5rem">
      <ResponsiveContainer
        width="25%"
        height="50%"
        minWidth="20rem"
        minHeight="20rem"
      >
        <LineChart data={organisedData}>
          <Line type="montone" dataKey="uv" stroke={labelColor} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip tick={{ fill: labelColor }} />
          <Legend verticalAlign="top" height={36} />
          <XAxis dataKey="name" tick={{ fill: labelColor, fontSize: 12.5 }} />
          <YAxis tick={{ fill: labelColor, fontSize: 12.5 }} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer
        width="75%"
        height="50%"
        minWidth="40rem"
        minHeight="20rem"
      >
        <AreaChart data={areaData}>
          <XAxis dataKey="name" tick={{ fill: labelColor, fontSize: 12.5 }} />
          <YAxis tick={{ fill: labelColor, fontSize: 12.5 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip tick={{ fill: labelColor }} />
          <Legend verticalAlign="top" height={35} />
          <Area
            type="monotone"
            dataKey="Deadlift"
            stackId="5"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="Bench"
            stackId="3"
            stroke="#737170"
            fill="#737170"
          />
          <Area
            type="monotone"
            dataKey="Squat"
            stackId="4"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="Overhead"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
          <Area
            type="monotone"
            dataKey="Bicep Curl"
            stackId="2"
            stroke="#f2665c"
            fill="#f2665c"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  );
}
