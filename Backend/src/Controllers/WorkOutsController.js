const {Sequelize} = require("sequelize");

const ClientWorkOut = require("../Models/ClientWorkoutModel");
const PersonalBest = require("../Models/PersonalBestModel");
const WorkOuts = require("../Models/TrainerWorkoutsModel");


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
        // attributes:[
        //     Sequelize.fn('DISTINCT',Sequelize.col('Week')),'Week']
        include: [
            {model: WorkOuts}
        ]
    }).then(function (weekList){
        if(weekList.length <= 0){
            res.status(404).json("No Workouts Found");
        }else{
            res.status(200).json(weekList);
        }
    });
}

//const

//Use able Methods in

module.exports = {
    Test,
    WorkOutWeeks,
    GetWorkOutsForWeek
    
}