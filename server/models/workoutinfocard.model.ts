import { Schema } from 'mongoose';

const workoutInfoCardSchema = new Schema<Exercise>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  badge: {
    type: [String],
  },
});

export interface Exercise {
  title: string;
  body: string;
  img: string;
  badge: string[];
}

// db name - workoutcardsinfo
export default workoutInfoCardSchema;
