const express = require("express");
const workoutController = require('../Controllers/WorkOutsController')


const router = express.Router();

//GetAllTrainers
router.get("/Test",workoutController.Test);


module.exports = router;