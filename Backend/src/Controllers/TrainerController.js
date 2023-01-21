
const Trainer = require("../Models/TrainersModel");

//GetAllTrainer

const getAllTrainers = async (req,res) =>{

    let trainers = await Trainer.findAll()
    if(trainers.length < 1){
        res.status(404)
    }
    else{
        res.status(200).send(trainers)
    }
}

module.exports = {getAllTrainers}
