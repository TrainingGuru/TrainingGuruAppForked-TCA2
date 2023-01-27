const express = require("express");
const goalController = require('../Controllers/GoalsController')


const router = express.Router();

//GetAllTrainers
router.get("/",goalController.getAllGoalsForClient)



module.exports = router;