import { Workout } from "./workout";

export interface User {
  username: string;
  program: string;
  location: string;
  workouts: Workout[];
  firstname: string;
  lastname: string;
  bio: string;
}