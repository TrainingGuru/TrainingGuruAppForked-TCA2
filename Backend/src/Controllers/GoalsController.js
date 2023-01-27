const {Sequelize} = require("sequelize");

const Goals = require("../Models/GoalsModel");

const getAllGoalsForClient = async (req,res) =>{
    let goals = await Goals.findAll({
        where : {
            ClientID : req.params.id
        }
    })

    if(goals.length <=0){
        res.status(404).json(`Client ${req.params.id} has no Saved Goals`)
        res.end()
    }
    else{
        res.status(200).json(goals)
    }
}


module.exports = {

    getAllGoalsForClient

}