const express = require("express");
const trainerController = require('../Controllers/TrainerController')


const router = express.Router();

//GetAllTrainers
router.get("/",trainerController.getAllTrainers)
router.put("/",trainerController.registerTrainer)


module.exports = router;