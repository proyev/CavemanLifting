"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const caveman_controller_1 = require("./controllers/caveman.controller");
router.get('/dashboard', caveman_controller_1.getWorkouts);
router.get('/profile', caveman_controller_1.getUser);
router.post('/exercise', caveman_controller_1.postWorkout);
router.put('/addinfo/:id', caveman_controller_1.addInfo);
router.get('/user/:id', caveman_controller_1.getUser);
router.get('/workoutinfo', caveman_controller_1.getWorkoutInfo);
router.post('/new-user', caveman_controller_1.createMockUser);
exports.default = router;
//# sourceMappingURL=router.js.map