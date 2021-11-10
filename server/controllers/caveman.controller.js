const User = require('../models/user.model');
const Workout = require('../models/workout.model');

const getUser = async (req, res) => {
  try {
    const user = await User.findOne();
    res.status(200).send(user);
  } catch (e) {
    console.error(e);
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).send(workouts);
  } catch (e) {
    console.error(e);
  }
};

const postWorkout = async (req, res) => {
  try {
    const { title, date, routine, notes } = req.body;
    const workoutToPost = await Workout.create({ title, date, routine, notes });
    res.status(201);
    res.send(workoutToPost);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getUser, getWorkouts, postWorkout };

// TODO:
//  Add removal of workout
//  Add editing of created workouts
