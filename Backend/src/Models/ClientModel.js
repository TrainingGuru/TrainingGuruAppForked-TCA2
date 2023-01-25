const { Sequelize } = require('sequelize');
const sequelize = require('../Config/DatabaseConfig');
const Trainer = require("./TrainersModel");

const Client = sequelize.define('Client',{
        ClientID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        TrainerID:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'Trainers',
                key: 'TrainerID'
            }
        },
        Name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        Email:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        Password:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        NutritionID:{
            type: Sequelize.INTEGER,
            allowNull: true,
            foreignKey: true,
        }
    },
    {
        tableName: 'Client',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

Client.belongsTo(Trainer,{foreignKey: 'TrainerID'});
module.exports = Client;