const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
  lift: String,
  weight: Number,
  sets: Number,
  reps: Number,
  rest: Number,
});

module.exports = subSchema;
