const Workout = require("../Models/WorkOutModel");
const TrainerWorkouts = require("../Models/TrainerWorkoutsModel");
const Exercise = require("../Models/ExerciseModel");
const ClientWorkOut = require("../Models/ClientWorkout");

const Test = async (req,res) =>{
    let clients = await ClientWorkOut.findAll()
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