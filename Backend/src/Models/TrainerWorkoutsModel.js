const { Sequelize } = require('sequelize');
const sequelize = require('../Config/DatabaseConfig');
const Trainer = require("./TrainersModel");
const Workout = require("./WorkOutModel");

const TrainerWorkouts = sequelize.define("TrainerWorkouts",{
    TrainerID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        references:{
            model: 'Trainer',
            key: 'TrainerID'
        }
    },
    WorkoutID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        references:{
            model: 'Workout',
            key: 'WorkoutID'
        }
    },
    WorkoutName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    tableName: 'ExerciseModel',
    timestamps: false,
    createdAt: false,
    updatedAt: false
});
//TrainerWorkouts.hasMany(Trainer,{foreignKey: 'TrainerID'})
//TrainerWorkouts.hasMany(Workout,{foreignKey: 'WorkoutID'})
module.exports = TrainerWorkouts;