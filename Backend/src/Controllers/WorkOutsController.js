const ClientWorkOut = require("../Models/ClientWorkoutModel");
const PersonalBest = require("../Models/PersonalBestModel");
const {Sequelize} = require("sequelize");

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
        //     {model: Workout}
        // ]
    }).then(function (weekList){
        if(weekList.length <= 0 || weekList == null){
            res.status(404).json("No Workouts Found");
        }else{
            res.status(200).json(weekList);
        }
    });
}

//Use able Methods in

module.exports = {
    Test,
    WorkOutWeeks
    
}