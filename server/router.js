const express = require('express');
const router = express.Router();
const caveman = require('./controllers/caveman.controller');

router.get('/dashboard', caveman.getWorkouts);
router.get('/profile', caveman.getUser);
router.post('/exercise', caveman.postWorkout);

module.exports = router;
