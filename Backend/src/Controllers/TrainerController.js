
const Trainer = require("../Models/TrainersModel");
const {EmptyPacket} = require("mysql/lib/protocol/packets");

//GetAllTrainer
const getAllTrainers = async (req,res) =>{
    let trainers = await Trainer.findAll()
    if(trainers.length < 1){
        res.status(404)
        res.end()
    }
    else{
        res.status(200).send(trainers)
        res.end();
    }
}

const registerTrainer =  (req, res) => {
//TODO:: Hash Password, Error handling (Catch), Add account to db,
// https://www.promisejs.org/
    if(!req.body){
        return res.status(400).json({message : 'No Body Sent'})
        console.log("no body")
    }else{
        let trainer = {
            Name : req.body.Name,
            Email: req.body.Email,
            Password: req.body.Password
        }

        Trainer.create(trainer).then((trainerToAdd) => res.status(201).send(trainerToAdd)).catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
    }

    //console.log(req.body);

    // res.status(400);
    // res.end()

    // let trainerFromRepo = Trainer.findOne({where : { Email : req.body.Email}});
    // if(trainerFromRepo != null)
    //     res.status(409).json({message: 'User Email Already Used'});

    
    //return res.status(200).json({message: 'not Used'});
    // res.end()

    // console.log((trainerFromRepo))

    //Check email is not registered
    // Trainer.findOne({where : {
    //     Email: req.body.Email,
    //     }})
    //     .then(userAccount => {
    //         if(userAccount){
    //             return res.status(409).json({message: 'User Email Already Used'})
    //         }
    //         else{
    //             //return Trainer.create(trainer)
    //             res.status(200).json(trainer)
    //         }
    //     })

}

module.exports = {getAllTrainers, registerTrainer}
