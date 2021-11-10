const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: { type: String },
  date: { type: Date },
  routine: [
    {
      weight: Number,
      sets: Number,
      reps: Number,
      rest: Number,
    },
  ],
});

module.exports = mongoose.model('Myworkout', workoutSchema);
