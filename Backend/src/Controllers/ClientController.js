const Client = require("../Models/ClientModel");

const getAllClients = async (req,res) =>{
    let clients = await Client.findAll()
    if(clients.length < 1){
        res.status(404)
        res.end()
    }
    else{
        res.status(200).send(clients)
        res.end();
    }
}

//Just returns Names
const getAllClientsForTrainer = async (req,res) =>{

    let id = req.params.id;
    // let clients = await Client.findAll({where : {TrainerID: id}});
    // if(clients.length < 1){
    //     res.status(404)
    //     res.end()
    // }
    // else{
    //     res.status(200).send(clients)
    //     res.end();
    // }

    Client.findAll({
        where : {
            TrainerID : id
        },
        attributes:['Name'],
    }).then(function (list){
        if(list.length <= 0){
            res.status(404).json("Trainer has No Clients")
        }
        else{
            res.status(200).json(list);
        }
    })
}

const loginClient = async (req, res) => {

    let clients = await Client.findOne({where : {
            Email: req.body.Email,
        }});

    if(!clients){
        res.status(404).send("No User found")
    }else if(clients.Password == req.body.Password){
        res.status(200).send("Login Details Valid")
    }else{
        res.status(401).send("Incorrect Password")
    }
}


module.exports = {getAllClients,getAllClientsForTrainer,loginClient}