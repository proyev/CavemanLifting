import { Request, Response } from 'express';
import db from '../models/index';

import { User } from '../models/interfaces/user';
import { Workout } from '../models/interfaces/workout';
import { Exercise } from '../models/interfaces/exercise';

const getUser = async (req: Request, res: Response) => {
  // Standard get request routing
  try {
    const user: User = await db.User.findById(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // cleanup of workouts id from the front end
    if (req.body.workouts) {
      req.body.workouts.map((workout: Workout) => {
        if (workout.id) {
          delete workout.id;
        }
        return workout.id;
      });
    }
    const updatedUser: User = await db.User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(updatedUser);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};

const getWorkouts = async (req: Request, res: Response) => {
  // Standard get request routing
  try {
    // TODO find User by id or smth -> find user's workout array
    const workouts: Workout = await db.User.findById(req.params.id).select(
      'workouts'
    );
    res.status(200).send(workouts);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};

const postWorkout = async (req: Request, res: Response) => {
  // Standard post request routing
  try {
    const { id, title, date, routine, notes } = req.body;
    // 'routine' is sent despite not inputting data in POST request
    // This was done because I believe setting the array of subSchemas
    // was easier than not creating it and then trying to insert a new
    // prop:value, not even sure if thats possible
    const workoutToPost: Workout = await db.User.findByIdAndUpdate(id, {
      $push: {
        workouts: {
          title,
          date,
          routine,
          notes,
        },
      },
      $new: true,
    });
    res.status(201);
    res.send(workoutToPost);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};

const addInfo = async (req: Request, res: Response) => {
  try {
    // id of DB item to be changed is taken from the params
    const { id } = req.params;

    const workoutToUpdate: Workout = await db.User.findOneAndUpdate(
      {
        'workouts._id': id,
      },
      {
        $push: {
          routine: req.body,
        },
        $new: true,
      }
      // $push is a mongoDB operator that functions identically to JS push
    );
    res.status(201);
    res.send(workoutToUpdate);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};

const getWorkoutInfo = async (req: Request, res: Response) => {
  try {
    const workoutInfoCards: Exercise[] = await db.Exercises.find();
    res.status(200).send(workoutInfoCards);
  } catch (e) {
    console.error(e);
  }
};
// creates mock user in DB
async function createMockUser(req: Request, res: Response) {
  try {
    const newUser: User = await db.User.create(req.body);
    res.status(201).send(newUser);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
}

async function setMockupWorkouts() {
  const workout = [
    {
      title: 'DEADLIFT',
      body: 'Deadlifts are one of the most important strength exercises, and they provide an array of benefits.\n\nThey require and build core strength, which helps to establish safe motor patterns, stabilize the trunk, and improve coordination and agility. This makes them a popular choice among bodybuilders and athletes who want to boost their performance.\n\nDeadlifts are also popular among people who want to bring ease to their daily activities. They can increase range of motion in the hips and knees, enhance joint stability, and improve bone density.\n\nPlus, they’re an adaptable, versatile exercise with plenty of variations that allow you to tailor your workout to meet your needs, goals, and abilities.\n\nRead on to learn more about the different types of deadlifts, as well as the muscles they target, benefits, and cautions.',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      badge: ['Beginner', 'Core', 'Full-Body'],
    },
    {
      title: 'OVERHEAD PRESS',
      body: 'The overhead press is often called the shoulder press, but while all three heads of your shoulders are indeed working with the lift, they’re far from the only muscles used.',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
      badge: ['Beginner', 'Core', 'Upper-Body'],
    },
    {
      title: 'BENCH PRESS',
      body: 'Bench presses are an exercise that can be used to tone the muscles of the upper body, including the pectorals, arms, and shoulders.',
      img: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      badge: ['Beginner', 'Chest', 'Upper-Body'],
    },
    {
      title: 'SQUAT',
      body: 'The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously.',
      img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80',
      badge: ['Beginner', 'Glutes', 'Lower-Body'],
    },
    {
      title: 'BICEP-CURL',
      body: 'The humble bicep curl is your simplest lift, and an essential ingredient in your quest for titanic arms.',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
      badge: ['Beginner', 'Arms', 'Upper-Body'],
    },
    {
      title: 'SUMO DEADLIFT',
      body: 'The Sumo deadlift variation has you adopt a much wider stance, with your feet turned 45 degrees or more outward.',
      img: 'https://images.unsplash.com/photo-1534367990512-edbdca781b00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      badge: ['Intermediate', 'Core', 'Full-Body'],
    },
  ];

  const res = await db.Exercises.create([...workout]);
  console.log(res);
}

export {
  getUser,
  getWorkouts,
  postWorkout,
  addInfo,
  getWorkoutInfo,
  createMockUser,
  updateUser,
};

// // TODO:
// //  Add removal of workout
