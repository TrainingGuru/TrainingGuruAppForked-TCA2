const {Sequelize} = require("sequelize");

const ClientWorkOut = require("../Models/ClientWorkoutModel");
const PersonalBest = require("../Models/PersonalBestModel");
const WorkOuts = require("../Models/TrainerWorkoutsModel");
const WorkOut = require("../Models/WorkOutModel");
const Exercises = require("../Models/ExerciseModel")


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

const WorkOutWeeks = async (req,res) => {


    await ClientWorkOut.findAll({
        where : {
            ClientID : req.params.id
        },
        attributes:[
            Sequelize.fn('DISTINCT',Sequelize.col('Week')),'Week']
        // include: [
        //     {model: workout}
        // ]
    }).then(function (weekList){
        if(weekList.length <= 0){
            res.status(404).json("No Workouts Found");
        }else{
            res.status(200).json(weekList);
        }
    });
}
const GetWorkOutsForWeek = async (req,res) => {

    await ClientWorkOut.findAll({
        where : {
            ClientID : req.params.id,
            Week : req.params.wk
        },
        include: [
            {model: WorkOuts}
        ]
    }).then(function (List){
        if(List.length <= 0){
            res.status(404).json("No Workouts Found");
        }else{
            res.status(200).json(List);
        }
    });
}


const GetWorkOutDetails = async (req,res) => {

    await WorkOut.findAll({
        include:{
            model: Exercises
        },
        where : {
            TrainerWorkoutID : req.params.id
        },

    }).then(function (Workout){
        if(Workout.length <= 0){
            res.status(404).json("No Workout Found");
        }else{
            res.status(200).json(Workout);
        }
    });

}

//Use able Methods in

module.exports = {
    Test,
    WorkOutWeeks,
    GetWorkOutsForWeek,
    GetWorkOutDetails
    
}