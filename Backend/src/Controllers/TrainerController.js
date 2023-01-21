
const Trainer = require("../Models/TrainersModel");
const {EmptyPacket} = require("mysql/lib/protocol/packets");

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
//TODO:: Hash Password, Error handling (Catch), Add account to db,

    // if(!req.body)
    //     return res.status(400).json({message : 'No Body Sent'})

    let trainer = {
        Name : req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password
    }

    //Check email is not registered
    Trainer.findOne({where : {
        Email: req.body.Email,
        }})
        .then(userAccount => {
            if(userAccount){
                return res.status(409).json({message: 'User Email Already Used'})
            }
            else{
                return Trainer.create(trainer)
                res.status(200).json(trainer)
            }
        })

}

module.exports = {getAllTrainers, registerTrainer}
