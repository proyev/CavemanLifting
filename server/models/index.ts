import { model, Model } from 'mongoose';

import userSchema, { User } from './user.model';
import workoutInfoCardSchema, { Exercise } from './workoutinfocard.model';

const db = {
  User: Model,
  Exercises: Model,
};
db.User = model<User>('User', userSchema);
// db Myworkouts changed to Exercises
db.Exercises = model<Exercise>('Exercises', workoutInfoCardSchema);

export default db;
