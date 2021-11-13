const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subSchema = require('./workoutinfo.model');

const workoutSchema = new Schema({
  title: { type: String },
  date: { type: Date },
  routine: { type: [subSchema], default: [] },
  notes: { type: String },
});

module.exports = mongoose.model('Myworkout', workoutSchema);
