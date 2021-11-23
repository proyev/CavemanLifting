import React, { useEffect, useState } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

export default function Chart({ workouts }) {
  const [organisedData, setOrganisedData] = useState([]);
  const labelColor = useColorModeValue('black', 'white');

  //TODO There is a better way to work with month and dates
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
    if (data) {
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
    }
    const arr = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
    return arr;
  }

  useEffect(() => {
    setOrganisedData(dataCreation(workouts));
  }, [workouts]);

  return (
    <ResponsiveContainer width="95%" height="90%">
      <LineChart data={organisedData}>
        <Line type="montone" dataKey="uv" stroke={labelColor} />
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="name" tick={{ fill: labelColor, fontSize: 12.5 }} />
        <YAxis tick={{ fill: labelColor, fontSize: 12.5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
