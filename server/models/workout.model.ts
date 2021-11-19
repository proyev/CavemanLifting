import { Schema } from 'mongoose';
import { Workout } from './interfaces/workout';

const userWorkoutSchema = new Schema<Workout>({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  routine: {
    type: [
      {
        lift: {
          type: String,
          required: true,
        },
        weight: {
          type: Number,
          required: true,
        },
        sets: {
          type: Number,
          required: true,
        },
        reps: {
          type: Number,
          required: true,
        },
        rest: {
          type: Number,
          required: true,
        },
      },
    ],
    default: [],
  },
  notes: {
    type: String,
  },
});

// db name 'Myworkout'
export default userWorkoutSchema;
