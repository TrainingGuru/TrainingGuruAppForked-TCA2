const express = require("express");
const trainerController = require('../Controllers/TrainerController');


const router = express.Router();

//GetAllTrainers
router.get("/",trainerController.getAllTrainers)
router.put("/Register",trainerController.registerTrainer)
router.get("/Login",trainerController.loginTrainer)
router.get("/:id/Clients",trainerController.getAllClientsForTrainer)

module.exports = router;