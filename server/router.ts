import { Router } from 'express';
const router: Router = Router();
import {
  getUser,
  getWorkouts,
  postWorkout,
  addInfo,
  getWorkoutInfo,
  createMockUser,
} from './controllers/caveman.controller';

router.get('/dashboard', getWorkouts);
// router.get('/profile', getUser);
router.post('/exercise', postWorkout);
router.put('/addinfo/:id', addInfo);
router.get('/user/:id', getUser);
router.get('/workoutinfo', getWorkoutInfo);
router.post('/new-user', createMockUser); //test for mock data

export default router;
