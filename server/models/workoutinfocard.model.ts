import { Schema } from 'mongoose';
import { Exercise } from './interfaces/exercise';

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

// db name - workoutcardsinfo
export default workoutInfoCardSchema;
