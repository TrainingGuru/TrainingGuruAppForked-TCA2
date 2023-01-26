const Workout = require("../Models/WorkOutModel");

const Test = async (req,res) =>{
    let clients = await Workout.findAll()
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
    Test,
    
}