const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutInfoCardSchema = new Schema({
  title: { type: String },
  body: { type: String },
  img: { type: String },
  badge: { type: [String] },
});

module.exports = mongoose.model('workoutcardsinfo', workoutInfoCardSchema);
