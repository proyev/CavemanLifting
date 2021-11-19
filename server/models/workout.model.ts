import { Schema } from 'mongoose';

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

export interface Workout {
  title: string;
  date: Date | number;
  notes: string;
  routine: Routine[];
}

interface Routine {
  lift: string;
  weight: number;
  sets: number;
  reps: number;
  rest: number;
}
// db name 'Myworkout'
export default userWorkoutSchema;
