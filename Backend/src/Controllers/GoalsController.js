const {Sequelize} = require("sequelize");

const Goals = require("../Models/GoalsModel");

const getAllGoalsForClient = async (req,res) =>{
    let clients = await Goals.findAll()

    if(clients.length < 1){
        res.status(404)
        res.end()
    }
    else{
        res.status(200).send(clients)
        res.end();
    }
}


module.exports = {

    getAllGoalsForClient

}