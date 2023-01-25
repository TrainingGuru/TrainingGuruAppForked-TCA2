const express = require("express");
const clientController = require('../Controllers/ClientController')


const router = express.Router();

//GetAllTrainers
router.get("/",clientController.getAllClients)
router.get("/Trainer/:id",clientController.getAllClientsForTrainer)
router.get("/Login",clientController.loginClient)
router.put("/Register",clientController.registerClient)


module.exports = router;