const express = require("express");
const workoutController = require('../Controllers/WorkOutsController')


const router = express.Router();

//GetAllTrainers
router.get("/:id/WorkoutWeeks",workoutController.WorkOutWeeks);
router.get("/:id/Workouts/:wk",workoutController.GetWorkOutsForWeek);
router.get("/Workout/:id",workoutController.GetWorkOutDetails);


module.exports = router;