import { Schema } from 'mongoose';
import userWorkoutSchema from './workout.model';
import { Workout } from './workout.model';
const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  program: {
    type: String,
  },
  location: {
    type: String,
  },
  workouts: {
    type: [userWorkoutSchema],
  },
  firstname: { type: String },
  lastname: { type: String },
  bio: { type: String },
});

export interface User {
  username: string;
  program: string;
  location: string;
  workouts: Workout[];
  firstname: string;
  lastname: string;
  bio: string;
}

// db name - User
export default userSchema;
