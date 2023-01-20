const express = require("express");
const trainerController = require('../Controllers/TrainerController')


const router = express.Router();

//GetAllTrainers
router.get("/")



//router.get("/", trainerController.getAll);

module.exports = router;