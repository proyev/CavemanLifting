const express = require('express');
const router = express.Router();
const caveman = require('./controllers/caveman.controller');

router.get('/dashboard', caveman.getWorkouts);
router.get('/profile', caveman.getUser);
router.post('/exercise', caveman.postWorkout);
router.put('/addinfo/:id', caveman.addInfo);
router.get('/user/:id', caveman.getUser);

module.exports = router;
