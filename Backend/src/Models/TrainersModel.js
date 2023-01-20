import { Sequelize } from 'sequelize';
import sequelize from '../Config/DatabaseConfig';

const Trainer = sequelize.define('trainer',{
    TrainerID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
    }
});

module.exports = Trainer;