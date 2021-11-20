import { ObjectId } from 'mongoose';
import { Workout } from './workout';

export interface User {
  _id: ObjectId;
  username: string;
  program: string;
  location: string;
  workouts: Workout[];
  firstname: string;
  lastname: string;
  bio: string;
}
