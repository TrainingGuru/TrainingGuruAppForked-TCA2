const express = require("express");
const clientController = require('../Controllers/ClientController')


const router = express.Router();

//GetAllTrainers
router.get("/",clientController.getAllClients)
router.get("/Trainer/:id",clientController.getAllClientsForTrainer)
router.get("/Login",clientController.loginClient)


module.exports = router;