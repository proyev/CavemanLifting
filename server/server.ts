import express from 'express';
import cors from 'cors';
import  mongoose from 'mongoose';

import router from './router';

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/caveman_db');
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
})();

/*
This is a relatively standard Express, MongoDB, Mongoose setup
Checkout the controllers for additional comments on the code.
*/
