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