interface Routine {
  lift: string;
  weight: number;
  sets: number;
  reps: number;
  rest: number;
}

export interface Exercise {
  _id?: string;
  title: string;
  body: string;
  img: string;
  badge: string[];
}

export interface Workout {
  _id?: string;
  id: string;
  title: string;
  date: string;
  notes: string;
  routine: Routine[];
}

export interface User {
  _id: any;
  username: string;
  program: string;
  location: string;
  workouts: Workout[];
  firstname: string;
  lastname: string;
  bio: string;
}

export interface AppState {
  showEditSession: boolean;
  showNavbar: boolean;
  showNewSession: boolean;
  workoutId?: string;
}

export interface Action {
  type: string;
  payload?: any;
  id?: string;
}