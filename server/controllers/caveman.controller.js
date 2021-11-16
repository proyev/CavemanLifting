const User = require('../models/user.model');
const Workout = require('../models/workout.model');
const WorkoutInfoCard = require('../models/workoutinfocard.model');

const getUser = async (req, res) => {
  // Standard get request routing
  try {
    const user = await User.findOne();
    res.status(200).send(user);
  } catch (e) {
    console.error(e);
  }
};

const getWorkouts = async (req, res) => {
  // Standard get request routing
  try {
    const workouts = await Workout.find();
    res.status(200).send(workouts);
  } catch (e) {
    console.error(e);
  }
};

const postWorkout = async (req, res) => {
  // Standard post request routing
  try {
    const { title, date, routine, notes } = req.body;
    // 'routine' is sent despite not inputting data in POST request
    // This was done because I believe setting the array of subSchemas
    // was easier than not creating it and then trying to insert a new
    // prop:value, not even sure if thats possible
    const workoutToPost = await Workout.create({ title, date, routine, notes });
    res.status(201);
    res.send(workoutToPost);
  } catch (e) {
    console.error(e);
  }
};

const addInfo = async (req, res) => {
  try {
    const workout = req.body;
    // id of DB item to be changed is taken from the params
    const { id } = req.params;

    const workoutToUpdate = await Workout.findByIdAndUpdate(
      { _id: id },
      { $push: { routine: workout } }
      // $push is a mongoDB operator that functions identically to JS push
    );
    res.status(201);
    res.send(workoutToUpdate);
  } catch (e) {
    console.error(e);
  }
};

const getWorkoutInfo = async (req, res) => {
  try {
    const workoutInfoCards = await WorkoutInfoCard.find();
    res.status(200).send(workoutInfoCards);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getUser, getWorkouts, postWorkout, addInfo, getWorkoutInfo };

// TODO:
//  Add removal of workout
