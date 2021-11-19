import { Schema } from "mongoose";
import userWorkoutSchema from "./workout.model";

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  program: {
    type: String
  },
  location: {
    type: String
  },
  workouts: {
    type: [userWorkoutSchema],
  },
  firstname: { type: String },
  lastname: { type: String },
  bio: { type: String },
});

//db name - User
export default userSchema;