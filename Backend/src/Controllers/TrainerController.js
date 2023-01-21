
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

const registerTrainer = async (req, res) => {

    //Check email is not registered
    Trainer.findOne({where : {
        email: req.body.email,
        }})
        .then(userAccount => {
            if(userAccount){
                return res.status(409)
            }
            else{
                res.status(200).json({message: 'no user'})
            }
        })

}

module.exports = {getAllTrainers}
