const express = require("express");
const trainerController = require('../Controllers/TrainerController')


const router = express.Router();

//GetAllTrainers
router.get("/",trainerController.getAllTrainers)


module.exports = router;