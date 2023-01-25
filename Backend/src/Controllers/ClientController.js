const Client = require("../Models/ClientModel");

const getAllClients = async (req,res) =>{
    let trainers = await Client.findAll()
    if(trainers.length < 1){
        res.status(404)
        res.end()
    }
    else{
        res.status(200).send(trainers)
        res.end();
    }
}

module.exports = {getAllClients}