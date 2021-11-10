const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  program: { type: String },
  location: { type: String },
  prs: [
    {
      workout: String,
      record: String,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
