import express from 'express';
import cors from 'cors';

import router from './router';

// const db = require('./models');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    // await db;
    // console.log(`
    //   DATABASE ${db}
    // `);
    app.listen(PORT, () => {
      // console.log(`http://localhost:${PORT}`);
    });
  } catch (err) {
    // console.log(err);
  }
})();

/*
This is a relatively standard Express, MongoDB, Mongoose setup
Checkout the controllers for additional comments on the code.
*/
