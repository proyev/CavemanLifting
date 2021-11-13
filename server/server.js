const express = require('express');
const router = require('./router');
const app = express();
const cors = require('cors');
const db = require('./models');

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await db;
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();

/*
This is a relatively standard Express, MongoDB, Mongoose setup
Checkout the controllers for additional comments on the code.
*/
