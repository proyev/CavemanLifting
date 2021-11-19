import { Schema } from 'mongoose';

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

export default mongoose.model('User', userSchema);
