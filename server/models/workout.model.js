const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: { type: String },
  date: { type: Date },
  routine: [
    {
      lift: String,
      weight: Number,
      sets: Number,
      reps: Number,
      rest: Number,
    },
  ],
  notes: { type: String },
});

module.exports = mongoose.model('Myworkout', workoutSchema);
