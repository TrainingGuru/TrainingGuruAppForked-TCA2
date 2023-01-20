
const Trainer = require("../Models/TrainersModel");

//GetAllTrainer

const getAllTrainers = async (req,res) =>{

    let trainers = await Trainer.findAll({})
    res.status(200).send(trainers)
    console.log("called")
}

module.exports = {getAllTrainers}
