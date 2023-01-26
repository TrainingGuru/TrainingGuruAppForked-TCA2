const express = require("express");
const workoutController = require('../Controllers/WorkOutsController')


const router = express.Router();

//GetAllTrainers
router.get("/Workout",workoutController.Test);
router.get("/:id/WorkoutWeeks",workoutController.WorkOutWeeks);


module.exports = router;