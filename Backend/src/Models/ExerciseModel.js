const { Sequelize } = require('sequelize');
const sequelize = require('../Config/DatabaseConfig');

const ExerciseModel = sequelize.define("WorkOut",{
    ExerciseID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Type:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Sets:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Reps:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Instructions:{
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    tableName: 'ExerciseModel',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = ExerciseModel;