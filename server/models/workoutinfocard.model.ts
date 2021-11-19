import { Schema } from "mongoose";

const workoutInfoCardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  badge: {
    type: [String]
  },
});

//db name - workoutcardsinfo
export default workoutInfoCardSchema;