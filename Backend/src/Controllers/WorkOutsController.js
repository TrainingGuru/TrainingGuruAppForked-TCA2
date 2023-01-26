const Workout = require("../Models/WorkOutModel");
const TrainerWorkouts = require("../Models/TrainerWorkoutsModel");
const Exercise = require("../Models/ExerciseModel");
const ClientWorkOut = require("../Models/ClientWorkoutModel");
const Goal = require("../Models/GoalsModel");
const NutritionHistory = require("../Models/NutritionHistoryModel");
const PersonalBest = require("../Models/PersonalBestModel");

const Test = async (req,res) =>{
    let clients = await PersonalBest.findAll()
    if(clients.length < 1){
        res.status(404)
        res.end()
    }
    else{
        res.status(200).send(clients)
        res.end();
    }
}
module.exports = {
    Test,
    
}