import { model, Model } from "mongoose";

import userSchema from "./user.model";
import workoutInfoCardSchema from "./workoutinfocard.model";

const db= {
  User: Model,
  Exercises: Model
}
db.User = model("User", userSchema)
//db Myworkouts changed to Exercises
db.Exercises = model('Exercises', workoutInfoCardSchema)

export default db;
