const express = require('express');
const router = express.Router();
const caveman = require('./controller/caveman.controller');

router.get('/dashboard', caveman.getEvents);
router.get('/profile', caveman.postEvent);
router.get('/exercise', caveman.postEvent);
router.post('/exercise', caveman.postEvent);

module.exports = router;
