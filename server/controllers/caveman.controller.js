const User = require('../models/user.model');
const Workout = require('../models/workout.model');

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);
    res.send(user);
  } catch (e) {
    console.error(e);
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    console.log(workouts);
    res.send(workouts);
  } catch (e) {
    console.error(e);
  }
};

const postWorkout = async (req, res) => {
  try {
    const { title, date, routine } = req.body;
    const workoutToPost = await Workout.create({ title, date, routine });
    console.log(workoutToPost);
    res.status(201);
    res.send(workoutToPost);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getUser, getWorkouts, postWorkout };
