const express = require("express");
const trainerController = require('../Controllers/TrainerController')


const router = express.Router();

//GetAllTrainers
router.get("/",trainerController.getAllTrainers)



//router.get("/", trainerController.getAll);

module.exports = router;