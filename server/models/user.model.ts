const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  program: { type: String },
  location: { type: String },
  prs: [
    {
      workout: { type: String },
      weight: { type: Number },
      reps: { type: Number },
    },
  ],
  firstname: { type: String },
  lastname: { type: String },
  bio: { type: String },
});

module.exports = mongoose.model('User', userSchema);
