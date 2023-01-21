
const Trainer = require("../Models/TrainersModel");

//GetAllTrainer

const getAllTrainers = async (req,res) =>{

    let trainers = await Trainer.findAll()
    res.status(200).json(trainers)
    console.log("called")
    console.log(req)
}

module.exports = {getAllTrainers}
