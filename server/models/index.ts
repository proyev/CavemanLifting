import { model, Model } from 'mongoose';

import userSchema from './user.model';
import workoutInfoCardSchema from './workoutinfocard.model';

import { Exercise } from './interfaces/exercise';
import { User } from './interfaces/user';

const db = {
  User: Model,
  Exercises: Model,
};
db.User = model<User>('User', userSchema);
// db Myworkouts changed to Exercises
db.Exercises = model<Exercise>('Exercises', workoutInfoCardSchema);

export default db;
