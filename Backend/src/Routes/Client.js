const express = require("express");
const clientController = require('../Controllers/ClientController')


const router = express.Router();

//GetAllTrainers
router.get("/",clientController.getAllClients)


module.exports = router;