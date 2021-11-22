export interface Workout {
  id?: string;
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
