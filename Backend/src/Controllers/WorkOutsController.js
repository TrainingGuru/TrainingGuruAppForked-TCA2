const Workout = require("../Models/WorkOutModel");
const TrainerWorkouts = require("../Models/TrainerWorkoutsModel");
const Exercise = require("../Models/ExerciseModel");
const ClientWorkOut = require("../Models/ClientWorkout");
const Goal = require("../Models/GoalsModel");
const NutritionHistory = require("../Models/NutritionHistory");


const Test = async (req,res) =>{
    let clients = await NutritionHistory.findAll()
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