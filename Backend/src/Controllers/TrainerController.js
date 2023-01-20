import Trainer from '../Models/TrainersModel'

//GetAllTrainer

const getAllTrainers = async (req,res) =>{

    let trainers = await Trainer.findAll({})
    res.status(200).send(trainers)
}

module.exports = {getAllTrainers}
