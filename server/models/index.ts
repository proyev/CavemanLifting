const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/caveman_db');

const db = mongoose.connection;

db.on('error', () => console.log(error));
db.on('open', () => console.log('We have been enlightened'));

module.exports = db;
