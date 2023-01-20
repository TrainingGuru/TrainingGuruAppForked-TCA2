const express = require("express");

const router = express.Router();

const trainerController = require('../Controllers/TrainerController')

router.get("/", trainerController.getAll);

module.exports = router;